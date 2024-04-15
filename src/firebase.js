
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCP3k0_Js6m51YadnrHZ36emgaaQctxcJE",
  authDomain: "chat-app-eec21.firebaseapp.com",
  projectId: "chat-app-eec21",
  storageBucket: "chat-app-eec21.appspot.com",
  messagingSenderId: "672028947515",
  appId: "1:672028947515:web:e27b696721e08de96c981e"
};

export const app = initializeApp(firebaseConfig);