import { useState } from "react";
import { Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import bg from './bg.png';
import getIcon from './getIcon.png';




export default function GetDone(){
    const navigation = useNavigation();
    
    return(
        <ImageBackground source={bg} style = {styles.container}>
        <View>
        <Image source={getIcon} style={styles.getIcon}/>
        <Text style={styles.getTxt}>
            Get things done with electriCAL
        </Text>
        <Text style={styles.getDef}>
        "electriCAL" is an app for electricity usage which will help you become more aware of your electric consumption any time by just inputting your wattage consumption.  With electriCAL, we made your life easier and wiser.
        </Text>
        <TouchableOpacity style={styles.getButton} onPress={() => {
            navigation.navigate('Registration');
        }}>
            <Text style={styles.getStarted}>
                GET STARTED
            </Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFECE1',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },

    getIcon: {
        marginTop: 230,
        left: 95
    },

    getTxt: {
        fontFamily: "sans-serif-condensed",
        fontSize: 25,
        fontWeight: "bold",
        left: 20,
        top: 15
    },

    getDef: {
        fontFamily: "sans-serif-condensed",
        fontSize: 18,
        fontWeight: "normal",
        top: 30,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign:'center',

    },

    getButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        left: 55,
        borderRadius: 20,
        textAlign:'center',
        marginTop: 55
    },

    getStarted:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"
    }




}
)