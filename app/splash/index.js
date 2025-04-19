import { View } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function Splash() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(
        isLoggedIn ? '/mainapp/home' : '/authentication/get-started'
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  return <View style={{ flex: 1 }} />;
}