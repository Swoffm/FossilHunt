
const url = "http://localhost:5002"
const fossilCollectionManager = {
    getAll() {
        return fetch(`${url}/fossilCollection`).then(result => result.json())
      },
      delete(id) {
          return fetch(`${url}/fossilCollection/${id}`, {
              method: "DELETE"
          }).then(result => result.json())
      },
      post(fossil) {
          return fetch(`${url}/fossilCollection`, {
            method: "POST",
            headers: {
        "Content-Type": "application/json"
            },
            body: JSON.stringify(fossil)
          }).then(data => data.json())
      },
      get(id) {
        return fetch(`${url}/fossilCollection/${id}`).then(result => result.json())
      },

      update(fossil) {
        return fetch(`${url}/fossilCollection/${fossil.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fossil)
        }).then(data => data.json());
      }
}


export default fossilCollectionManager