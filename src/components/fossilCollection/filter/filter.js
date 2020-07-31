import React, {useEffect, useState} from "react"
import Helper from "../../../HelperFunctions/Helper"
import FilterJSX from "./filterJSX"
import fossilCollectionManager from "../manager/fossilCollectionManager"


const Filter = props => {
    

    //get fossil location data
    //get fossil species data
    const [fossilLocation, setFossilLocation] = useState([])

    const getLocation = () => {
        fossilCollectionManager.getAll().then((results) => {
            setFossilLocation(results)
        })
    }

    

    useEffect(()=> {
        getLocation()
    }, [])

    return(<FilterJSX fossilLocation={fossilLocation} {...props}/>)
}

export default Filter