import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';
import { LOGO5 } from '../../../assets/images/';

export default function loginView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loginFormContainer}>

        <View style={styles.logoContainer}>
          <Image source={LOGO5} resizeMode="contain" style={{ width: 160, height: 50 }} />
        </View>

        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <View style={styles.inputContainer}>
            <Input
              name="email"
              labelText="email"
              email={true}
              placeholder="Email"
              onChangeText={email => props.onTextChange(email, 'email')}
              onSubmitHandler={props.onLogin}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input 
              name="password"
              labelText="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => props.onTextChange(password, 'password')}
              onSubmitHandler={props.onLogin}
            />
          </View> 
          {/* <View>
            {showError()}
          </View> */}
        </View>

        <View>
          <TouchableOpacity  
            style={styles.button}
            onPress={props.onLogin}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
          {/* <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Text>or</Text>
          </View>
          {facebookOrSpinner()} */}
        </View>


      </View>
    </View>
  );
}
