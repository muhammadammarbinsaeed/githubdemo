import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './src/components/header';
// import About from './components/About'; // Use in merge scenario

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* Uncomment this during merge demo */}
      {/* <About /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default App;
