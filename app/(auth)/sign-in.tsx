import { useSignIn } from '@clerk/expo';
import { Link, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, Text, StyleSheet, TextInput, View } from 'react-native';

const SignIn = () => {
const { signIn } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [verifying, setVerifying] = useState(false);

  const handleSignIn = useCallback(async () => {
    try {
      const { error } = await signIn.password({ emailAddress, password })
      if (error) {
        console.error(JSON.stringify(error, null, 2))
        // Handle the error in your app.
        // See https://clerk.com/docs/guides/development/custom-flows/error-handling
        return
      }
      const result = signIn.status;

      if (result === 'complete') {
        await signIn.finalize({
          navigate: () => router.replace('../(root)')
        })
      } else if (result === 'needs_second_factor') {
        // For future https://clerk.com/docs/guides/development/custom-flows/authentication/multi-factor-authentication
      } else if (result === 'needs_client_trust') {
        const emailCodeFactor = signIn.supportedSecondFactors.find(
          (factor) => factor.strategy === 'email_code',
        )

        if (emailCodeFactor) {
          await signIn.mfa.sendEmailCode()
        }

        setVerifying(true)
      }else {
        // Check why the sign-in is not complete
        console.error('Sign-in attempt not complete:', signIn)
      }
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  }, [signIn, emailAddress, password, router]);

  const handleVerify = useCallback(async () => {
    try {
      await signIn.mfa.verifyEmailCode({ code });
      const result = signIn.status;

      if (result === 'complete') {
        await signIn.finalize({
          navigate: () => router.replace('/')
        });
      } else {
        console.error('Verify sign-in attempt not complete:', signIn)
      }
    } catch (error) {
      console.error('Verification Error:', error);
    }
  }, [signIn, code, router]);

  if (verifying && signIn.status === 'needs_client_trust') {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={code}
          placeholder="Enter verification code"
          onChangeText={setCode}
          keyboardType="numeric"
        />
        <Button title="Verify" onPress={handleVerify} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={emailAddress} 
        onChangeText={setEmailAddress} 
        placeholder="Enter Email" 
        autoCapitalize="none" />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        autoCorrect={false}
        spellCheck={false}
        autoCapitalize="none"
        textContentType="password"
        autoComplete="password"
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <View className="flex-row justify-center items-center">
        <Text className="text-gray-600">Don&apos;t have an account? </Text>
        <Link href="/sign-up">
          <Text className="text-blue-600 font-semibold">Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default SignIn;