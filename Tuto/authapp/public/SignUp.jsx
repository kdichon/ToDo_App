import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {theme} from '../../tutoStyles';

const SignUp = ({navigation}) => {
  const [firstname, setFirstName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const goto = () => {
    navigation.navigate('Login');
  };

  const Register = () => {
    console.log('Envoi du Register');
  };

  return (
    <ScrollView>
      <View>
        <Text>Create Account</Text>
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={firstname.value}
          onChangeText={text => setFirstName({value: text, error: ''})}
          error={!!firstname.error}
          errorText={firstname.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          loading={loading}
          mode="contained"
          onPress={Register}
          style={{marginTop: 24}}>
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* <Toast message={error} onDismiss={() => setError('')} /> */}
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
