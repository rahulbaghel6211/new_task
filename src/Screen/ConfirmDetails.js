import React from "react";
import { StyleSheet, Text, View, ScrollView,TextInput, Image} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import femaleimage from '../Image/female.png';
import maleimage from '../Image/male.png';
const ConfirmDetailsScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height:50,
          backgroundColor: "#0f214c",
          padding: 10,
          flexDirection: 'row',
        }}
      >
        <View>
          <Icon
            onPress={() => {
              navigation.navigate('Details');
            }}
            style={{ paddingHorizontal: 10, paddingVertical: 6, color: 'white' }}
            size={24}
            name="arrowleft"
          />
        </View>
        <View style={{justifyContent:'center',alignContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:'800',color:'white'}}> Confirm Deatils </Text>
        </View>
      </View>
      <View>
        <Text style={{padding:20}}>Journey Deatils</Text>
      </View>
      <View style={{ width: "95%", alignSelf: 'center', height:90, borderRadius:15, backgroundColor: 'white',flexDirection:'row', }}>
       
       <View style={{width:"50%",padding:10}}>
        <Text style={{fontSize:12,color:'black'}}>Boarding Point</Text>
        <Text style={{marginTop:10,color:'black'}}>Sarwate Bus Stand</Text>
        <Text style={{fontSize:12}}>20:00 , 26 May 2023</Text>
       </View>
       <View style={{width:"50%",padding:10}}>
        <Text style={{fontSize:12,color:'black',textAlign:'right'}}>Dropping Point</Text>
        <Text style={{marginTop:10,color:'black',textAlign:'right'}}>Laal Pani Bus Stand</Text>
        <Text style={{fontSize:12,textAlign:'right'}}>09:00 , 27 May 2023</Text>
       </View>
      </View>
      <View style={{borderWidth:0.2,width:'100%',marginTop:20}}></View>
      <View>
        <Text style={{padding:20}}>Traveller Deatils</Text>
      </View>
      <View style={{ width: "95%", alignSelf: 'center', height:90, borderRadius:15, backgroundColor: 'white',flexDirection:'row',justifyContent:'space-between' }}>
      <Image source={femaleimage} style={{width:70,height:70,borderRadius:50,margin:10}} />
      <View style={{marginTop:10}}>
        <Text>name:  Shidhant Pandey</Text>
        <Text>Age:  23</Text>
        <Text>Gender: Male</Text>
      </View>
      <View style={{backgroundColor:'#d6d8e4',borderBottomRightRadius:10,borderTopRightRadius:10}}>
        <Text style={{paddingLeft:10,paddingTop:35,paddingRight:10,color:'#0f214c',fontSize:14}}>Seat:3c</Text>
      </View>
     
      </View>
      <View style={{ width: "95%", alignSelf: 'center', height:90, borderRadius:15, 
      backgroundColor: 'white',flexDirection:'row',justifyContent:'space-between',marginTop:20 }}>
      <Image source={femaleimage} style={{width:70,height:70,borderRadius:50,margin:10}} />
      <View style={{marginTop:10}}>
        <Text>name:  Shidhant Pandey</Text>
        <Text>Age:  23</Text>
        <Text>Gender: Male</Text>
      </View>
      <View style={{backgroundColor:'#d6d8e4',borderBottomRightRadius:10,borderTopRightRadius:10}}>
        <Text style={{paddingLeft:10,paddingTop:35,paddingRight:10,color:'#0f214c',fontSize:14}}>Seat:3c</Text>
      </View>
     
      </View>
      <View style={{borderWidth:0.2,width:'100%',marginTop:20}}></View>
      <View>
        <Text style={{padding:20,color:'black'}}>Ticket will be sent on these details</Text>
      </View>
      <View style={{ width: "95%", alignSelf: 'center', height:90, borderRadius:15, 
      backgroundColor: 'white' }}>
         <View style={{flexDirection:'row',paddingTop:10}}>
         <Icon
            style={{ paddingHorizontal:10, paddingVertical: 6,}}
            size={20}
            name="phone"
          />
          <Text style={{marginTop:5,color:'#0f214c'}}>+91 91258963245</Text>
         </View>
         <View style={{flexDirection:'row',paddingTop:2}}>
         <Icon
            style={{ paddingHorizontal:10, paddingVertical: 6,}}
            size={20}
            name="mail"
          />
          <Text style={{marginTop:5,color:'#0f214c'}}>example@gmail.com </Text>
         </View>
     
      </View>
      <View
        style={{
          width: "100%",
          height:50,
          backgroundColor: "#0f214c",
          padding: 10,
          flexDirection: 'row',
          marginTop:30
        }}
      >
        <View style={{justifyContent:'center',alignContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:'800',color:'white',marginLeft:110}}> Pay Now  ₹850 </Text>
        </View>
        <View>
          <Icon
            onPress={() => {
              navigation.navigate('Details');
            }}
            style={{ paddingHorizontal: 10, paddingVertical: 6, color: 'white' }}
            size={24}
            name="arrowright"
          />
        </View>
      </View>
    </>
  );
};

export default ConfirmDetailsScreen;
