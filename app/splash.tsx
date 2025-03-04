import { View, Text, Image, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowBigRight, ArrowBigRightDash, ArrowBigRightIcon } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Newdym Engineering',
    description: 'Engineering solutions that push technological boundaries.',
    image: require('./assets/images/engineering.png')
  },
  {
    id: '2',
    title: 'Newdym Design',
    description: 'Crafting modern, functional, and aesthetic design solutions.',
    image: require('./assets/images/design.png')
  },
  {
    id: '3',
    title: 'Newdym Architecture',
    description: 'Transforming spaces with sustainable and innovative architecture.',
    image: require('./assets/images/architecture.png')
  },
  {
    id: '4',
    title: 'Trainings',
    description: 'Upskilling professionals with hands-on, industry-relevant training.',
    image: require('./assets/images/training.png')
  }
];

export default function OnboardingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  const onViewRef = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#59AFFF', alignItems: 'center' }}> 
        <View style={{ alignItems: 'center', justifyContent: 'center', top: height * -0.28 }} className="absolute w-[900px] h-[900px] bg-white rounded-full"/>
        <View className="flex-1">
        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <View style={{ width, alignItems: 'center', justifyContent: 'center', top: height * -0.1 }}>
              <Image source={item.image} style={{ width: width * 0.8, height: height * 0.5, resizeMode: 'contain' }} />
              <Text className="text-2xl font-bold text-blue-600">{item.title}</Text>
              <Text className="text-lg text-gray-500 mt-2 text-center px-6">{item.description}</Text>
            </View>
          )}
        />

        {/* Navigation Buttons */}
        <View 
  className={`absolute bottom-10 left-0 right-0 px-8 flex-row ${
    currentIndex === slides.length - 1 ? 'justify-center' : 'justify-between'
  } items-center`}
>
  {/* Skip Button */}
  {currentIndex === slides.length - 1 ? null : (
    <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
      <View className="bg-purple-800 px-6 py-3 rounded-full shadow-md shadow-black border border-purple-600">
        <Text className="text-white text-lg font-semibold tracking-wider">Skip</Text>
      </View>
    </TouchableOpacity>
  )}

  {/* Next or Home Button */}
  {currentIndex === slides.length - 1 ? (
    <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
      <View className="bg-purple-800 flex-row justify-center px-6 py-3 rounded-full shadow-md shadow-black border border-purple-600">
        <Text className="text-white text-lg font-semibold tracking-wider">Home</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity 
      onPress={handleNext} 
      className="bg-purple-800 p-4 rounded-full shadow-md shadow-black border border-purple-600"
    >
      <ArrowBigRightDash size={40} color="white" strokeWidth={2.5} />
    </TouchableOpacity>
  )}
</View>


      </View>
    </GestureHandlerRootView>
  );
}
