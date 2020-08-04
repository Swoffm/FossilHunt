import React, {useEffect, useState} from "react"

import FilterJSX from "./filterJSX"
import fossilCollectionManager from "../manager/fossilCollectionManager"


const Filter = props => {
  

    //get fossil location data
    //get fossil species data
    const [FLocation, setFLocation] = useState([])

    const getLocation = () => {
        fossilCollectionManager.getAll().then((results) => {
            setFLocation(results)
        })
    }

    

    useEffect(()=> {
        getLocation()
    }, [])

    return(<FilterJSX FLocation={FLocation} {...props}/>)
}

export default Filter