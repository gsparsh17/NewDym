import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import '../global.css'

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/landing'); // ✅ Force app to start from loading.tsx
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" />
      <Stack.Screen name="splash" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
