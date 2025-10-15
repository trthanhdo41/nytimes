# Firebase Setup Guide

This guide will help you set up Firebase for the Wirecutter Admin Panel.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `wirecutter-clone` (or any name you like)
4. Click **Continue**
5. Disable Google Analytics (optional, not needed for this project)
6. Click **Create project**

## Step 2: Register Your Web App

1. In the Firebase Console, click the **Web icon** (</>) to add a web app
2. Enter app nickname: `Wirecutter Admin`
3. **DO NOT** check "Set up Firebase Hosting" (we'll use Vercel/Netlify)
4. Click **Register app**

## Step 3: Get Your Firebase Config

After registering, you'll see a config object like this:

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

**Copy this entire object!**

## Step 4: Update Your Code

1. Open file: `src/firebase/config.js`
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",           // Replace with your apiKey
  authDomain: "YOUR_AUTH_DOMAIN",   // Replace with your authDomain
  projectId: "YOUR_PROJECT_ID",     // Replace with your projectId
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your storageBucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your messagingSenderId
  appId: "YOUR_APP_ID"              // Replace with your appId
};
```

## Step 5: Enable Authentication

1. In Firebase Console, go to **"Build" > "Authentication"**
2. Click **"Get started"**
3. Click on **"Sign-in method"** tab
4. Enable **"Email/Password"** provider:
   - Click on "Email/Password"
   - Toggle **Enable** to ON
   - Click **Save**

## Step 6: Create Your First Admin User

1. Still in **Authentication** section
2. Click on **"Users"** tab
3. Click **"Add user"**
4. Enter:
   - Email: `admin@wirecutter.com` (or your email)
   - Password: `admin123` (or your secure password)
5. Click **"Add user"**

**IMPORTANT:** Remember these credentials! You'll need them to login to `/admin/login`

## Step 7: Set Up Firestore Database

1. In Firebase Console, go to **"Build" > "Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in production mode"** (we'll add rules later)
4. Choose your location (select closest to your users)
5. Click **"Enable"**

## Step 8: Set Up Firestore Security Rules

1. In Firestore Database, click on **"Rules"** tab
2. Replace the default rules with these:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to articles
    match /articles/{article} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click **"Publish"**

## Step 9: Set Up Firebase Storage

1. In Firebase Console, go to **"Build" > "Storage"**
2. Click **"Get started"**
3. Click **"Next"** (keep production mode)
4. Choose your location (same as Firestore)
5. Click **"Done"**

## Step 10: Set Up Storage Security Rules

1. In Storage, click on **"Rules"** tab
2. Replace the default rules with these:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /articles/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024  // Max 5MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

3. Click **"Publish"**

## Step 11: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to: **http://localhost:5173/admin/login**

3. Login with the credentials you created in Step 6

4. You should see the Admin Dashboard!

## Step 12: Create Your First Article

1. Click **"New Article"** button
2. Fill in the form:
   - Title: "Test Article"
   - Category: Select any
   - Author: Your name
   - Upload an image
   - Write excerpt and content
3. Click **"Save Article"**
4. Go to homepage to see your article!

---

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure you updated `src/firebase/config.js` with your Firebase config

### Error: "Missing or insufficient permissions"
- Check Firestore Security Rules (Step 8)
- Make sure you're logged in

### Images not uploading
- Check Storage Security Rules (Step 10)
- Make sure image is less than 5MB

### Can't login
- Check if Email/Password is enabled in Authentication
- Make sure you created a user in Step 6

---

## Free Tier Limits

Firebase Free Tier (Spark Plan) includes:
- ✅ 1GB Storage
- ✅ 10GB Bandwidth/month
- ✅ 50,000 Reads/day
- ✅ 20,000 Writes/day
- ✅ Authentication: Unlimited

This is **more than enough** for a small to medium blog/review site!

---

## Need Help?

If you have any issues, check:
1. Firebase Console > Project Settings > Service accounts
2. Make sure all services are enabled
3. Check browser console for errors

Good luck! 🚀

