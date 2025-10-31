// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, query, where, addDoc, doc, writeBatch } from "firebase/firestore";
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
  console.log(data);
  return data;
}

// Get products by category
export async function getItemsByCategory(categoryId){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("categoryId", "==", categoryId));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export function getItemById(itemId){

  return itemId;  //TODO: Implementar función para obtener item por Id desde Firestore

}

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
