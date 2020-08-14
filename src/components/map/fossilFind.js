import FossilFindJSX from "./fossilFindJSX"
import React, { useState, useEffect } from "react"
import IDig from "./iDigManager/iDig"
import GenusCard from "./genus/genusCard"


const FossilFind = (props) => {
    let limit = 5;

    const [geoTimePeriod, setGeoTimePeriod] = useState({ timePeriod: "" })
    const [genus, setGenus] = useState([])
    const handleFieldChange = evt => {
        const stateToChange = { ...geoTimePeriod };
        stateToChange[evt.target.id] = evt.target.value;
        setGeoTimePeriod(stateToChange);
    };

    //   try to collect the genus of the first collection in an Array.
    // all genus in the array must be unique
    // first make the call

    const iDigApi = (userTimePeriod) => {

        IDig.getGenus(userTimePeriod, limit).then((results) => {
            console.log(results.results)
            setGenus(results.results)
        })
    }

    const newTimePeriod = evt => {
        evt.preventDefault();
        if (geoTimePeriod.timePeriod == "" || geoTimePeriod == "timePeriod") {
            window.alert("Must Select A Time Period")
        }
        else {
            iDigApi(geoTimePeriod.timePeriod)

        }


    }
let id = 1;
    return (
        <>

            <FossilFindJSX newTimePeriod={newTimePeriod} handleFieldChange={handleFieldChange} {...props} />
{/* add a component that will map through the data for genus and display them in a card */}

{
    genus ? <GenusCard genus={genus} {...props} />: null
}

        </>
    )
}


export default FossilFind




