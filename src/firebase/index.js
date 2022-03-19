import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export { app, db };
