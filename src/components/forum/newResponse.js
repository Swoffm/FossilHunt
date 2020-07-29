import React, { useEffect, useState } from "react"
import NewResponseJSX from "./pages/newResponseJSX"
import ForumManager from "./manager/ForumManager"
const NewResponse = props => {

      // =======================change below===========
      const userId = 1;
    console.log(props.match.params.questionId)

    const [response, setResponse] = useState({userId: userId, response: "", formQuestionId: props.match.params.questionId})
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = evt => {
        const stateToChange = {...response}
        stateToChange[evt.target.id] = evt.target.value;
        setResponse(stateToChange)

    }

    const newResponse = evt => {
        evt.preventDefault()
       if(response.response === "") {
           window.alert("Please input a response")
       }
       else {
           setIsLoading(true);
                //goe back goes back to the previous page
           ForumManager.post(response).then(()=> props.history.goBack())
       }
    }


    return (<>
    <NewResponseJSX {...props} />
    </>)
}

export default NewResponse