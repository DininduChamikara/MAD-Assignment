import { format } from "date-fns";
import {
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, movieColRef } from "./config";

export const Create = async (title, year) => {
  const date = new Date();
  const formattedDate = format(date, "MMMM do, yyyy H:mma");

  const movieDoc = doc(movieColRef);

  if (auth) {
    const docData = {
      updatedDate: formattedDate,
      watched: false,
      wishlistAdded: false,
      userId: auth.currentUser.uid,
      title,
      year,
    };

    const response = await setDoc(movieDoc, docData)
      .then(() => {
        // alert("Document Created!");
      })
      .catch((error) => {
        alert(error.message);
      });

    return response;
  } else {
    console.log("Didn't auth");
  }
};

export const Read = async (userId) => {
  const whereCond = where("userId", "==", userId);
  const docsQuery = query(movieColRef, whereCond);
  const movieData = [];

  const querySnapshot = await getDocs(docsQuery);

  querySnapshot.forEach((doc) => {
    movieData.push({
      id: doc.id,
      title: doc.data().title,
      year: doc.data().year,
      updatedDate: doc.data().updatedDate,
      watched: doc.data().watched,
      wishlistAdded: doc.data().wishlistAdded,
    });
  });

  return movieData;
};

export const Update = async (id, title, year, wishlistAdded, watched) => {
  const date = new Date();
  const formattedDate = format(date, "MMMM do, yyyy H:mma");

  const movieDoc = doc(movieColRef, id);

  const docData = {
    updatedDate: formattedDate,
    watched: watched ? watched : false,
    wishlistAdded: wishlistAdded ? wishlistAdded : false,
    userId: auth.currentUser.uid,
    title,
    year,
  };

  // console.log(docData);

  const response = await updateDoc(movieDoc, docData)
    .then(() => {
      // alert("Document Updated!");
    })
    .catch((error) => {
      alert(error.message);
    });

  return response;
};

export const Delete = async (id) => {
  const movieDoc = doc(movieColRef, id);

  const response = await deleteDoc(movieDoc)
    .then(() => {
      // alert("Document Deleted!");
    })
    .catch((error) => {
      alert(error.message);
    });
};
