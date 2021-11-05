import firebase from './firebaseconfig'

const api = {
    createUser: async (email, id, name, photoUrl, area = '', securityPassword = 1234, age = '', isAdmin = 'false', isProf = 'false') => {
        const dataBase = firebase.database().ref(`Users/${id}`)

        await dataBase.once('value')
            .then(snapshot => {
                if (!snapshot.val())
                    dataBase.set({
                        email,
                        name,
                        photoUrl,
                        age,
                        isAdmin,
                        isProf,
                        area,
                        securityPassword
                    })
            })
    },

    createMessage: messages => {
        firebase.database().ref("Messages").push(messages)
    },

    createGroupMessage: (messages, way) => {
        firebase.database().ref(`Grupos/${way}/Messages`).push(messages)
    },

    updateMessages: callback => {
        firebase.database()
            .ref("Messages")
            .on("child_added", snapshot => {
                const { text, user, createdAt, _id } = snapshot.val()
                const messages = { text, user, createdAt, _id }
                callback(messages)
            })
    },

    updateGroupMessages: (callback, way) => {
        const theWay = way()
        firebase.database()
            .ref(`Grupos/${theWay}/Messages`)
            .on("child_added", snapshot => {
                const { text, user, createdAt, _id } = snapshot.val()
                const messages = { text, user, createdAt, _id }
                callback(messages)
            })
    },
}

export default api