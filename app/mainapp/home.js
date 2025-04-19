import { View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}