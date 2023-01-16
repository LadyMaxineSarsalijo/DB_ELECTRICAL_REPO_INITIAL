import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import monitor from './pics/monitor.png'
import ricecooker from './pics/ricecooker.png'
import iron from './pics/iron.png'
import aircon from './pics/aircon.png'
import tv from './pics/tv.png'
import laptop from './pics/laptop.png'
import bulb from './pics/bulb.png'
import cfan from './pics/cfan.png'
import ref from './pics/ref.png'
import waterh from './pics/waterh.png'

import { ScrollView } from 'react-native-gesture-handler';


const Manual = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.syd}>
          <Text style={styles.textsyd}>SELECT YOUR DEVICE</Text>
        </View>
        <TouchableOpacity style={styles.monitorbg}>
        <Image source={monitor} style={styles.monitorimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ricecookerbg}>
        <Image source={ricecooker} style={styles.ricecookerimg}/>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.ironbg}>
        <Image source={iron} style={styles.ironimg}/>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.airconbg}>
        <Image source={aircon} style={styles.airconimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tvbg}>
        <Image source={tv} style={styles.tvimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.laptopbg}>
        <Image source={laptop} style={styles.laptopimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulbbg}>
        <Image source={bulb} style={styles.bulbimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cfanbg}>
        <Image source={cfan} style={styles.cfanimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.refbg}>
        <Image source={ref} style={styles.refimg}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.waterhbg}>
        <Image source={waterh} style={styles.waterhimg}/>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
      
  );
}

export default Manual;

const styles = StyleSheet.create({
 // monitorbg:{
 //   backgroundColor: "#F8D866",
 //   top: 100,
//width:
 // },
  waterhimg:{
    top: -200,
    left: 235,
    height: 100,
    width: 110
  }, 
  refimg:{
    top: -100,
    left: 40,
    height: 100,
    width: 120
  }, 
  cfanimg:{
    top: -160,
    left: 235,
    height: 80,
    width: 110
  }, 
  bulbimg:{
    top: -70,
    left: 45,
    height: 100,
    width: 120
  },
  laptopimg:{
    top: -118,
    left: 240,
    height: 80,
    width: 120
  }, 
  tvimg:{
    top: -40,
    left: 40,
    height: 80,
    width: 130
  },
  airconimg:{
    top: -90,
    left: 230,
    height: 100,
    width: 120
  }, 
  ironimg:{
    top: 10,
    left: 40,
    height: 100,
    width: 100
  },
  ricecookerimg:{
    top: -50,
    left: 245,
    height: 95,
    width: 90
  }, 
  monitorimg:{
    top: 50,
    left: 50,
    height: 100,
    width: 100
  },
  textsyd: {
    fontStyle: "normal",
    fontSize: 25,
    textAlign:'center',
    height: 60,
    padding:5,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",  
  },
  syd:{
    backgroundColor: '#DCB900',
    height: 40,
    width: 250,
    borderRadius: 20,
    textAlign:'center',
    left: 75,
    top: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#EFECE1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  calcButton: {
    backgroundColor: '#DCB900',
    height: 40,
    width: 130,
    borderRadius: 15,
    textAlign:'center',
    left: 130,
    top: 610
  },
btext:{
  fontStyle: "normal",
  fontSize: 20,
  textAlign:'center',
  height: 30,
  width: 50,
  padding:0,
  marginLeft:15,
  fontWeight: "bold",
  fontFamily: "sans-serif-condensed",
  },

  Bbutton: {
    backgroundColor:'#FEF0B3',
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 15,
    marginTop: 50,
    marginLeft: 10
},


});