import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <Text>Hello World</Text>
    </SafeAreaProvider>
  );
}
