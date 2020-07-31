import React, { useEffect, useState } from "react"
import FossilCollectionEditForumJSX from "./pages/FossilCollectionEditForumJSX"
import fossilCollectionManager from "./manager/fossilCollectionManager"
import Helper from "../../HelperFunctions/Helper"


const FossilEditForum = props => {
   

    const userId = Helper.getUserId();
    const fossilId = props.match.params.fossilId;

    const [fossil, setFossil] = useState({
        userId: userId, image: "Cloudnary url", id: fossilId,
    timeperiod: "", rockType: "", location: "", genus: ""})
    const [isLoading, setIsLoading] = useState(false);

    // fossilId is the id of the fossil that is clicked on



    const getFossil = (fossilId) => {
        fossilCollectionManager.get(fossilId).then((results) => {
            setFossil(results)
        })
    }

    // BELOW HANDLES THE FIELD CHANGE INSIDE THE FORM
    const handleFieldChange = evt => {
        const stateToChange = { ...fossil };
        stateToChange[evt.target.id] = evt.target.value;
        setFossil(stateToChange);
    };

// below function updates the api
    const newFossil = evt => {
        evt.preventDefault();
        if (fossil.location === "") {
            window.alert("Please input a location");
        } else {
            setIsLoading(true);
            fossilCollectionManager.update(fossil)
                .then(() => props.history.goBack());
        }
    };


    useEffect(() => {
        getFossil(fossilId)
    }, [])

    return (<FossilCollectionEditForumJSX handleFieldChange={handleFieldChange} newFossil={newFossil} fossil={fossil} {...props} />)
}

export default FossilEditForum