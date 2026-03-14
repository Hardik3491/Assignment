import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './components/schemas';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../navigation/navigationStrings';

const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = (data: any) => console.log('Form Data:', data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Create{'\n'}your account</Text>

        {/* Input Field Helper Component */}
        <InputField
          name="name"
          placeholder="Enter your name"
          control={control}
          error={errors.name?.message}
        />
        <InputField
          name="email"
          placeholder="Email address"
          control={control}
          error={errors.email?.message}
          keyboardType="email-address"
        />
        <InputField
          name="password"
          placeholder="Password"
          control={control}
          error={errors.password?.message}
          secureTextEntry
        />
        <InputField
          name="confirmPassword"
          placeholder="Confirm password"
          control={control}
          error={errors.confirmPassword?.message}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerLink}
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}
        >
          <Text style={styles.footerText}>
            Already have account? <Text style={styles.link}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Reusable Input Component
const InputField = ({ name, control, error, ...props }: any) => (
  <View style={styles.inputContainer}>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[styles.input, error && styles.inputError]}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholderTextColor="#888"
          {...props}
        />
      )}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { paddingHorizontal: 30, marginTop: 80 },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 40,
    lineHeight: 40,
  },
  inputContainer: { marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    color: '#FFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputError: { borderBottomColor: '#FF4D4D' },
  errorText: { color: '#FF4D4D', fontSize: 12, marginTop: 5 },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  footerLink: { marginTop: 90, alignItems: 'center' },
  footerText: { color: '#888', fontSize: 14 },
  link: { color: '#FFF', textDecorationLine: 'underline' },
});

export default SignUpScreen;
