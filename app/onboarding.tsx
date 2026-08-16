import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <View>
      <Link
        href={'/(tabs)'} asChild
        className="align-center items-center mb-1 justify-center rounded p-4">
        <Text className="text-red-500 border-2 border-blue-500">
          Go to Home
        </Text>
      </Link>
      <Link
        href={'/'} asChild
        className="items-center justify-center rounded p-4"
      >
        <Text className="text-red-500 border-2 border-blue-500">
          Restart to Index
        </Text>
      </Link>

    </View>
  );
};
export default Onboarding;
