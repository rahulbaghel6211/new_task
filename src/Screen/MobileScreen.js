import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';

const MobileScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (text) => {
    // Remove any non-numeric characters from the input
    const cleanedText = text.replace(/\D/g, '');
    setMobileNumber(cleanedText);

    // Validate the input and set an error message if needed
    if (cleanedText.length === 10) {
      setErrorMessage('');
    } else {
      setErrorMessage('Mobile number must be 10 digits');
    }
  };

  const navigateToNextScreen = () => {
    if (mobileNumber.length === 10) {
      // Navigate to the next screen if the mobile number is valid
      navigation.navigate('Otp'); // Replace 'NextScreen' with the actual screen name you want to navigate to
    } else {
      // Show an error message if the mobile number is not valid
      setErrorMessage('Mobile number must be 10 digits');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ marginBottom: 150 }}>
          <Text style={{ fontSize: 24, fontWeight: '600', color: '#0f214c' }}>TIWARI TRAVELS</Text>
          <Text style={{ fontSize: 15, color: '#0f214c' }}>Online Bus Ticket Booking App</Text>
        </View>
        <View style={{ width: '100%', backgroundColor: '#0f214c', height: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Text style={{ paddingHorizontal: 25, paddingTop:30, paddingBottom:15, color: 'white' }}>Enter Mobile Number</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:14,marginLeft:25,color:'white'}}>91 -</Text>
          <TextInput
            style={styles.input}
            placeholder="  0000  000   000"
            value={mobileNumber}
            onChangeText={handleMobileNumberChange}
            placeholderTextColor="white"
          />
          </View>
          <View style={{borderWidth:1,borderColor:'white',marginHorizontal:20}}></View>
          <Text style={{ color: 'white', fontSize:14, paddingHorizontal:25,marginBottom:30 }}>{errorMessage}</Text>
          <TouchableOpacity style={styles.loginButton} onPress={navigateToNextScreen}>
            <Text style={{textAlign:'center',color:'#0f214c'}}>Send OTP</Text>
            <Text style={{textAlign:'center',color:'#0f214c'}}>(One Time Password)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f214c',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#b2d1ff',
  },
  loginButton: {
    backgroundColor: '#b2d1ff',
    paddingHorizontal:10,
    paddingVertical:2,
    borderRadius:20,
    textAlign: 'center',
    marginHorizontal:20,
  },
  input:{
    color:'white'
  }
});

export default MobileScreen;
