# Hướng Dẫn Cài Đặt Firebase (Tiếng Việt)

Hướng dẫn này giúp bạn setup Firebase cho trang Admin.

## Bước 1: Tạo Firebase Project

1. Vào trang [Firebase Console](https://console.firebase.google.com/)
2. Nhấn **"Add project"** (Thêm dự án) hoặc **"Create a project"** (Tạo dự án)
3. Nhập tên dự án: `wirecutter-clone` (hoặc tên bất kỳ)
4. Nhấn **Continue** (Tiếp tục)
5. Tắt Google Analytics (không cần thiết)
6. Nhấn **Create project** (Tạo dự án)

## Bước 2: Đăng Ký Web App

1. Trong Firebase Console, nhấn biểu tượng **Web** (</>) để thêm ứng dụng web
2. Nhập tên ứng dụng: `Wirecutter Admin`
3. **KHÔNG** tích vào "Set up Firebase Hosting"
4. Nhấn **Register app** (Đăng ký ứng dụng)

## Bước 3: Lấy Firebase Config

Sau khi đăng ký, bạn sẽ thấy đoạn code như này:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

**Copy toàn bộ đoạn code này!**

## Bước 4: Cập Nhật Code

1. Mở file: `src/firebase/config.js`
2. Thay thế các giá trị YOUR_XXX bằng config của bạn:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",              // Thay bằng apiKey của bạn
  authDomain: "xxx.firebaseapp.com", // Thay bằng authDomain của bạn
  projectId: "xxx",                  // Thay bằng projectId của bạn
  storageBucket: "xxx.appspot.com",  // Thay bằng storageBucket của bạn
  messagingSenderId: "123456",       // Thay bằng messagingSenderId của bạn
  appId: "1:123456:web:abc"          // Thay bằng appId của bạn
};
```

## Bước 5: Bật Authentication (Đăng nhập)

1. Trong Firebase Console, vào **"Build" > "Authentication"**
2. Nhấn **"Get started"** (Bắt đầu)
3. Nhấn tab **"Sign-in method"** (Phương thức đăng nhập)
4. Bật **"Email/Password"**:
   - Nhấn vào "Email/Password"
   - Bật công tắc **Enable** lên
   - Nhấn **Save** (Lưu)

## Bước 6: Tạo Tài Khoản Admin Đầu Tiên

1. Vẫn ở mục **Authentication**
2. Nhấn tab **"Users"** (Người dùng)
3. Nhấn **"Add user"** (Thêm người dùng)
4. Nhập:
   - Email: `admin@wirecutter.com` (hoặc email của bạn)
   - Password: `admin123` (hoặc mật khẩu bạn muốn)
5. Nhấn **"Add user"**

**QUAN TRỌNG:** Nhớ email và password này để đăng nhập `/admin/login`

## Bước 7: Tạo Firestore Database

1. Trong Firebase Console, vào **"Build" > "Firestore Database"**
2. Nhấn **"Create database"** (Tạo cơ sở dữ liệu)
3. Chọn **"Start in production mode"** (Bắt đầu ở chế độ sản xuất)
4. Chọn vị trí gần bạn nhất (ví dụ: asia-southeast1)
5. Nhấn **"Enable"** (Bật)

## Bước 8: Cài Đặt Firestore Security Rules (Quy tắc bảo mật)

1. Trong Firestore Database, nhấn tab **"Rules"** (Quy tắc)
2. Thay thế toàn bộ nội dung bằng code này:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Cho phép mọi người đọc bài viết
    match /articles/{article} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Chặn tất cả truy cập khác
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Nhấn **"Publish"** (Xuất bản)

## Bước 9: Tạo Firebase Storage (Lưu trữ ảnh)

1. Trong Firebase Console, vào **"Build" > "Storage"**
2. Nhấn **"Get started"** (Bắt đầu)
3. Nhấn **"Next"** (Tiếp tục - giữ production mode)
4. Chọn vị trí (giống với Firestore)
5. Nhấn **"Done"** (Xong)

## Bước 10: Cài Đặt Storage Security Rules

1. Trong Storage, nhấn tab **"Rules"** (Quy tắc)
2. Thay thế toàn bộ nội dung bằng code này:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /articles/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024  // Tối đa 5MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

3. Nhấn **"Publish"** (Xuất bản)

## Bước 11: Kiểm Tra

1. Chạy lệnh:
   ```bash
   npm run dev
   ```

2. Mở trình duyệt, vào: **http://localhost:5173/admin/login**

3. Đăng nhập bằng email/password đã tạo ở Bước 6

4. Bạn sẽ thấy trang Admin Dashboard!

## Bước 12: Tạo Bài Viết Đầu Tiên

1. Nhấn nút **"New Article"** (Bài viết mới)
2. Điền form:
   - Title (Tiêu đề): "Bài viết test"
   - Category (Danh mục): Chọn bất kỳ
   - Author (Tác giả): Tên bạn
   - Upload ảnh
   - Viết excerpt (tóm tắt) và content (nội dung)
3. Nhấn **"Save Article"** (Lưu bài viết)
4. Vào trang chủ để xem bài viết!

---

## Xử Lý Lỗi Thường Gặp

### Lỗi: "Firebase: Error (auth/configuration-not-found)"
- Kiểm tra lại file `src/firebase/config.js` đã cập nhật đúng chưa

### Lỗi: "Missing or insufficient permissions"
- Kiểm tra lại Firestore Security Rules (Bước 8)
- Đảm bảo bạn đã đăng nhập

### Upload ảnh không được
- Kiểm tra lại Storage Security Rules (Bước 10)
- Đảm bảo ảnh nhỏ hơn 5MB

### Không đăng nhập được
- Kiểm tra Email/Password đã bật chưa (Bước 5)
- Kiểm tra đã tạo user chưa (Bước 6)

---

## Giới Hạn Free Tier

Firebase miễn phí (Spark Plan) bao gồm:
- ✅ 1GB dung lượng lưu trữ
- ✅ 10GB băng thông/tháng
- ✅ 50,000 lượt đọc/ngày
- ✅ 20,000 lượt ghi/ngày
- ✅ Authentication: Không giới hạn

**Đủ cho trang blog/review vừa và nhỏ!**

---

## Cần Trợ Giúp?

Nếu có vấn đề, kiểm tra:
1. Firebase Console > Project Settings > General (Cài đặt chung)
2. Đảm bảo tất cả dịch vụ đã bật
3. Kiểm tra console trình duyệt (F12) xem có lỗi không

Chúc may mắn! 🚀

