import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export const fetchTodos = async () => {
  try {
    console.log("Attempting to fetch todos...");
    const querySnapshot = await getDocs(collection(db, "todos"));
    console.log("Fetch successful:", querySnapshot.size, "documents retrieved");
    
    const todosArray = [];
    querySnapshot.forEach((doc) => {
      todosArray.push({ id: doc.id, ...doc.data() });
    });
    
    return todosArray;
  } catch (error) {
    console.error("Error fetching todos:", error.code, error.message);
    console.error("Full error:", error);
    throw error;
  }
};

export const addTodo = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    return docRef;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const updateTodo = async (id, data) => {
  try {
    await updateDoc(doc(db, "todos", id), data);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todos", id));
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};