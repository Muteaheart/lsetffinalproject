import {getFirestore} from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXTvLVHorpleDUeXSIX3kKrJwBADW3zN0",
  authDomain: "lsetfproject-479de.firebaseapp.com",
  projectId: "lsetfproject-479de",
  storageBucket: "lsetfproject-479de.appspot.com",
  messagingSenderId: "596363688898",
  appId: "1:596363688898:web:76bc14524dfc327b13b45b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)

