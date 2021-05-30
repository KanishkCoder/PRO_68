import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component{


    render(){
        return(
            <View style={styles.container}>
                <Text>Facebook</Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center' ,
        alignSelf:'center',

    }
})