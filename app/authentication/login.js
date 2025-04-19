import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'expo-router';

export default function Login() {
  const { login } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Link href="/authentication/signup" asChild>
        <Button title="Go to Signup" />
      </Link>
      <Link href="/mainapp/home" asChild>
        <Button title="Skip to Main App" />
      </Link>
      <Link href="/mainapp/home" asChild>
        <Button title="Skip to Main App" />
      </Link>
    </View>
  );
}