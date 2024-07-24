import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text style={styles.h3}>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 18, // This is an example size; adjust as needed
    fontWeight: 'bold',
  },
});
export default SignupScreen;
