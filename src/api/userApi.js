import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const userApi = {
  // TODO: call API to get current user
  getMe: () => {
    return new Promise((resolve, reject) => {
      // reject(new Error("MY CUSTOM ERROR"));
      // return;

      // Wait 500ms -> return result
      setTimeout(() => {
        const currentUser = firebase.auth().currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photoUrl: currentUser.photoUrl,
        });
      }, 500);
    });
  },
};

export default userApi;
