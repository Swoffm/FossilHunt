import FossilCollectionDetailsJSX from "./pages/FossilCollectionDetailsJSX"
import React, {useEffect, useState} from "react"
import fossilCollectionManager from "./manager/fossilCollectionManager"


//this components deals with the logic with details on each fossil card

const FossilCollectionDetails = (props) => {

    const [fossil, setFossil] = useState([])
    const fossilId = props.match.params.fossilId;
    
    const getFossilById = (fossilId) => {
        fossilCollectionManager.get(fossilId).then((results) => {
           
           setFossil(results)
        })
    }

    const backBtn = () => {
        props.history.goBack()
    }

    useEffect(() => {
        getFossilById(fossilId)
    }, [])


    return (<FossilCollectionDetailsJSX backBtn={backBtn} fossil={fossil} {...props}/>)
}


export default FossilCollectionDetails