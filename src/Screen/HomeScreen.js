import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Image/images.png")} // Use require for the image source
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={{ backgroundColor: 'white', height: 220, width: "95%", borderRadius: 10,marginTop:280,zIndex:1,flexDirection:'row' }}>
          <View style={{width:'10%',marginTop:20,marginLeft:10}}>
            <Text style={{width:18,height:18,borderWidth:4,borderRadius:50,borderColor:'#b2d1ff'}}></Text>
            <Text  style={{ borderStyle: 'dotted',
        height:100,
        borderLeftWidth:3,
        marginLeft:7,
        borderColor:'grey'
        }}></Text>
            <Text style={{width:18,height:18,borderWidth:4,borderRadius:50,}}></Text>
          </View>
          <View style={{width:'90%'}}>
          <View style={{marginTop:10}}>
          <Text style={{color:'grey',marginTop:8,marginLeft:8}}>From</Text>
          <Text style={{color:'black',marginTop:10,marginLeft:8,fontWeight:'700',fontSize:16}}>Seoni</Text>
         </View>
         <View style={{flexDirection:'row'}}>
         <View style={{borderWidth:0.2,width:'85%',alignSelf:'center',borderColor:'grey'}}></View>
         <Icon
        style={styles.icon}
        size={20}
        name="arrowup"
        rotate={90} // Rotate the icon 90 degrees
      />
       <Icon
        style={styles.icon}
        size={20}
        name="arrowdown"
        rotate={90} // Rotate the icon 90 degrees
      />
         </View>
         <View>
          <Text style={{color:'grey',marginLeft:8}}>To</Text>
          <Text style={{color:'black',marginTop:10,marginLeft:7,fontWeight:'700',fontSize:16}}>Bhopal</Text>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
           <Text style={{backgroundColor:'#b2d1ff',paddingHorizontal:40,paddingVertical:8,borderRadius:10,fontWeight:'700',color:'#0f214c'}}>TODAY</Text>
           <Text style={{backgroundColor:'#b2d1ff',paddingHorizontal:30,paddingVertical:8,borderRadius:10,fontWeight:'700',color:'#0f214c'}}>TOMORROW</Text>
         </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, backgroundColor: '#0f214c',borderTopLeftRadius:20,borderTopRightRadius:20}}>
       <View style={{backgroundColor:'white',height:40,width:"95%",borderRadius:10,marginTop:90,alignSelf:'center',flexDirection:'row'}} >
       <Icon style={{ paddingHorizontal:10,paddingVertical:6,color:'#14ae5c'}} size={24} name="calendar" />
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'grey',fontWeight:'500',fontSize:16,marginTop:7}}>Date Of Journey:</Text>
       <Text style={{color:'black',fontWeight:'500',fontSize:16,marginTop:7,marginLeft:5}}>Thu, 25 May</Text>
       </View>
       <View>
        <Text onPress={()=>{
           navigation.navigate('Select Date of Journey');
        }} style={{paddingHorizontal:20,backgroundColor:'#b2d1ff',paddingVertical:5,marginTop:5,marginLeft:30,borderRadius:10,color:'black',fontWeight:'800'}}>GO</Text>
       </View>
       </View>
       <View style={{marginTop:30}}>
        <Text style={{fontSize:36,fontWeight:'700',color:'white',textAlign:'center'}}>TIWARI</Text>
        <Text style={{fontSize:40,fontWeight:'700',color:'white',textAlign:'center'}}>TRAVELS</Text>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
