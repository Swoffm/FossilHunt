
const url = "http://localhost:5002"
const fossilCollectionManager = {
    getAll() {
        return fetch(`${url}/fossilCollection`).then(result => result.json())
      },
      delete(id) {
          return fetch(`${url}/fossilCollection/${id}`, {
              method: "DELETE"
          }).then(result => result.json())
      }
}


export default fossilCollectionManager