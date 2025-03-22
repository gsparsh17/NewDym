import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native"; 
import services from "../../data/Services"; // Import services data

const AddServiceScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // Get unique categories from services data
  const categories = ["All", ...new Set(services.map((service) => service.category))];

  // Filter services based on category and search term
  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "All" || service.category === selectedCategory) &&
      service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View
        className="mb-4 space-y-3 p-8 shadow-lg shadow-black"
        style={{ backgroundColor: "#59AFFF" }}
      >
        <Text
          className="text-purple-900 text-3xl mb-4"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Add a Service
        </Text>

        {/* Category Dropdown */}
        <View className="bg-white rounded-lg shadow-sm my-4">
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            className="text-lg"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        {/* Search Input */}
        <TextInput
          className="h-12 px-4 bg-white rounded-lg shadow-sm border border-gray-300"
          placeholder="Search services..."
          value={search}
          onChangeText={setSearch}
          style={{ fontFamily: "Poppins_400Regular" }}
        />
      </View>

      {/* Service List */}
      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white rounded-lg shadow-md p-4 mb-4 mx-4"
            onPress={() => navigation.navigate("ServiceDetails", { service: item })}
          >
            <Image source={item.imageUrl} className="w-full h-40 rounded-lg mb-3" />
            <Text
              className="text-lg text-gray-900"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              {item.title}
            </Text>
            <Text className="text-sm text-gray-500" style={{ fontFamily: "Poppins_400Regular" }}>
              {item.category}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AddServiceScreen;
