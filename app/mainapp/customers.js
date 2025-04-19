import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/customers?page=1&limit=5')
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Customers</Text>
      {customers.map(customer => (
        <Link key={customer.code} href={`/mainapp/customer/${customer.code}`}>
          <Text>{customer.name}</Text>
        </Link>
      ))}
    </View>
  );
}