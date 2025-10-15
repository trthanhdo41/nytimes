import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './config';

const ARTICLES_COLLECTION = 'articles';

// Get all articles
export const getAllArticles = async () => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const snapshot = await getDocs(articlesRef);
    const articles = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    // Sort by createdAt descending (newest first)
    return articles.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  } catch (error) {
    console.error('Error getting articles:', error);
    throw error;
  }
};

// Get articles by category
export const getArticlesByCategory = async (category) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const q = query(articlesRef, where('category', '==', category));
    const snapshot = await getDocs(q);
    const articles = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    // Sort by createdAt descending (newest first)
    return articles.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  } catch (error) {
    console.error('Error getting articles by category:', error);
    throw error;
  }
};

// Get single article by ID
export const getArticleById = async (id) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate(),
        updatedAt: docSnap.data().updatedAt?.toDate()
      };
    } else {
      throw new Error('Article not found');
    }
  } catch (error) {
    console.error('Error getting article:', error);
    throw error;
  }
};

// Get single article by slug
export const getArticleBySlug = async (slug) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const q = query(articlesRef, where('slug', '==', slug), limit(1));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      };
    } else {
      throw new Error('Article not found');
    }
  } catch (error) {
    console.error('Error getting article by slug:', error);
    throw error;
  }
};

// Upload image to Firebase Storage
export const uploadImage = async (file, path = 'articles') => {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `${path}/${fileName}`);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    
    return {
      url: downloadURL,
      path: `${path}/${fileName}`
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Delete image from Firebase Storage
export const deleteImage = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
  } catch (error) {
    console.error('Error deleting image:', error);
    // Don't throw error if image doesn't exist
  }
};

// Create new article
export const createArticle = async (articleData) => {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, ARTICLES_COLLECTION), {
      ...articleData,
      createdAt: now,
      updatedAt: now
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

// Update article
export const updateArticle = async (id, articleData) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id);
    await updateDoc(docRef, {
      ...articleData,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating article:', error);
    throw error;
  }
};

// Delete article
export const deleteArticle = async (id) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};

// Get featured articles
export const getFeaturedArticles = async (limitCount = 5) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const q = query(articlesRef, where('featured', '==', true));
    const snapshot = await getDocs(q);
    const articles = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    // Sort by createdAt descending and limit
    return articles
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      .slice(0, limitCount);
  } catch (error) {
    console.error('Error getting featured articles:', error);
    throw error;
  }
};

// Get latest articles
export const getLatestArticles = async (limitCount = 10) => {
  try {
    const articlesRef = collection(db, ARTICLES_COLLECTION);
    const snapshot = await getDocs(articlesRef);
    const articles = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    // Sort by createdAt descending and limit
    return articles
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      .slice(0, limitCount);
  } catch (error) {
    console.error('Error getting latest articles:', error);
    throw error;
  }
};

