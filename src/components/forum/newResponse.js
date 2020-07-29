import React, { useEffect, useState } from "react"
import NewResponseJSX from "./pages/newResponseJSX"
import ForumManager from "./manager/ForumManager"
const NewResponse = props => {

      // =======================change below===========
      const userId = 1;

      const [question, setQuestion] = useState([])

    const [response, setResponse] = useState({userId: userId, response: "", questionId: parseInt(props.match.params.questionId)})
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = evt => {
        const stateToChange = {...response}
        stateToChange[evt.target.id] = evt.target.value;
        setResponse(stateToChange)

    }

    const getQuestion = (id) => {
        ForumManager.get(id).then((results) => {
             setQuestion(results)
           
           
        })
    }

    


    const newResponse = evt => {
        evt.preventDefault()
       if(response.response === "") {
           window.alert("Please input a response")
       }
       else {
           setIsLoading(true);
                //goe back goes back to the previous page
           ForumManager.responsePost(response).then(()=> props.history.push(`/forumQuestion/${props.match.params.questionId}`))
       }
    }
    const backBtn = () => {
        props.history.goBack()
    }

    useEffect(()=> {
        getQuestion(parseInt(props.match.params.questionId))
    }, [])
    return (<>
    <NewResponseJSX backBtn={backBtn} question={question} handleFieldChange={handleFieldChange} newResponse={newResponse} {...props} />
    </>)
}

export default NewResponse