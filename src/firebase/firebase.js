import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxZTCcgZt3I2BZadi1HTuMLc-3lubXSU",
  authDomain: "seantodo-59011.firebaseapp.com",
  projectId: "seantodo-59011",
  storageBucket: "seantodo-59011.appspot.com",
  messagingSenderId: "239233315324",
  appId: "1:239233315324:web:154448fa7a75aef68f8279"
};
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

// 添加 Auth 服務
export const auth = getAuth(app);
export { db };
export default app;