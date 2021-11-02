import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000710',
        paddingTop: 8,
        paddingEnd: 8,
        paddingStart: 8, 
    },

    options:{
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8,
        paddingBottom: 8,
    },

    iconMod: {
        marginTop: 6
    },

    contentOptions:{
        flexDirection: "row",
        paddingTop: 8,
        justifyContent: 'center',
        paddingLeft: 12,
        marginBottom: 8,
    },

    textOptions:{
        marginLeft: 12,
        marginTop: 6,
        color: "#ffffff",
        fontSize: 16
    }

});

export default styles;