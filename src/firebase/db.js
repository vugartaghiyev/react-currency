import { db } from ".";
import { ref, set, onValue } from "firebase/database";

//  Writing user to firebase
function setUserData(user) {
  set(ref(db, "users/" + user.username), {
    username: user.username,
    password: user.password,
  });
}

// --------------------

// Get user data

const getUserData = (id) => {
  let data = "";
  const starCountRef = ref(db, "users/" + id);

  return new Promise((resolve) => {
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();
      resolve(data);
    });
  });
};

export { setUserData, getUserData };
