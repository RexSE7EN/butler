import '@/global.css';
import { checkOnboarding, handleResetOnboarding } from '@/utils/onboarding';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      // await handleResetOnboarding();
      const hasOnboardedStatus = await checkOnboarding();
      setHasOnboarded(hasOnboardedStatus);
      setIsLoaded(true);
    };
    checkOnboardingStatus();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
      if (hasOnboarded) {
        router.replace('/(auth)/sign-in');
      }
    }
  }, [isLoaded, hasOnboarded, router]);

  if (!isLoaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );

}
