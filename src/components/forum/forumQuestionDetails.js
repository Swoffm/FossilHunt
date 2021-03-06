import React, { useEffect, useState } from "react"
import ForumQuestionDetailsJSX from "./pages/forumQuestionDetailsJSX"
import ForumManager from "./manager/ForumManager"
import ResponseJSX from "./pages/ResponseJSX"
import { Link } from "react-router-dom";
import Helper from "../../HelperFunctions/Helper"




const ForumQuestionDetails = props => {

  
    const userId = Helper.getUserId();

    const [response, setResponse] = useState([])
    const [question, setQuestion] = useState([])

    const getQuestionAndResponse = () => {
        ForumManager.questionWithResponses(props.match.params.questionId).then((results) => {
            setQuestion(results)

            setResponse(results.responses.map(element => <ResponseJSX key={element.id} element={element} {...props} />))
        })
    }


    useEffect(() => {
        getQuestionAndResponse()
    }, []) 

    return (<>
        <div className="FossilResponse_parent">
            <Link to={`/forum`}><button className="responsebtn forumbtn">Back</button></Link>
    {userId ? <Link to={`/forumResponse/${props.match.params.questionId}/new`}><button className="responsebtn forumbtn">Respond</button> </Link> : null}
         
            <section>

                <ForumQuestionDetailsJSX question={question} {...props} />
            </section>

            <section className="responseSection">
                {response}
            </section>
        </div>
        </>)
}

export default ForumQuestionDetails