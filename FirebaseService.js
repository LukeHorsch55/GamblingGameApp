import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdS5MZK_LinPlIcaeBhyCwgMNQVunMc8s",
  authDomain: "gamblinggame-f9e1a.firebaseapp.com",
  projectId: "gamblinggame-f9e1a",
  storageBucket: "gamblinggame-f9e1a.appspot.com",
  messagingSenderId: "411215237402",
  appId: "1:411215237402:web:3a6f55f3ad11c3afc49ca3",
  measurementId: "G-WTX9H1VBPH",
};

let firebase;
let database;

export { firebase, database };

export const firebaseInit = async () => {
  firebase = initializeApp(firebaseConfig);
  database = getFirestore(firebase);
};

export const getAvailableGames = async () => {
  let returnArray = [];

  let availableGamesCollection = await collection(database, "availableGames");
  let gameDocs = await getDocs(availableGamesCollection);
  let games = await gameDocs.docs;

  games.forEach((game) => {
    returnArray.push(game.data());
  });

  return returnArray;
};
