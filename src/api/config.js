import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyDzoOgaJSqox1ta6xRFY81yiGDMZ-jFlUU",
  authDomain: "react-firebase-9385b.firebaseapp.com",
  projectId: "react-firebase-9385b",
  storageBucket: "react-firebase-9385b.appspot.com",
  messagingSenderId: "821630745911",
  appId: "1:821630745911:web:0c8624ed9cdada0b92aeb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


/**
 * upload a file to firebase storage
 * @param {File} file 
 * @returns {Promise < string>} url of the uploaded file
 */
export async function updateFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
