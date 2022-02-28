import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default function (ctx) {
  if(!isAuth()) {
    return ctx.redirect('/auth/login_signup')
  }
}
function isAuth() {
  
  return firebase.auth().currentUser;

  
}