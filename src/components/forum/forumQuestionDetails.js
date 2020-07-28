import React, {useEffect, useState} from "react"
import ForumQuestionDetailsJSX from "./pages/forumQuestionDetailsJSX"
import ForumManager from "./manager/ForumManager"


const ForumQuestionDetails = props => {

    // ====================change userId=============
    const userId = 1

    const [response, setResponse] = useState([])
    const [question, setQuestion] = useState([])

    const getQuestionAndResponse = () => {
        ForumManager.questionWithResponses(props.match.params.questionId).then((results) => {
            console.log(results)
        })
    }
    

    useEffect(() => {
getQuestionAndResponse()
    }, [])

    return(<ForumQuestionDetailsJSX  {...props} />)
}

export default ForumQuestionDetails