import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    viewModal: {       
        height: 380, 
        width: 300,
        backgroundColor:'#171717',
        borderRadius: 10
    },

    perfilViewModal: {
        width: 300, 
        height: 150, 
        backgroundColor: '#000710',  
    },

    imageChatModal: {
        height: 150, 
        width: 150, 
        alignSelf: 'center',      
    },

    perfilViewModalTitle:{
        width: 300,
        height: 30,
        alignItems:'baseline',
        backgroundColor:'#00071090',
        position: 'absolute',         
    },

    chatNameModal: {
        fontSize: 20,
        color: '#f5f5f5',
        paddingLeft: 8               
    },

    evaluationModal: {
        width: 300,
        height: 50, 
        borderTopWidth: 0.5,
        borderColor: '#f5f5f5',      
        backgroundColor: '#000710',                
        alignItems: 'center',
        flexDirection:'row',
    },

    infoEvaluationModal:{        
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',               
    },

    descriptionViewModal: { 
        marginLeft: 12,
        marginRight: 12,
    },

    professionTitle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 4,
    },

    profissionTextModal: {
        fontSize: 20,
        color: '#f5f5f5',
        paddingBottom: 8,
        paddingTop: 8,
        marginLeft: 12,
        textAlign: 'justify',
    },

    contentInputDesc: {
        height: 120,
        backgroundColor: '#000710',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 12
    },

    descriptionTextModal: {
        fontSize: 16,
        color: '#f5f5f590',
        paddingTop: 8
    },

})

export default styles;