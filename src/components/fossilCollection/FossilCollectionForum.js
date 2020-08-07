import React from "react";
import { useState} from 'react';
import fossilCollectionManager from "./manager/fossilCollectionManager"
import FossilCollectionForumJSX from "./pages/FossilCollectionForumJSX"
import "./styles/fossilForum.css"
import Helper from "../../HelperFunctions/Helper"


const FossilCollectionForum = (props) => {
  
    const userId = Helper.getUserId();


     const [fossil, setFossil] = useState({userId: userId, genus: "", timePeriod: "", location: "", image: "Cloudnary url", rockType: ""})
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState("")

    //write a function to handle input changes
    const handleFieldChange = evt => {
        const stateToChange = { ...fossil };
        stateToChange[evt.target.id] = evt.target.value;
        setFossil(stateToChange);
      };
      const uploadImage = async evt => {
        const files = evt.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'thefossilhunt')
        const api = await fetch("	https://api.cloudinary.com/v1_1/fossilhunt/image/upload",
        {
          method: 'POST',
          body: data
        })
        const file = await api.json()
        setImage(file.secure_url)

      }
 
      const newFossil = evt => {
        evt.preventDefault();
        if (fossil.location == "" || !image || image == "") {
          window.alert("Please input a location");
        } else {
          setIsLoading(true);
          // Create the owner and redirect user to owner list
          let newFossil = {
            userId: userId,
            genus: fossil.genus.toUpperCase(),
            timePeriod: fossil.timePeriod,
            location: fossil.location,
            image: image,
            rockType: fossil.rockType
          }
          fossilCollectionManager.post(newFossil)
            .then(() => props.history.push("/fossilcollection"));
        }
      };


    return (
        <>
        <FossilCollectionForumJSX uploadImage={uploadImage} handleFieldChange={handleFieldChange} newFossil={newFossil} {...props}/>
        </>
    )
}

export default FossilCollectionForum