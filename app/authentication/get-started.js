import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function GetStarted() {
  // Handler for the "Get started" button
  const handleGetStarted = () => {
    // Replace this with your desired action
    console.log('Get started button pressed');
    // Example: You can call a function to transition to another screen or state
    // e.g., onGetStarted();
  };

  return (
    <View style={styles.container}>
      {/* Airplane Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/03/10/03/airplane-309547_1280.png' }}
          style={styles.airplaneImage}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Experience Seamless{'\n'}Billings and Precision
        </Text>
        <Text style={styles.subheading}>Generate Send Save</Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  imageContainer: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  airplaneImage: {
    width: width * 0.8,
    height: height * 0.3,
  },
  textContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1A2525',
    textAlign: 'center',
    lineHeight: 48,
  },
  subheading: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4A2C2A',
    width: width * 0.9,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});