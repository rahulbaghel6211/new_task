import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BusTicketScreen=({navigation})=>{
    return(
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
           navigation.navigate('Ticket');
        }}  style={{ paddingHorizontal:10,paddingVertical:6,color:'white'}} size={24} name="arrowleft" />
          </View>
          <View style={{paddingRight:10}}>
          <Text style={{fontSize:16,fontWeight:'600',color:'white',textAlign:'right'}}>Hans Travles Pvt Ltd</Text>
          <Text style={{fontSize:16,fontWeight:'600',color:'white',marginTop:5,textAlign:'right'}}>17:00 - 10:00 </Text>
          <Text style={{fontSize:12,fontWeight:'100',color:'white',marginTop:5,textAlign:'right'}}>26 May</Text>
          <Text style={{fontSize:12,fontWeight:'300',color:'white',marginTop:5,textAlign:'right'}}>Varanasi - indore</Text>
          </View>
           
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'space-between',marginTop:10}}>
        <View>
        <Text style={{fontSize:16,fontWeight:'500',paddingHorizontal:20,backgroundColor:'#ff5e5e',borderRadius:10,color:'white',paddingVertical:3,marginRight:20,borderWidth:0.5,borderColor:'#ff5e5e'}}>ALL</Text>
        </View>
        <View>
        <Text style={{fontSize:16,fontWeight:'500',paddingHorizontal:20,borderWidth:0.5,borderRadius:10,paddingVertical:2,marginRight:20}}>₹ 200</Text>
        </View>
        <View>
        <Text style={{fontSize:16,fontWeight:'500',paddingHorizontal:20,borderWidth:0.5,borderRadius:10,paddingVertical:2}}>₹ 700</Text>
        </View> 

      </View>
      <View style={{width:'80%',height:515,borderWidth:0.2,marginTop:20,borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{padding:20,}}>LOWER-₹ 200</Text>
            <MaterialCommunityIcons style={{padding:10,color:'grey'}} size={44} name="steering" />
        </View>

        <View style={{flexDirection:'row',width:"100%",justifyContent:'space-between'}}>
            <View style={{width:"40%",height:380,marginLeft:10,flexDirection:'row',flexWrap:'wrap'}}>

                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                     <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>1</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>2</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>5</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>6</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,backgroundColor:'#5dff77'}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>9</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>10</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>13</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>14</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,backgroundColor:'#e5e5e5'}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>17</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>18</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>21</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>22</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,backgroundColor:'#e5e5e5'}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>25</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,backgroundColor:'#e5e5e5'}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>26</Text>
                </View>
            </View>
            <View style={{width:"40%",flexDirection:'row',flexWrap:'wrap'}}>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>3</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>4</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>7</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>8</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>11</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>12</Text>
                </View>
                <View style={{width:48,height:45,margin:5,borderRadius:8,borderWidth:0.3}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>15</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>16</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>19</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>20</Text>
                </View>

                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>23</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>24</Text>
                </View>

                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>27</Text>
                </View>
                <View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>28</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row',marginLeft:10}}>
        <View style={{width:50,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
        <Text style={{textAlign:'center',fontSize:18,marginTop:7}}>29</Text>
        </View>

<View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
<Text style={{textAlign:'center',fontSize:18,marginTop:7}}>30</Text>
</View>
<View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
<Text style={{textAlign:'center',fontSize:18,marginTop:7}}>31</Text>
</View>

<View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
<Text style={{textAlign:'center',fontSize:18,marginTop:7}}>32</Text>
</View>
<View style={{width:48,backgroundColor:'#e5e5e5',height:45,margin:5,borderRadius:8}}>
<Text style={{textAlign:'center',fontSize:18,marginTop:7}}>33</Text>
</View>
        </View>

      </View>
      <View style={{borderWidth:0.4,width:'100%',marginTop:10,borderColor:'black'}}></View>
            <View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between',alignContent:'space-between' }}>
                    <View style={{width:'50%'}}>
                    <Text>2 Seat | 9,L</Text>
                    </View>
                  <View>
                  <Text>Exclusive of Text ₹ 900</Text>
                  </View>
                </View>
            </View>
            <View style={{backgroundColor:'#0f214c',width:"100%",padding:10}}>
                <Text  onPress={()=>{
           navigation.navigate('Boarding');
        }}  style={{textAlign:'center',color:'white',fontWeight:'700'}}>Select Boarding & Droping Place</Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'white',
    },
  });

export default BusTicketScreen