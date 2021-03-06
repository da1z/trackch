import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(
    AuthContext
  );

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for TrackerCh"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup({ email, password })}
      ></AuthForm>
      <NavLink
        text="Already have an account? Sign in!"
        routeName="Signin"
      ></NavLink>
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});
export default SignupScreen;
