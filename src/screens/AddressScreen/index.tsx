// Must to do Validation in future

import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import countryList from 'country-list';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'android' ? '10' : '0'}
      keyboardVerticalOffset={Platform.OS === 'android' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={styles.picker}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Full name (First name and last name)</Text>
          <TextInput
            placeholder={'Full name'}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder={'Phone'}
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder={'Address'}
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder={'City'}
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button title="Checkout" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
