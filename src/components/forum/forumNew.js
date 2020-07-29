import React, {useState, useEffect} from "react"
import ForumManager from "./manager/ForumManager"
import ForumNewJSX from "./pages/forumNewJSX"
import "./styles/forumQ.css"

const ForumNew = (props) => {

// ===============================change the userid below ====================
    const userId = 1;



    const [question, setQuestion] = useState({userId: userId})
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...question };
        stateToChange[evt.target.id] = evt.target.value;
        setQuestion(stateToChange);
      };

      const newQuestion = evt => {
          evt.preventDefault();
          if(question.question === "") {
              window.alert("Please input a question")
          } 
          else {
              setIsLoading(true);
            ForumManager.post(question).then(() => {
                props.history.push("/forum")
            })

          }
      }

      const backBtn = () => {
        props.history.goBack()
    }


    return(
    <div className="parentQForum">
    <ForumNewJSX backBtn={backBtn} handleFieldChange={handleFieldChange} newQuestion={newQuestion} {...props}/>
    </div>
    )
}

export default ForumNew


