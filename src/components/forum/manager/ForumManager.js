
const url = "http://localhost:5002"
const ForumManager = {
    getAll() {
        return fetch(`${url}/forum`).then(result => result.json())
      },
      post(question) {
          return fetch(`${url}/forum`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(question)
          }).then(data => data.json())
      }, 
      questionWithResponses(id) {
          return fetch(`${url}/forum/${id}?_embed=response`)
          .then(result => result.json())
      }
}

export default ForumManager