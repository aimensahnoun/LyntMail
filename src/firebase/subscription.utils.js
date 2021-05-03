import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
var firebaseConfig = {
  apiKey: "AIzaSyDH0oAdeOi_JTJF9YNRHvt7mIwB40vejmg",
  authDomain: "swipemailsubscribers-8b1a7.firebaseapp.com",
  databaseURL: "https://swipemailsubscribers-8b1a7.firebaseio.com",
  projectId: "swipemailsubscribers-8b1a7",
  storageBucket: "swipemailsubscribers-8b1a7.appspot.com",
  messagingSenderId: "250451597260",
  appId: "1:250451597260:web:186276285e78987c97ef69",
  measurementId: "G-9KGXL5FYZK",
};
export var subFirebase = firebase.initializeApp(firebaseConfig, "SubApp");
subFirebase.analytics();
export const subAuth = subFirebase.auth();

// Authenticate using Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  subAuth.signInWithPopup(googleProvider);
};
// Authentication using Twitter
// Authenticate using Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () =>
  subAuth.signInWithPopup(facebookProvider);

var twitterProvider = new firebase.auth.TwitterAuthProvider();
export const signInWithTwitter = () => subAuth.signInWithPopup(twitterProvider);

// Authenticate using Yahoo
var yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");
export const signInWithYahoo = () => subAuth.signInWithPopup(yahooProvider);
// Authentication using Github
var githubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGithub = () => subAuth.signInWithPopup(githubProvider);

// Getting the campaign details from link
export async function getCampaignDetails(href) {
  let linkData;
  try {
    await fetch("https://lyntmail.xyz/getLink", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        href,
      }),
    }).then(async (data) => (linkData = await data.json()));
    return linkData;
  } catch (error) {}
}

export async function getOwnerApiKey(owner_id) {
  let apiKey;
  try {
    await fetch("https://lyntmail.xyz/getApiKey", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        owner_id,
      }),
    }).then(async (data) => (apiKey = await data.json()));
    return apiKey;
  } catch (error) {}
}

const getUtcDate = () => {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  let newdate = year + "-" + month + "-" + day;
  return newdate;
};

//Save subscriber data to database or MailChimp
export async function handleSubscription(linkData, sub, href) {
  try {
    let response;
    await fetch("https://lyntmail.xyz/addSub", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaign_name: linkData[0].campaign_name,
        email: sub.email,
        href: href,
        full_name: sub.fullName,
        phone_number: sub.phoneNumer,
        subscribed_to: linkData[0].owner_id,
        list_id: linkData[0].list_id,
        type: linkData[0].campaign_type,
        date: getUtcDate(),
      }),
    })
      .then((data) => data.json())
      .then((data) => (response = data));

    return response;
  } catch (error) {}
}
