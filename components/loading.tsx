import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

interface LoadingProps {
  redirectTo?: string; // Optional redirection
  delay?: number; // Optional delay in milliseconds
}

export default function Loading({ redirectTo = '', delay = 3000 }: LoadingProps) {
  const router = useRouter();

  useEffect(() => {
    if (redirectTo) {
      const timeout = setTimeout(() => {
        router.replace(redirectTo);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [redirectTo, delay, router]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <ActivityIndicator size="large" color="#00bcd4" />
      <Text className="text-lg text-blue-500 mt-4">Loading...</Text>
    </View>
  );
}
