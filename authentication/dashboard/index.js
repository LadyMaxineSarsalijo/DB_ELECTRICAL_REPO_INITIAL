import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Animated, SafeAreaView, Button, Text, TextInput, TextInputComponent, View, Alert, ImageBackground, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import DrawBar from "../../screen/DrawBar";
import 'react-native-gesture-handler';


export default function Dashboard(){
    const navigation = useNavigation();
    const [budget, setBudget] = useState('')
    const kwh = 16.673;
    const [result, setResult] = useState('')
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const [showMenu, setShowMenu] = useState(false);

    return(
    
        <ImageBackground source={require('./FAQ.png')} resizeMode = "cover" style ={styles.bgimage}>
        <View style ={styles.container}>
        <TouchableOpacity style={{marginBottom: -25, marginRight: 300}} onPress={() =>{
                    navigation.navigate('DrawBar');
          }}>
                <FontAwesome5 name="bars" size={24} color="161924"/>
            </TouchableOpacity>
        <Image source={require('./suga.png')} style = {styles.image}/>

            <Text style = {styles.textbud}>
                 Input Your Budget: {budget} 
            </Text>
            <TextInput style ={styles.txtinput} placeholder="PHP" 
            keyboardType="numeric"
            onSubmitEditing={(val) => setBudget(val.nativeEvent.text)}/>
            <TouchableOpacity style={styles.saveButton}>
                <Text style = {styles.text}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upButton}>
                <Text style = {styles.text}>UPDATE</Text>
            </TouchableOpacity> 
            <Text style = {styles.steps}>Steps:</Text>   
            <Text style = {styles.ins1}>1. Input desired budget above as your limit in a month.</Text>    
            <Text style = {styles.ins2}>2. Updated kilowatt per hour price is provided. Input electricity usage from your meter.</Text>    
            <Text style = {styles.ins2}>3. Click calculate button to determine if you reach beyond the limit or not.</Text>    
            <Text style = {styles.calctext}>Electricity Usage Calculator</Text>   
            <Text style = {styles.price} >Price of KW/H: ₱{kwh}</Text>
            <Text style = {styles.usage}>Usage: </Text>
            <TextInput style = {styles.usageInput} placeholder="Input Electricity Usage " keyboardType="numeric"/>
            <TouchableOpacity style={styles.calcButton}>
                <Text style = {styles.text}>CALCULATE</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
   

    },

 
    text:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginBottom: 400
        
    },
    image:{
        justifyContent: "center",
        width: 150,
        height: 150,
        marginBottom: -5,
        marginTop: 30
    
    },
    bgimage: {
        flex: 1
    },

    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 330,
        padding:10,
        margin:5,
        marginTop:-400,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom: 10,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"
    },
    saveButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: -140

    },
    upButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 130,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -55,
        marginRight: -140
    },
    steps:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginRight: 280
    },
    ins1:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -60

    },
    ins2:{
        fontStyle: "normal",
        fontSize: 12,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: -5,
        marginLeft: 10
    },
    calctext:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: 10,
        color: "red"
    },
    price:{
        fontStyle: "normal",
        fontSize: 18,
        textAlign:'center',
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 5,
        marginLeft: -50

    },
    usage:{
        fontStyle: "normal",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        marginTop: 15,
        marginLeft: -170

    },
    usageInput:{
        borderWidth: 2,
        height: 35,
        width: 180,
        padding:10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -30,
        marginLeft: 60
    },

    calcButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: 25
    },





  });