import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      ></AuthForm>
      <NavLink
        text="Do not have an account? Sign Up!"
        routeName="Signup"
      ></NavLink>
    </View>
  );
};
SigninScreen.navigationOptions = () => {
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
export default SigninScreen;
