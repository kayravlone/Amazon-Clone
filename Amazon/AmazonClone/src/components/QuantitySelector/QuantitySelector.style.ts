import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#e3e3e3',
        width:130
    },
    button:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d1d1d1'
    },
    button_text:{
        fontSize:18
    },
    quantity:{
        color:'#007eb9'
    }
})