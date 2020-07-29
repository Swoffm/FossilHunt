import React, { useEffect, useState } from "react"
import ForumQuestionDetailsJSX from "./pages/forumQuestionDetailsJSX"
import ForumManager from "./manager/ForumManager"
import ResponseJSX from "./pages/ResponseJSX"


const ForumQuestionDetails = props => {

    // ====================change userId=============
    const userId = 1

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
        <div className="parent">
            <section>

                <ForumQuestionDetailsJSX question={question} {...props} />
            </section>

            <section>
                {response}
            </section>
        </div>
        </>)
}

export default ForumQuestionDetails