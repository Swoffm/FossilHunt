
const url = "http://localhost:5002"
const ForumManager = {
    getAll() {
        return fetch(`${url}/forum`).then(result => result.json())
      }
}

export default ForumManager