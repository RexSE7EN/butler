import * as SecureStore from 'expo-secure-store';

const ONBOARDING_KEY = 'has_onboarded';

export const checkOnboarding = async (): Promise<boolean> => {
 const hasOnboarded = await SecureStore.getItemAsync(ONBOARDING_KEY);
 return hasOnboarded === 'true';
};

export const completeOnboarding = async (): Promise<void> => {
 await SecureStore.setItemAsync(ONBOARDING_KEY, 'true');
};

export const handleResetOnboarding = async () => {
 await SecureStore.deleteItemAsync(ONBOARDING_KEY);
};