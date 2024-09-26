// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCshNvsiB33Znc7i1cOPx1EW1niuYcfEg",
  authDomain: "selva-cdf75.firebaseapp.com",
  projectId: "selva-cdf75",
  storageBucket: "selva-cdf75.appspot.com",
  messagingSenderId: "942606416063",
  appId: "1:942606416063:web:0f324600f5fc775400ae0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
