const url = "http://localhost:5002"

const AccountManager = {
    get(id) {
        return fetch(`${url}/users/${id}`).then(result => result.json())
    }
}

export default AccountManager