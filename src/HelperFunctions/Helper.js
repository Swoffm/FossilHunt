

const Helper = {
    getUserId() {
        let user = sessionStorage.getItem("userInfo")
        if (user) {
            const UserId = user.slice(user.search("userId"))
            const myId = UserId.split(":")[1]
            let userId = (myId.split("}")[0])
            return parseInt(userId)
        }

    },
    getUsername() {
        let user = sessionStorage.getItem("userInfo")
        if (user) {
            const UserId = user.slice(user.search("username"))
            const string = UserId.split(",")[0]
            let username = (string.split(":")[1])
            return username
        }
    }
}

export default Helper