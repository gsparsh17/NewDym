import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function LandingPage() {
  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#59AFFF', alignItems: 'center' }}> 
    <View style={{ alignItems: 'center', justifyContent: 'center', top: height * -0.28 }} className="absolute w-[900px] h-[900px] bg-white rounded-full"/>
                <View style={{ width, alignItems: 'center', justifyContent: 'center' }} className='mt-48'>
                  <Image source={require('./assets/images/logo.png')} style={{ width: 300, height: 320, resizeMode: 'center' }} />
                  <Text className="text-4xl font-bold text-purple-800 -mt-20">Newdym Global R&D</Text>
                  <Text className="text-lg text-gray-500 mt-2 text-center px-6">Innovate. Engineer. Design. Build.</Text>
                </View>
            <View className="flex-row justify-center px-8">
                <TouchableOpacity onPress={() => router.replace('/splash')} activeOpacity={0.8}>
                <View className="bg-purple-800 px-8 py-4 rounded-full mt-64 shadow-md shadow-black border border-purple-600">
                <Text className="text-white text-lg font-semibold tracking-wider">Get Started</Text>
                </View>
                </TouchableOpacity>

            </View>
          </GestureHandlerRootView>
  );
}
