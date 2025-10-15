import { db } from './config';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  orderBy,
  limit,
  Timestamp 
} from 'firebase/firestore';

const COLLECTION_NAME = 'deals';

// Create a new deal
export const createDeal = async (dealData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...dealData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating deal:', error);
    throw error;
  }
};

// Get all deals
export const getAllDeals = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const deals = [];
    querySnapshot.forEach((doc) => {
      deals.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toISOString(),
        updatedAt: doc.data().updatedAt?.toDate().toISOString()
      });
    });
    
    // Sort by createdAt descending
    deals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return deals;
  } catch (error) {
    console.error('Error getting deals:', error);
    throw error;
  }
};

// Get active deals (for homepage)
export const getActiveDeals = async (limitCount = 3) => {
  try {
    const deals = await getAllDeals();
    
    // Filter active deals and limit
    return deals
      .filter(deal => deal.active !== false)
      .slice(0, limitCount);
  } catch (error) {
    console.error('Error getting active deals:', error);
    throw error;
  }
};

// Get a single deal by ID
export const getDealById = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate().toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate().toISOString()
      };
    } else {
      throw new Error('Deal not found');
    }
  } catch (error) {
    console.error('Error getting deal:', error);
    throw error;
  }
};

// Update a deal
export const updateDeal = async (id, dealData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...dealData,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating deal:', error);
    throw error;
  }
};

// Delete a deal
export const deleteDeal = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting deal:', error);
    throw error;
  }
};

