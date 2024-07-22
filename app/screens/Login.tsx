import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {EmailIcon} from '../assets/icons/svg/EmailIcon';
import {FacebookIcon} from '../assets/icons/svg/FacebookIcon';
import {PasswordIcon} from '../assets/icons/svg/PasswordIcon';
import {Divider} from '../components/Layout';
import {TextInput} from '../components/TextInput';
import {Typography} from '../components/Typography';
import {useTheme} from '../contexts/ThemeContext';

import {styles} from './Login.style';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../slice/LoginSlice';

const LoginScreen: React.FC = () => {
  const {theme} = useTheme();

  const themedStyles = styles(theme);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  console.log('state', state);
  

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.topSection}>
        <Typography variant="Text_Large_regular">Hey there,</Typography>
        <Typography variant="Title_H4_bold" style={themedStyles.welcomeText}>
          Welcome Back
        </Typography>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          icon={<EmailIcon />}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          icon={<PasswordIcon />}
        />
        <TouchableOpacity>
          <Typography variant="Link_Small">Forgot password?</Typography>
        </TouchableOpacity>
      </View>
      <View style={themedStyles.bottomSection}>
        <TouchableOpacity style={themedStyles.loginButton} onPress={() => {
           dispatch(postLogin());
        }}>
          <Text style={themedStyles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={themedStyles.socialButtons}>
          <Divider />

          <Typography variant="Text_Small_regular">or</Typography>
          <Divider />
        </View>
        <View style={themedStyles.socialButtons}>
          <TouchableOpacity style={themedStyles.socialButton}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/icons/GoggleIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={themedStyles.socialButton}>
            <FacebookIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={themedStyles.registerContainer}>
          <Typography variant="Text_Medium_regular">
            Don't have an account?
            <Typography
              variant="Text_Medium_medium"
              style={themedStyles.registerText}>
              Register
            </Typography>
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
