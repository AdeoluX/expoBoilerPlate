import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Signup() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>
      <Link href="/authentication/login" asChild>
        <Button title="Back to Login" />
      </Link>
      <Link href="/mainapp/home" asChild>
        <Button title="Skip to Main App" />
      </Link>
    </View>
  );
}