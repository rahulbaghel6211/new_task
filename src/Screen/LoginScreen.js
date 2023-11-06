import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from "../Image/onboarding.png";
import LoginImage from '../Image/login.png';

const LoginScreen = ({ navigation }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Use setTimeout to show the welcome message for 2-3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  const handleLogin = () => {
    // Handle login logic here and navigate to the appropriate screen
    navigation.navigate('Mobile');
  };

  return (
    <View style={styles.container}>
      {showWelcome && (
        <View style={styles.welcomeContainer}>
          <Image source={Onboarding} style={styles.welcomeImage} />
        </View>
      )}

      {!showWelcome && (
        <View>
          <Image source={LoginImage} style={styles.welcomeImage} />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginButton}>Log in With Mobile Number</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0f214c',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: 290, // Set the width and height as per your image dimensions
    height: 380,
  },
  loginButton: {
    backgroundColor: '#b2d1ff',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
