import { completeOnboarding } from "@/utils/onboarding";
import { useRouter } from "expo-router";
import {Button, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  const router = useRouter();

  const handleGetStarted = async () => {
    await completeOnboarding();
    router.replace("/(auth)/sign-in");
  };

  return(
    <SafeAreaView>
      <Text>Onboarding Screen</Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </SafeAreaView>
  );
};
export default Onboarding;