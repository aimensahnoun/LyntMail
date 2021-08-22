import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import shortid from "shortid";
import { store } from "../redux/store";
import { setCurrentUser } from "../redux/user/user.actions";
import Cookies from "js-cookie";
import { replace } from "formik";

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

  //Sending data to the NodeJS server
  try {
    await fetch("https://lyntmail.xyz/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        id: userAuth.uid,
        full_name: fullName,
        api_key: null,
        subscription: "Adopter",
        href: shortid.generate(),
        quota: 1000,
        subscriber_count: 0,
      }),
    })
      // Receiving the users data
      .then((data) => data.json());
  } catch (error) {}
};
// Function to get user data from database
export const getUserData = async (id) => {
  if (auth.currentUser) {
    let userData;
    // Connecting to the database throught nodeJS server
    try {
      await fetch("https://lyntmail.xyz/getData", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      })
        // Getting the data
        .then((data) => {
          return data.json();
        })
        .then((result) => {
          localStorage.setItem("token", result.token);
          return (userData = result.userData);
        });
      // Returning the user data

      setTimeout(() => {
        getUserData(auth.currentUser.uid);
      }, 270000);
      return userData;
    } catch (error) {}
  }
};

// Function to Generate a new link
export const generateNewLink = async (name, type, count) => {
  // Generating a new href
  const shortHref = shortid.generate();
  var result = "";
  // Sending Data to the nodeJS server
  try {
    const token = localStorage.getItem("token");
    await fetch("https://lyntmail.xyz/newLink", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        owner_id: auth.currentUser.uid,
        href: shortHref,
        type: type,
        is_active: count == 0 ? "false" : "true",
      }),
    })
      .then((data) => data.json())
      .then((response) => (result = response));
    if (result.includes("already exists")) {
      return 1;
    }

    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

// Functon to delete a link
export const deleteLink = async (href, userId) => {
  try {
    const token = localStorage.getItem("token");
    await fetch("https://lyntmail.xyz/deleteLink", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        href,
        userId,
      }),
    });
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};
export const deleteSubscriber = async (sub_id, subscribed_to) => {
  try {
    const token = localStorage.getItem("token");
    await fetch("https://lyntmail.xyz/deleteSubscriber", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        sub_id,
        userId: subscribed_to,
      }),
    });
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

export const createMailChimpLink = async (apiKey, name, count) => {
  const shortHref = shortid.generate();
  let response = "";
  try {
    const token = localStorage.getItem("token");
    await fetch("https://lyntmail.xyz/newMailchimpLink", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        apiKey,
        name,
        owner_id: auth.currentUser.uid,
        href: shortHref,
        is_active: count == 0 ? "false" : "true",
      }),
    }).then((data) => (response = data.json()));

    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
    return response;
  } catch (error) {}
};

export const updateUserData = async (email, apiKey, fullName) => {
  try {
    const token = localStorage.getItem("token");
    await fetch("https://lyntmail.xyz/updateData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: auth.currentUser.uid,
        email,
        apiKey,
        fullName,
      }),
    }).then((data) => data.json());

    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

export const toggleLink = async (href, quota, status) => {
  let response = null;
  try {
    const token = localStorage.getItem("token");
    response = await fetch("https://lyntmail.xyz/toggleLink", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: auth.currentUser.uid,
        href,
        status,
      }),
    });

    response = await response.json();
    if (response === "Full quota") {
      return false;
    }
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

export const confirmApiKey = async (apiKey) => {
  let response = null;
  try {
    const token = localStorage.getItem("token");
    response = await fetch("https://lyntmail.xyz/confirmApiKey", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: auth.currentUser.uid,
        apiKey,
      }),
    });

    response = await response.json();

    if (response === "invalid") {
      return false;
    }
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

export const applyCustomBranding = async (data) => {
  let response = null;
  try {
    const token = localStorage.getItem("token");
    response = await fetch("https://lyntmail.xyz/customBranding", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        owner_id: auth.currentUser.uid,
        title: data.title,
        message: data.message,
        redirectLink: data.redirectLink,
        imageUrl: data.imageUrl,
        linkID: data.linkID,
      }),
    });

    response = await response.json();

    if (response === "invalid") {
      return false;
    }
    const userData = await getUserData(auth.currentUser.uid);
    store.dispatch(setCurrentUser(userData));
  } catch (error) {}
};

export const getCustomBranding = async (linkID, owner_id) => {
  let response = null;
  try {
    response = await fetch("https://lyntmail.xyz/getCustomBranding", {
      method: "post",
      body: JSON.stringify({
        owner_id: owner_id,
        linkID: linkID,
      }),
    });

    response = await response.json();

    if (response === "invalid") {
      return false;
    }
    return response;
  } catch (error) {}
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
