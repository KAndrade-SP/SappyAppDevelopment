import firebase from './firebaseconfig'

const api = {

    // Função para criar usuário, com dados recebidos a tela de login.
    createUser: async (email, id, name, photoUrl, area = '', isAdmin = 'false', isProf = 'false') => {
        const dataBase = firebase.database().ref(`Users/${id}`)
        await dataBase.once('value')
            .then(snapshot => {
                // Irá criar os dados se não existirem no banco.
                if (!snapshot.val())
                    dataBase.set({
                        email,
                        name,
                        photoUrl,
                        isAdmin,
                        isProf,
                        area, 
                    })
            })
    },

    // Funções para criar mensagens na tela de profissional ou grupos.
    createMessage: messages => firebase.database().ref("Messages").push(messages),
    createGroupMessage: (messages, way) => firebase.database().ref(`Grupos/${way}/Messages`).push(messages),

    // Função para pegar mensagens do banco.
    updateMessages: callback => {
        firebase.database()
            .ref("Messages")
            .on("child_added", snapshot => {
                const { text, user, createdAt, _id } = snapshot.val()
                const messages = { text, user, createdAt, _id }
                callback(messages)
            })
    },

    // Função para pegar mensagens do banco, na parte de grupos.
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