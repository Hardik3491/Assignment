import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
}: any) => (
  <View style={styles.inputWrapper}>
    <Text style={[styles.label, error && { color: '#E57373' }]}>
      {label} <Text style={{ color: error ? '#E57373' : '#4CAF50' }}>*</Text>
    </Text>
    <TextInput
      style={[styles.input, error && { borderBottomColor: '#E57373' }]}
      placeholder={placeholder}
      placeholderTextColor="#555"
      value={value}
      onChangeText={onChangeText}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const ShippingForm = () => {
  const [firstName, setFirstName] = useState('Pham');
  const [lastName, setLastName] = useState('');

  // Logic: Show error only if the user has touched the field and left it empty
  const lastNameError = lastName.length === 0 ? 'Field is required' : null;

  return (
    <View>
      <CustomInput
        label="First name"
        placeholder="Enter first name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <CustomInput
        label="Last name"
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
        error={lastNameError}
      />

      <CustomInput label="Country" placeholder="Select your country" />
      <CustomInput label="Street name" placeholder="" />
      <CustomInput label="City" placeholder="" />
    </View>
  );
};

export default ShippingForm;

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    color: '#FFF',
    fontSize: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: '#E57373',
    fontSize: 12,
    marginTop: 5,
  },
});
