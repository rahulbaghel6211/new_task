import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const TicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "#0f214c",
          justifyContent:'space-between',
          padding:10,
          flexDirection:'row'
        }}>
          <View>
          <Icon  onPress={()=>{
           navigation.navigate('Home');
        }}  style={{ paddingHorizontal:10,paddingVertical:6,color:'white'}} size={24} name="arrowleft" />
          </View>
          <View style={{paddingRight:10}}>
          <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:5,textAlign:'right'}}>Bhopal To Seoni</Text>
          <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:5,textAlign:'right'}}>3 June </Text>
          <Text style={{fontSize:12,fontWeight:'100',color:'white',marginTop:5,textAlign:'right'}}>142 Buses</Text>
          </View>
           
      </View>
      <View
        style={{
          backgroundColor: "#b2d1ff",
          width: "100%",
          height:50
        }}
      >
      </View>
      <View style={{height:550}}>
      <ScrollView
        style={{marginTop:30}}
      >
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,borderRadius:10,marginBottom:40,marginLeft:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',width:"100%"}}>
          <View>
          <Text style={{color:'black',marginTop:5,marginLeft:5}}> Hans Travles Pvt Ltd</Text> 
          <Text style={{marginLeft:5}}> AC Sleeper</Text> 
          </View>
            <Text style={{backgroundColor:'#b2d1ff',paddingHorizontal:10,paddingVertical:10,borderTopRightRadius:10}}>28 Seats</Text>
        </View>
        <View style={{flexDirection:'row',padding:10,width:"100%",marginTop:10}}>
            <View >
            <Text>17:00</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View style={{}}>
             <Text style={{backgroundColor:'#ededed',paddingHorizontal:10,borderRadius:20}}>17 hrs</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View>
            <Text>10:00</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#b2d1ff',padding:10,borderBottomEndRadius:10,borderBottomStartRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,paddingHorizontal:10}}>₹ 2,025</Text>
              <Icon onPress={()=>{
           navigation.navigate('Bus Seats');
        }}  style={{ paddingHorizontal:10}} size={24} name="arrowright" />
            </View>
        </View>
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,borderRadius:10,marginBottom:40,marginLeft:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',width:"100%"}}>
          <View>
          <Text style={{color:'black',marginTop:5,marginLeft:5}}> Ramashiv Travles</Text> 
          <Text style={{marginLeft:5}}> AC Sleeper</Text> 
          </View>
            <Text style={{backgroundColor:'#b2d1ff',paddingHorizontal:10,paddingVertical:10,borderTopRightRadius:10}}>0 Seats</Text>
        </View>
        <View style={{flexDirection:'row',padding:10,width:"100%",marginTop:10}}>
            <View >
            <Text>17:00</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View style={{}}>
             <Text style={{backgroundColor:'#ededed',paddingHorizontal:10,borderRadius:20}}>15hrs 30min</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View>
            <Text>10:30</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#ff5e5e',padding:10,borderBottomEndRadius:10,borderBottomStartRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,paddingHorizontal:10}}>₹ 2,025</Text>
              {/* <Icon style={{ paddingHorizontal:10,}} size={24} name="arrowright" /> */}
              <Text style={{paddingRight:10,fontWeight:'700'}}>SOLD OUT</Text>
            </View>
        </View>
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,borderRadius:10,marginBottom:40,marginLeft:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',width:"100%"}}>
          <View>
          <Text style={{color:'black',marginTop:5,marginLeft:5}}>Bhopal Travles</Text> 
          <Text style={{marginLeft:5}}> AC Sleeper</Text> 
          </View>
            <Text style={{backgroundColor:'#b2d1ff',paddingHorizontal:10,paddingVertical:10,borderTopRightRadius:10}}>04 Seats</Text>
        </View>
        <View style={{flexDirection:'row',padding:10,width:"100%",marginTop:10}}>
            <View >
            <Text>17:00</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View style={{}}>
             <Text style={{backgroundColor:'#ededed',paddingHorizontal:10,borderRadius:20}}>17 hrs</Text>
            </View>
            <View style={{borderWidth:0.5,borderColor:'grey',width:100,height:0.5,marginTop:10}}></View>
            <View>
            <Text>10:00</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#b2d1ff',padding:10,borderBottomEndRadius:10,borderBottomStartRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,paddingHorizontal:10}}>₹ 2,025</Text>
              <Icon  onPress={()=>{
           navigation.navigate('Bus Seats');
        }}  style={{ paddingHorizontal:10}} size={24} name="arrowright" />
            </View>
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TicketScreen;
