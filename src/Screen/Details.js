import React from "react";
import { StyleSheet, Text, View, ScrollView,TextInput, Image} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import femaleimage from '../Image/female.png';
import maleimage from '../Image/male.png';
const DetailsScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "#0f214c",
          justifyContent: 'space-between',
          padding: 10,
          flexDirection: 'row',
        }}
      >
        <View>
          <Icon
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={{ paddingHorizontal: 10, paddingVertical: 6, color: 'white' }}
            size={24}
            name="arrowleft"
          />
        </View>
        <View style={{ paddingRight: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'white', textAlign: 'right' }}>
            Hans Travels Pvt Ltd
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '100', color: 'white', marginTop: 5, textAlign: 'right' }}>
            26 May
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '300', color: 'white', marginTop: 5, textAlign: 'right' }}>
            Varanasi - Indore
          </Text>
        </View>
      </View>
      <View style={{ height: 50, width: '100%', backgroundColor: '#b2d1ff' }}>
      </View>
      <View style={{ zIndex: 1, width: "95%", alignSelf: 'center', height:90, borderRadius:15, backgroundColor: 'white',marginTop:-30,flexDirection:'row' }}>
       
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
      <View style={{borderWidth:0.2,width:'100%',marginTop:10}}></View>
      <ScrollView style={{marginBottom:50}}>
      <Text style={{fontSize:12,color:'black',padding:20}}>Total Traveller(s):02</Text>
      <View style={{  width: "95%", alignSelf: 'center', height:160, borderRadius:15, backgroundColor: 'white',marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.8,borderColor:'#d6d8e4'}}>
            <Text  style={{fontSize:12,color:'black',padding:10}}>Traveller:01</Text>
              <Text  style={{fontSize:12,color:'black',padding:10,backgroundColor:'#d6d8e4',borderTopRightRadius:15}}>Seat 3C</Text>
        </View>
        <TextInput
        placeholder="Full Name"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"95%",
          alignSelf:'center',
          marginTop:15,
          borderRadius:8
        }}
      />
      <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
      <TextInput
        placeholder="Age"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"30%",
          alignSelf:'center',
          borderRadius:8,
        }}
      />
      <View style={{width:"60%",height:40, borderWidth: 1,marginLeft:20,borderRadius:10,flexDirection:'row',}}>
        <View style={{borderWidth: 1,margin:3,width:'45%',marginLeft:7,borderRadius:5,flexDirection:'row'}}>
        <Image source={femaleimage} style={{width:30,height:30,borderRadius:50}} />
            <Text style={{color:'#0f214c',padding:5}}> Female</Text>
        </View>
        <View style={{borderWidth: 1,margin:3,width:'45%',borderRadius:5,flexDirection:'row',backgroundColor:'#0f214c'}}>
        <Image source={maleimage} style={{width:30,height:30,borderRadius:50}} />
        <Text style={{color:'white',padding:5}}>Male</Text>
        </View>

      </View>
      </View>
      </View>
      <View style={{  width: "95%", alignSelf: 'center', height:160, borderRadius:15, backgroundColor: 'white',marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.8,borderColor:'#d6d8e4'}}>
            <Text  style={{fontSize:12,color:'black',padding:10}}>Traveller:02</Text>
              <Text  style={{fontSize:12,color:'black',padding:10,backgroundColor:'#d6d8e4',borderTopRightRadius:15}}>Seat 3C</Text>
        </View>
        <TextInput
        placeholder="Full Name"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"95%",
          alignSelf:'center',
          marginTop:15,
          borderRadius:8
        }}
      />
      <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
      <TextInput
        placeholder="Age"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"30%",
          alignSelf:'center',
          borderRadius:8,
        }}
      />
      <View style={{width:"60%",height:40, borderWidth: 1,marginLeft:20,borderRadius:10,flexDirection:'row',}}>
        <View style={{borderWidth: 1,margin:3,width:'45%',marginLeft:7,borderRadius:5,flexDirection:'row'}}>
        <Image source={femaleimage} style={{width:30,height:30,borderRadius:50}} />
            <Text style={{color:'#0f214c',padding:5}}> Female</Text>
        </View>
        <View style={{borderWidth: 1,margin:3,width:'45%',borderRadius:5,flexDirection:'row',backgroundColor:'#0f214c'}}>
        <Image source={maleimage} style={{width:30,height:30,borderRadius:50}} />
        <Text style={{color:'white',padding:5}}>Male</Text>
        </View>

      </View>
      </View>
      </View>
       <View style={{  width: "95%", alignSelf: 'center', height:160, borderRadius:15, backgroundColor: 'white',marginTop:10}}>
        <View style={{flexDirection:'row',}}>
        <Icon
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={{ paddingLeft:20, paddingVertical: 6,color:'black'}}
            size={24}
            name="profile"
          />
            <Text  style={{fontSize:12,color:'black',padding:10}}>Your ticket info will be sent here</Text>
        </View>
        <TextInput
        placeholder="Email Address"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"95%",
          alignSelf:'center',
          marginTop:15,
          borderRadius:8
        }}
      />
      <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
        <Text style={{color:'black',padding:8,borderWidth:1,borderTopLeftRadius:8,borderBottomLeftRadius:10}}>+91</Text>
      <TextInput
        placeholder="1234567890"
        onChangeText={(text) => console.log(text)} // Handle text changes
        value={""} // Set the initial value
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: 10,
          paddingRight: 10,
          width:"84%",
          alignSelf:'center',
          borderBottomRightRadius:8,
          borderTopRightRadius:8
        }}
      />
      </View>
      </View>
      <View style={{  width: "95%", alignSelf: 'center', height:200, borderRadius:15, backgroundColor: 'white',marginTop:10}}>
        <View style={{flexDirection:'row',}}>
        <Icon
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={{ paddingLeft:20, paddingVertical: 6,color:'green'}}
            size={20}
            name="staro"
          />
            <Text  style={{fontSize:12,color:'black',padding:10}}>Offers</Text>
        </View>
        <View style={{width:"90%",height:40, borderWidth: 1,marginLeft:20,borderRadius:10,flexDirection:'row',}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:10,padding:10,color:'black',fontWeight:'600'}}>TTBESTSTBUS:Get upto 500 OFF on first Booking </Text>
            <Text style={{width:15,height:15,borderRadius:50,borderWidth:1,margin:12,marginLeft:40,textAlign:'center',fontSize:10}}>●</Text>
            </View>
        </View>
        <View style={{width:"90%",height:40, borderWidth: 1,marginLeft:20,borderRadius:10,flexDirection:'row',marginTop:10}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:10,padding:10,color:'black',fontWeight:'600'}}>TTBESTSTBUS:Get upto 500 OFF on first Booking </Text>
            <Text style={{width:15,height:15,borderRadius:50,borderWidth:1,margin:12,marginLeft:40,}}> </Text>
            </View>
        </View>
        <View style={{width:"90%",height:40, borderWidth: 1,marginLeft:20,borderRadius:10,flexDirection:'row',marginTop:10}}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:10,padding:10,color:'black',fontWeight:'600'}}>TTBESTSTBUS:Get upto 500 OFF on first Booking </Text>
            <Text style={{width:15,height:15,borderRadius:50,borderWidth:1,margin:12,marginLeft:40}}> </Text>
            </View>
        </View>

      </View>
      <View style={{width:'100%',borderWidth:0.5,marginTop:30}}></View>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#33cccc',height:30,borderRadius:7,marginTop:16,width:30,marginLeft:20}}>
        <Icon
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={{color:'white',padding:5}}
            size={20}
            name="check"
          />
        </View>
        <Text style={{padding:20,fontSize:14}}>
            I agree to Privacy Policy & Terms and Condition
        </Text>
      </View>
      <View style={{width:'100%',borderWidth:0.6,marginTop:10,borderColor:'black'}}></View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{padding:10}}>
         <Text style={{fontSize:18,color:'black',fontWeight:'800'}}>Amount to be Paid</Text>
         <View style={{flexDirection:'row',marginTop:20}}>
         <Text style={{fontSize:18,color:'black',fontWeight:'800'}}>₹ 820</Text>
         <Text style={{fontSize:18,color:'black',fontWeight:'800',marginLeft:20,backgroundColor:'#d9d9d9',paddingBottom:5,paddingHorizontal:15,borderRadius:50,paddingTop:2}}>i</Text>
         </View>
        </View>
        <View>
         <View style={{backgroundColor:'#0f214c',flexDirection:'row',marginTop:20,paddingHorizontal:30,paddingVertical:10,marginRight:20,borderRadius:10}}>
            <Text onPress={() => {
              navigation.navigate('ConfirmDetails');
            }} style={{color:'white',fontSize:20,textAlign:'center',fontWeight:'800'}}>PAY MOW</Text>
            <Icon
            onPress={() => {
                navigation.navigate('ConfirmDetails');
              }}
            style={{color:'white',padding:5,}}
            size={20}
            name="arrowright"
          />
         </View>
        </View>
      </View>
      </ScrollView>

    </>
  );
};

export default DetailsScreen;
