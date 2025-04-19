import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CustomerDetail() {
  const { code } = useLocalSearchParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/customers/${code}`)
      .then(res => res.json())
      .then(data => setCustomer(data))
      .catch(err => console.error(err));
  }, [code]);

  if (!customer) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>{customer.name}</Text>
      <Text>{customer.email}</Text>
      <Text>{customer.phoneNumber}</Text>
    </View>
  );
}