import React, { useEffect, useState } from "react"
import ForumManager from "./manager/ForumManager"
import ForumFilterJSX from "./pages/forumFilterJSX"


const ForumFilter = props => {

     //get fossil location data
     //get fossil species data
     const [FLocation, setFLocation] = useState([])

     const getLocation = () => {
          ForumManager.getAll().then((results) => {
               setFLocation(results)
          })
     }



     useEffect(() => {
          getLocation()
     }, [])

     return (<ForumFilterJSX {...props} />)
}

export default ForumFilter