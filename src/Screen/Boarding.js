import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const Boarding=({navigation})=>{
    return(
        <View>
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
          <Text style={{fontSize:16,fontWeight:'600',color:'white',textAlign:'right'}}>Hans Travles Pvt Ltd</Text>
          <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:5,textAlign:'right'}}>17:00 - 10:00 </Text>
          <Text style={{fontSize:12,fontWeight:'100',color:'white',marginTop:5,textAlign:'right'}}>26 May</Text>
          <Text style={{fontSize:12,fontWeight:'300',color:'white',marginTop:5,textAlign:'right'}}>Varanasi - indore</Text>
          </View>
           
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width:"50%",paddingHorizontal:30,paddingVertical:10,borderRightWidth:0.2,borderBottomWidth:0.2}}>
            <Text style={{color:'#ff5e5e'}}>BOARDING POINT</Text>
            <Text style={{fontSize:12}}>add Location</Text>
        </View>
        <View style={{width:"50%",paddingHorizontal:30,paddingVertical:10,borderBottomWidth:0.2}}>
            <Text>DROPING POINT</Text>
            <Text style={{fontSize:12}}>add Location</Text>
        </View>

      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{ borderWidth: 1, borderColor: '#ff5e5e', borderRadius: 50, width: 20 }}>
  <View style={{ width: 15, backgroundColor: '#ff5e5e', borderRadius: 50, height: 15,alignSelf:'center',marginTop:1 }}></View>
</View>
        <Text style={{marginLeft:5}}> Sarwate Bus Stand</Text>
        </View>
        <Text style={{color:'black'}}>21:30</Text>
      </View>
    <View style={{borderWidth:0.2}}></View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{ borderWidth: 2, borderColor: 'grey', borderRadius: 50, width: 20 }}>
</View>
        <Text style={{marginLeft:5}}> Sarwate Bus Stand</Text>
        </View>
        <Text style={{color:'black'}}>21:30</Text>
      </View>
    <View style={{borderWidth:0.2}}></View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{ borderWidth: 2, borderColor: 'grey', borderRadius: 50, width: 20 }}>
</View>
        <Text style={{marginLeft:5}}> Sarwate Bus Stand</Text>
        </View>
        <Text style={{color:'black'}}>21:30</Text>
      </View>
    <View style={{borderWidth:0.2}}></View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{ borderWidth: 2, borderColor: 'grey', borderRadius: 50, width: 20 }}>
 </View>
        <Text style={{marginLeft:5}}> Sarwate Bus Stand</Text>
        </View>
        <Text style={{color:'black'}}>21:30</Text>
      </View>
    <View style={{borderWidth:0.2}}></View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{ borderWidth:2, borderColor: 'grey', borderRadius: 50, width: 20 }}>
</View>
        <Text style={{marginLeft:5}}> Sarwate Bus Stand</Text>
        </View>
        <Text style={{color:'black'}}>21:30</Text>
      </View>
    <View style={{borderWidth:0.2}}></View>

     <View style={{ backgroundColor: '#0f214c', height: 100, width: "100%",marginTop:270 }}>
                <Text onPress={()=>{
           navigation.navigate('Details');
        }}  style={{textAlign:'center',fontSize:18,fontWeight:'700',color:'white',marginTop:25}}>Proceed</Text>
            </View>
        </View>
    )
}
export default Boarding