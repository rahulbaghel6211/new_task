import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']); // An array to store each digit of the OTP
  const otpInputs = Array(4).fill(0); // Create an array with 4 elements for refs
  const [errorMessage, setErrorMessage] = useState('');
  const firstInputRef = useRef(null); // Ref for the first OTP input

  const handleOtpChange = (index, text) => {
    // Remove any non-numeric characters from the input
    const cleanedText = text.replace(/\D/g, '');
    otp[index] = cleanedText;
    setOtp([...otp]);

    // Auto-focus the next input if there is a value
    if (cleanedText !== '' && index < 3) {
      otpInputs[index + 1].focus();
    }

    // Validate the OTP and set an error message if needed
    if (otp.join('').length === 4) {
      setErrorMessage('');
    } else {
      setErrorMessage('OTP must be 4 digits');
    }
  };

  const navigateToNextScreen = () => {
    if (otp.join('').length === 4) {
      // Navigate to the next screen if the OTP is valid
      navigation.navigate('User'); // Replace 'NextScreen' with the actual screen name
    } else {
      // Show an error message if the OTP is not valid
      setErrorMessage('OTP must be 4 digits');
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
          <Text style={{ paddingHorizontal: 25, paddingTop: 30, paddingBottom: 15, color: 'white' }}>OTP Verification</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {otpInputs.map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(index, text)}
                placeholder="0"
                maxLength={1}
                keyboardType="numeric"
                ref={(input) => {
                  otpInputs[index] = input;
                  if (index === 0) {
                    firstInputRef.current = input;
                  }
                }}
                onFocus={() => {
                  if (otp[index] === '') {
                    otpInputs[index].clear();
                  }
                }}
              />
            ))}
          </View>
          <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 25, marginBottom:15 }}>{errorMessage}</Text>
          <TouchableOpacity style={styles.loginButton} onPress={navigateToNextScreen}>
            <Text style={{ textAlign: 'center', color: '#0f214c' }}>Verify</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center',color:'white',marginTop:5}}>Didn't get otp?? Resend OTP</Text>
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
  otpInput: {
    width: 50,
    height: 50,
    fontSize: 24,
    backgroundColor:'white',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingTop:5,
    color:'#0f214c'
  },
  loginButton: {
    backgroundColor: '#b2d1ff',
    paddingHorizontal: 10,
    paddingVertical:10,
    borderRadius: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default OtpScreen;
