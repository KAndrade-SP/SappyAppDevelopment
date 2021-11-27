import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageChat: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 0.2,
        borderColor: 'gray'
    },

    imageChatModal: {
        height:150, 
        width: 150, 
        marginLeft: 80,
        borderWidth: 0.2,
        backgroundColor: '#1c1c1c',        
    },

    viewModal: {
        marginTop: 195, 
        height: 495, 
        width: 310,
        backgroundColor:'#212121',
        marginBottom: 187,
        borderRadius: 2,    
    },

    perfilViewModal: {
        width: 310, 
        height: 150, 
        marginTop: 32,
        backgroundColor: 'black'   
    },

    perfilViewModalTitle:{
        height: 32, 
        width: 310, 
        marginTop: -32,        
        alignItems:'center',
        backgroundColor:'hsla(0, 0%, 0%, 0.1)',
        position: 'absolute',        
    },

    descriptionViewModal: {
        width: 310,
        height: 243,        
        opacity: 1,
        paddingLeft: 10,
        paddingRight: 10       
    },

    chatName: {
        fontSize: 16,
        color: '#ffffff'
    },    

    chatProfession: {
        fontSize: 12,
        color: '#ffffff80',
        fontStyle: 'italic'
    },

    chatNameModal: {
        fontSize: 20,
        color: '#ffffff',
        paddingLeft: 5                
    },

    evaluationModal: {
        width: 310,
        height: 50,
        borderColor: 'black',
        paddingTop: 15,        
        backgroundColor: '#171717',                
        alignItems: 'baseline',
        flexDirection:'row',
    },

    infoEvaluationModal:{        
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',               
    },

    evaluationTextTitle:{
        fontSize: 18,
        color: '#ffffff',
        paddingRight: 10
    },

    evaluationText:{
        fontSize: 18,
        color: '#ffffff80',
        paddingRight: 45,
    },

    iconStar:{
        backgroundColor: 'white'
    },

    iconModalReport: {
        width: 155,
        height: 50,
        borderColor: 'black',
        paddingTop: 6,
        backgroundColor: '#1f1f1f',
        position: 'absolute',
        marginTop:150,
        marginLeft: 155,
        alignItems: 'center'
    },

    iconLike: {        
        
    },

    iconDislike: {                
                        
    },

    chatProfessionModal: {
        fontSize: 16,
        color: '#ffffff80',
        fontStyle: 'italic',
        opacity:0        
    },

    descriptionTitleModal: {
        fontSize: 18,
        color: '#ffffff',        
    },

    descriptionTextModal: {
        fontSize: 16,
        color: '#ffffff80',
        paddingBottom:15,
        paddingTop:5,
        textAlign: 'justify'
    },

    profissionTextModal: {
        fontSize: 25,
        color: '#ccad00',
        paddingBottom:5,
        paddingTop:5,
        textAlign: 'justify',
    },

    divValuesChat: {
        alignItems: 'stretch',
        flexDirection: 'row',
        flex: 1
    },

    divNameDesc: {
        marginLeft: 12
    },   

    spaceChat: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,   
    },

    cardChat: {
        backgroundColor: '#212121',
        paddingTop: 8,
        paddingEnd: 8,
        paddingStart: 8,
        paddingBottom: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        borderBottomWidth: 0.2,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 12
    }
})

export default styles;