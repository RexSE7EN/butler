import { Redirect } from 'expo-router';
import {useState} from "react";
import {ActivityIndicator, Text, Button, Pressable, View} from "react-native";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color='#aeb5bd' />
        <View className="mxy-5">
          <Text className="text-primary text-lg font-sans-semibold">
            Is loading: {String(isLoading)}
          </Text>
          <Text className="text-primary text-lg font-sans-semibold">
            Is onboarded: {String(hasOnboarded)}
          </Text>
        </View>
        <Pressable
          className="bg-accent mt-7 active:opacity-80 h-12 rounded-2xl items-center justify-center px-6 flex-row"
          onPress={() => setHasOnboarded(!hasOnboarded)}
        >
          {
            <Text className="text-primary font-sans-semibold text-base">
              Change Onboarded Status
            </Text>
          }
        </Pressable>
        <Pressable
          className="bg-accent mt-2 active:opacity-80 h-12 rounded-2xl items-center justify-center px-6 flex-row"
          onPress={() => setIsLoading(false)}
        >
          {
            <Text className="text-primary font-sans-semibold text-base">
              Finish Loading Data
            </Text>
          }
        </Pressable>
      </View>
    );
  }

  if (!hasOnboarded) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(tabs)" />;
};
export default App;