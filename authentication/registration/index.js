import { useState, useEffect } from "react";
import { Pressable,Button, TextInput, View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { con_PasswordVisibility } from "./con_PasswordVisibility";
import axios from "axios";


export default function Registration(){
    const navigation = useNavigation();
    const [fname, setFirstName] = useState ("");
    const [lname, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [conpass, setConPass] = useState ("");

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = con_PasswordVisibility();

    const [isSubmit, setIsSubmit] = useState (false);

    useEffect(()=> {
        const authenticate = async () => {
            axios.post (
                "http://192.168.1.4/db_electrical/registration.php",
                JSON.stringify({
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: password
                })
            )
            .then ((response) => {
                console.log(response.data);
                alert("Successful!");
                setIsSubmit(false);
            })
            .catch((err) => {
              alert("Error: Required Field Missing or User Already Exist")
              console.log(err);

            })
        };
       if (isSubmit) authenticate(navigation.navigate("Login"))
    }, [isSubmit])

    const firstnameHandler = (text) => {
        setFirstName(text);
    };

    
    /*const register = () => {
        navigation.navigate("Profile", {
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    };*/
    return(
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, Onboard!</Text>
            <Text style={styles.lets}>Let's assist you in completing your tasks!</Text>
            <TextInput style={styles.txtinput} placeholder="First name" onChangeText= {firstnameHandler}/>
            <TextInput style={styles.txtinput} placeholder="Last name"  onChangeText={lname => setLastName (lname)} />
            <TextInput style={styles.txtinput} placeholder="Email Address" onChangeText={email => setEmail(email)}/>
            <TextInput style={styles.txtinput} placeholder="Password"  secureTextEntry={passwordVisibility} onChangeText={password => setPassword(password)} />
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TextInput style={styles.constyles} placeholder="Confirm Password" secureTextEntry={passwordVisibility2} onChangeText={conpass => setConPass (conpass)}/>
            <Pressable style={styles.eye} onPress={handlePasswordVisibility2}>
                <MaterialCommunityIcons name={rightIcon2} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity style={styles.regButton}  onPress= {() => setIsSubmit(true)}  >
                <Text style={styles.text}>REGISTER</Text> 
            </TouchableOpacity>
            <Text style={styles.fg}>Already Have an Account? <Text onPress={() =>{
                    navigation.navigate('Login')
                }} style={styles.fg2}>Sign in</Text></Text>
   
        </View>
        </ImageBackground>
    )

}
/*
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: fname,
      lname : lname,
      email: email,
      password: password,
      conpass: conpass
    };
  }
  RegDataInDB=()=>{
    var fname = this.state.fname;
    var lname = this.state.lname;
    var email = this.state.email;
    var password = this.state.password;
    var conpass = this.state.conpass;

    if ((fname.length==0) || (lname.length==0) || (email.length==0) || (password.length==0) || (conpass.length==0)){
      alert("Required Field Is Missing!");
    }else{

      var Data ={
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        conpass: conpass
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      fetch("http://192.168.1.10/db_electrical/db.php",{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Registration Successful") {
          this.props.navigation.navigate("Login");
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

  render()  {
    return(
      <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
      <View style={styles.container}>
          <Text style={styles.welcome}>Welcome, Onboard!</Text>
          <Text style={styles.lets}>Let's assist you in completing your tasks!</Text>
          <TextInput style={styles.txtinput} placeholder={"First name"} onChangeText={fname=>this.setState({fname})} />
          <TextInput style={styles.txtinput} placeholder={"Last name"}  onChangeText={lname=>this.setState({lname})} />
          <TextInput style={styles.txtinput} placeholder={"Email Address"} onChangeText={email=>this.setState({email})} />
          <TextInput style={styles.txtinput} placeholder={"Password"}  secureTextEntry={passwordVisibility} onChangeText={password=>this.setState({password})} />
          <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
          </Pressable>
          <TextInput style={styles.constyles} placeholder="Confirm Password" secureTextEntry={passwordVisibility2} onChangeText={conpass=>this.setState({conpass})}/>
          <Pressable style={styles.eye} onPress={handlePasswordVisibility2}>
              <MaterialCommunityIcons name={rightIcon2} size={22} color="#232323" />
          </Pressable>
          <TouchableOpacity style={styles.regButton}  onPress={()=>{
            this.RegDataInDB("Login");
          }}  >
              <Text style={styles.text}>REGISTER</Text> 
          </TouchableOpacity>
          <Text style={styles.fg}>Already Have an Account? <Text onPress={() =>{
                  this.props.navigation.navigate('Login')
              }} style={styles.fg2}>Sign in</Text></Text>
 
      </View>
      </ImageBackground>
  )
  }
}*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

    },
    
    fg: {
        width:250,
        back: '#463a0b',
        textAlign: "center",
        justifyContent: 'center',
        marginBottom: 5,
        fontFamily: "sans-serif-condensed",
        fontSize: 15,


    },

    fg2: {
        margin: 5,
        width:200,
        back: '#463a0b',
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "800",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed"
    },

    regButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -15,
    },

    text:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },
  
    bgimage: {
        flex: 1
    },

    welcome: { 
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 50

    },
    
    lets : {
        fontFamily: "sans-serif-condensed",

    },
    eye: {
       marginLeft: 250, 
        top: -35,
        marginBottom: 0
    },

    constyles: {
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom:0,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        marginTop: -10
     },
 

  });