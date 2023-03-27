import firebase from "firebase"

  const firebaseConfig = {
  apiKey: "AIzaSyBoMkzltoJc8tJE-WEeHSrjfLM6a0jAo74",
  authDomain: "anil-multi-service-meetings.firebaseapp.com",
  projectId: "anil-multi-service-meetings",
  storageBucket: "anil-multi-service-meetings.appspot.com",
  messagingSenderId: "518056144830",
  appId: "1:518056144830:web:3ae77b379a0ace873b13ef"
};


if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
export default firebase.firestore()