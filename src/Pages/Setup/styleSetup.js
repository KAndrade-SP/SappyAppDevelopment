import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000710',
        paddingTop: 8,
        paddingEnd: 8,
        paddingStart: 8, 
    },

    options: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8,
        paddingBottom: 8,
    },

    contentOptions: {
        flexDirection: "row",
        paddingTop: 8,
        justifyContent: 'center',
        paddingLeft: 12,
        marginBottom: 8,
    },

    containerIcon: {
        justifyContent: 'center'
    },

    iconMod: {
        marginTop: 6,
    },

    containerText: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 4
    },

    textOptions: {
        marginLeft: 12,
        marginTop: 6,
        color: "#f5f5f5",
        fontSize: 16,
    },

    descOptions: {
        marginLeft: 12,
        marginTop: 6,
        color: "#f5f5f590",
        fontSize: 12,
    }

});

export default styles;