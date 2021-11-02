import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000710',
    },

    svgCurve: {
        flex: 1,
        position: 'absolute',
        width: Dimensions.get('window').width,
    },

    headerContainer: {
        marginTop: 125,
        justifyContent: 'center',
        alignItems: 'center'
    },

    googleBtn: {
        width: 240,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        marginTop: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#10101030",
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 2
    },

    logoStyle: {
        width: 22,
        height: 22,
        marginLeft: 18,
        marginRight: 24
    },

    image: {
        width: 250,
        height: 250,
    },

    textGoogleBtn: {
        color: "#00000054",
        fontSize: 14,
        marginRight: 8,
    },

});

export default styles;