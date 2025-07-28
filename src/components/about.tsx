import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This app helps you learn Git in React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fafafa',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default About;
