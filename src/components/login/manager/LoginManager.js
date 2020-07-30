
const url = "http://localhost:5002"


const LoginManager = {
    getAll() {
        return fetch(`${url}/users`).then(results => results.json())
    },
    post(element) {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        }).then(data => data.json())
    }
}


export default LoginManager;