import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-red-100">
      <Text className="text-2xl font-bold text-red-500">Page Not Found ❌</Text>
    </View>
  );
}
