const url = "http://localhost:5002"

const AccountManager = {
    get(id) {
        return fetch(`${url}/users/${id}`).then(result => result.json())
    },
    update(element) {
        return fetch(`${url}/users/${element.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(element)
        }).then(data => data.json());
      }
}

export default AccountManager