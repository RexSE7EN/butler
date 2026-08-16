import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Onboarding = () => {
  return (
    <View>
      <Link
        href={'/(tabs)'}
        className="align-center h-full items-center justify-center rounded p-4 text-blue-500">
        Go to Home
      </Link>
    </View>
  );
};
export default Onboarding;
