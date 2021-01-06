import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import shortid from "shortid";
import { store } from "../redux/store";
import { setCurrentUser } from "../redux/user/user.actions";

const config = {
  apiKey: "AIzaSyB1QDGVCToTc-ALo7fcPKt7bYpdj_v6Bp0",
  authDomain: "leadsquid-83c52.firebaseapp.com",
  databaseURL: "https://leadsquid-83c52.firebaseio.com",
  projectId: "leadsquid-83c52",
  storageBucket: "leadsquid-83c52.appspot.com",
  messagingSenderId: "1098597049848",
  appId: "1:1098597049848:web:fd8fd709cf5249222da20d",
  measurementId: "G-BECPEPRS74",
};

firebase.initializeApp(config);
firebase.analytics();
//Function to generate new user's data
export const createUserProfileDocument = async (userAuth, fullName) => {
  const { email } = userAuth;
  console.log()
  //Sending data to the NodeJS server
  try {
    await fetch("https://swipemail.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        id: userAuth.uid,
        full_name: fullName,
        api_key: null,
        subscription: "Adopter",
        href: shortid.generate(),
        quota: 10000,
        subscriber_count: 0,
      }),
    })
      // Receiving the users data
      .then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
};
// Function to get user data from database
export const getUserData = async (id) => {
  let userData;
  // Connecting to the database throught nodeJS server
  try {
    await fetch("https://swipemail.herokuapp.com/getData", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      // Getting the data
      .then((data) => data.json())
      .then((result) => (userData = result));
    // Returning the user data
    return userData;
  } catch (error) {
    console.log(error);
  }
};

// Function to Generate a new link
export const generateNewLink = async (name, type) => {
  // Generating a new href
  const shortHref = shortid.generate();
  var result = "";
  // Sending Data to the nodeJS server
  try {
    await fetch("https://swipemail.herokuapp.com/newLink", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        owner_id: auth.currentUser.uid,
        href: shortHref,
        type: type,
      }),
    })
      .then((data) => data.json())
      .then((response) => (result = response));
    if (result.includes("already exists")) {
      return 1;
    }
    console.log(result);
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {
    console.log(error);
  }
};

// Functon to delete a link
export const deleteLink = async (href, type, list_id, apiKey) => {
  try {
    await fetch("https://swipemail.herokuapp.com/deleteLink", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        href,
        type,
        list_id,
        apiKey,
      }),
    });
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {
    console.log(error);
  }
};
export const deleteSubscriber = async (sub_id, subscribed_to) => {
  try {
    await fetch("https://swipemail.herokuapp.com/deleteSubscriber", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sub_id,
        subscribed_to,
      }),
    });
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export const createMailChimpLink = async (apiKey, name) => {
  const shortHref = shortid.generate();
  let response = "";
  try {
    await fetch("https://swipemail.herokuapp.com/newMailchimpLink", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey,
        name,
        owner_id: auth.currentUser.uid,
        href: shortHref,
      }),
    }).then((data) => (response = data.json()));

    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = async (email, apiKey, fullName) => {
  try {
    await fetch("https://swipemail.herokuapp.com/updateData", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: auth.currentUser.uid,
        email,
        apiKey,
        fullName,
      }),
    }).then((data) => data.json());

    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export const getPieChartData = (index, data) => {
  const name = [];
  const stats = [];
  if (index === 0) {
    data.week.forEach((item) => {
      name.push(item.campaign_name);
      stats.push(item.count);
    });
  } else if (index === 1) {
    data.month.forEach((item) => {
      name.push(item.campaign_name);
      stats.push(item.count);
    });
  } else {
    data.year.forEach((item) => {
      name.push(item.campaign_name);
      stats.push(item.count);
    });
  }

  return { name, stats };
};

export const getLineChartData = (index, data) => {
  const name = [];
  const stats = [];
  if (index === 0) {
    data.week.forEach((item) => {
      name.push(Object.keys(item));
      stats.push(parseInt(Object.values(item)));
    });
  } else if (index === 1) {
    data.month.forEach((item) => {
      name.push(Object.keys(item));
      stats.push(parseInt(Object.values(item)));
    });
  } else {
    data.year.forEach((item) => {
      name.push(Object.keys(item));
      stats.push(parseInt(Object.values(item)));
    });
  }

  return { name, stats };
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
