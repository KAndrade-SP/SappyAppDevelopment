import firebase from './firebaseconfig'

const api = {
    createUser: async (email, id, name, photoUrl, area='', securityPassword=1234, age='', isAdmin='false', isProf='false') => { 
        const dataBase = firebase.database().ref(`users/${id}`)

        await dataBase.once('value')
        .then( snapshot => {
            if(!snapshot.val())
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

    createMessage: (messages) => {
        firebase.database().ref("messages").push(messages)
    },

    updateMessages: callback => {
        firebase.database()
        .ref("messages")
        .on("child_added", snapshot => {
            const {text, user, createdAt, _id} = snapshot.val()
            const messages = {text, user, createdAt, _id}
            callback(messages)
        })     
    },
}

export default api