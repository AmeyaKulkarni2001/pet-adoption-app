import React from "react";
import { useState } from "react";
import "./Rehome.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
function RehomeForm() {
  const [rehomeForm, setRehomeForm] = useState({
    petImage: "",
    breed: "",
    color: "",
    age: "",
    size: "",
    weight: "",
    gender: "",
    location: "",
    descPet: "",
  });

  let name, value;
  function getPetDetails(event) {
    name = event.target.name;
    value = event.target.value;
    setRehomeForm({
      ...rehomeForm,
      [name]: value,
    });
  }
  const postPetData = (event) => {
    console.log("button clicked");
    const file = event.target.files[0];
    event.preventDefault();
    if (!file) {
      return;
    } else {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + prog + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            console.log(url)
          );
        }
      );
    }
    try {
      const docRef = addDoc(collection(db, "pet-details"), {
        ...rehomeForm,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="form-section">
      <div className="form-container">
        <div>
          <h1 className="rehome-form-heading">Pet Details</h1>
        </div>
        <div className="rehome-form">
          <div>
            <label>Photo</label>
            <input
              type="file"
              onChange={getPetDetails}
              name="petImage"
              value={rehomeForm.petImage}
            />
          </div>
          <div>
            <label>Breed</label>
            <input
              type="text"
              value={rehomeForm.breed}
              name="breed"
              onChange={getPetDetails}
            />
          </div>

          <div>
            <label>Color</label>
            <input
              type="text"
              value={rehomeForm.color}
              name="color"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              value={rehomeForm.age}
              name="age"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Size</label>
            <input
              type="text"
              value={rehomeForm.size}
              name="size"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Weight</label>
            <input
              type="text"
              value={rehomeForm.weight}
              name="weight"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              type="text"
              value={rehomeForm.gender}
              name="gender"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              value={rehomeForm.location}
              name="location"
              onChange={getPetDetails}
            />
          </div>
          <div>
            <label>Describe Your Pet</label>
            <textarea
              rows={5}
              cols={50}
              value={rehomeForm.descPet}
              name="descPet"
              onChange={getPetDetails}
            />
          </div>
        </div>
      </div>
      <div className="rehome-btn">
        <button type="submit" className="rehome-btn-link" onClick={postPetData}>
          Rehome Pet
        </button>
      </div>
    </div>
  );
}
export default RehomeForm;
