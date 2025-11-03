// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, query, where, addDoc, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { items } from "../data/data";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzQnEpyS5g4yD-9WDIrjXYo_gKuYq2VwU",
  authDomain: "coderhouse-ecommerce-571d3.firebaseapp.com",
  projectId: "coderhouse-ecommerce-571d3",
  storageBucket: "coderhouse-ecommerce-571d3.firebasestorage.app",
  messagingSenderId: "461922567631",
  appId: "1:461922567631:web:5f47f2c78ad5fde40afeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get all products
export async function getAllItems() {
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

// Get products by category
export async function getItemsByCategory(code){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("categoryCode", "==", code));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

// Get featured products
export async function getFeaturedItems(){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("featured", "==", true));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

// Get on sale products
export async function getOnSaleItems(){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("onSale", "==", true));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

// Get product by Id
export async function getItemById(itemId){
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Create order from cart
export async function createOrder(orderData){
  const ordersRef = collection(db, "orders");
  const  docRef = await addDoc(ordersRef, orderData);
  return docRef.id;
}

// Initial load of products
export async function exportProducts(){
  const productsRef = collection(db, "products")
  for(let item of items){
    delete item.id;
    const newDoc = await addDoc(productsRef, item)
    console.log("doc creado", newDoc.id)
  }
}

// Get category by code
export async function getCategoryByCode(code){
  const docRef = collection(db, "categories");
  const q = query(docRef, where("code", "==", code));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  return data.length > 0 ? data[0] : null;
}
