import '@/global.css';
import { StatusBar } from 'expo-status-bar';
import {Link} from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Link href="/onboarding" className="p-4 h-full rounded items-center justify-center text-blue-500">
        Go to Onboarding
      </Link>
    </SafeAreaProvider>
  );
}

