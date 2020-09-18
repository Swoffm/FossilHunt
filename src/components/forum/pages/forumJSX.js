import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import LoginManager from "../../login/manager/LoginManager"



const ForumJSX = props => {
  const [user, setUser] = useState([]);

  const getUser = id => {
    LoginManager.get(id).then((results) => {
      setUser(results)
    })
  }


  useEffect(() => {
    getUser(props.question.userId);
    console.log(props.question.userId)
  }, [])

  return (<>

    <section className="questionChild">
      <Link to={`/forumQuestion/${props.question.id}`}>
        <div className="forumQ">
          <h4>Question: {props.question.question}</h4>
        </div>
        <div className="forumQ">
          Location: {props.question.location}
        </div>
        <div className="forum--userInfo">
          <h5>{user.username}</h5>
          <img className="cloud--image forum--image" src={user.userImage} />
        </div>
      </Link>
    </section>

  </>)

}


export default ForumJSX