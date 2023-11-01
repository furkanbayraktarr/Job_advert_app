import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:5,
        borderWidth:2,
        borderRadius:10,
        margin:10,
        

    },
    body_container:{
        margin:10,
        marginTop:0,
        marginLeft:5,
        flex:5
    },
    title:{
        
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        padding:3
    },
    company:{
        
        fontSize:18,
        color:'black',
        padding:3
    },
    locations:{
        
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'#4169e1',
        borderRadius:2,
        padding:3,
        flexDirection:'row-reverse' ,
        alignSelf:'flex-start'
        
    },
    levels_container:{
        flex:1
    },
    levels:{
        padding:5,
        fontWeight:'bold',
        fontSize:20,
        margin:5,
        color:'black',
        alignSelf:'flex-end',
        color:'#4169e1'
    }
})