import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerUser: {
        flex: 1,
        backgroundColor: '#000710',
    },

    panel: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8,
    },

    contentUser: {
        flexDirection: "row",
        paddingTop: 8,
        paddingLeft: 12,
        marginBottom: 8,
    },

    button: {
        backgroundColor: '#000710',
        borderRadius: 10,
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconButton: {
        alignItems: 'flex-end',
        flex: 1,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 16,
    }
})

export default styles