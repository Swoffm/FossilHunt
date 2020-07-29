
const url = "http://localhost:5002"
const ForumManager = {
    getAll() {
        return fetch(`${url}/questions`).then(result => result.json())
      },
      post(question) {
          return fetch(`${url}/questions`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(question)
          }).then(data => data.json())
      }, 
      questionWithResponses(id) {
          return fetch(`${url}/questions/${id}?_embed=responses`)
          .then(result => result.json())
      },
      responsePost(response) {
        return fetch(`${url}/responses`, {
          method: "POST",
          headers: {
      "Content-Type": "application/json"
          },
          body: JSON.stringify(response)
        }).then(data => data.json())
    }
}

export default ForumManager