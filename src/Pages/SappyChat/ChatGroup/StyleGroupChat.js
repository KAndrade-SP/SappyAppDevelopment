import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    containerFloatButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    // floatButton: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     paddingRight: 12,
    //     paddingTop: 10,
    //     width: 100,
    //     height: 100,
    //     position: 'absolute',
    //     // borderWidth: 1,
    //     // borderColor: '#f5f5f5',
    //     backgroundColor: '#ccad00',
    //     borderTopRightRadius: 50
    // },

    floatButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',  
        paddingTop: 8,
        width: 70,
        height: 90,
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#f5f5f5',
        backgroundColor: '#000710',
        borderRadius: 50
    },
})

export default styles