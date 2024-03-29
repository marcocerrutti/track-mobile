import React,{useState, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer>
                <Button title="Sign Up"
                onPress={()=>signup({email, password})}
                />
            </Spacer>
        </View>
    );
};


SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
   } 
})
 
export default SignupScreen;