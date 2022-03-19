import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await signup(email, password);
      console.log("Signed up succesfully!");

      const storageRef = ref(storage, `${user.user.uid}/ProfilePic`);

      const uploadTask = uploadBytesResumable(storageRef, profilePic);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            let obj = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              contactNumber: contactNumber,
              uid: user.user.uid,
              profilePicURL: downloadURL,
              posts: [],
            };
            await setDoc(doc(db, "users", user.user.uid), obj);
            console.log("doc added");
          });
        }
      );
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("user could not signup");
    }
  }, [user]);

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="contact number"
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <button>
        <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} />
        Upload Profile Picture
      </button>
      {error != "" && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={() => handleClick()}>Signup</button>
    </div>
  );
}

export default Signup;
