import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCHCTeuhA6u9483ShzwPQDSZRwXdCiuD3w",
    authDomain: "wild-bicycle.firebaseapp.com",
    projectId: "wild-bicycle",
    storageBucket: "wild-bicycle.firebasestorage.app",
    messagingSenderId: "140128395248",
    appId: "1:140128395248:web:00fa2fd8723b9bd168c735"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
