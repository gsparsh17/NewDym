import React from "react";
import { View, Text, Image } from "react-native";

const ServiceDetailsScreen = ({ route }) => {
  const { service } = route.params; // Get the service data from navigation

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <Image source={service.imageUrl} className="w-full h-60 rounded-lg mb-4" />
      <Text className="text-2xl font-bold text-gray-900">{service.title}</Text>
      <Text className="text-lg text-gray-500 mb-2">{service.category}</Text>
      <Text className="text-base text-gray-700">{service.description}</Text>
    </View>
  );
};

export default ServiceDetailsScreen;
