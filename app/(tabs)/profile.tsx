import { View, Text, Image, TouchableOpacity } from "react-native";
import { PencilIcon } from "react-native-heroicons/outline";

const Profile = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Profile Card */}
      <View className="p-6 rounded-b-xl shadow-lg shadow-black items-center" style={{
    backgroundColor: "#59AFFF",
  }}>
        <Image
          source={require('../assets/images/user (1).png')} // Replace with actual user image URL
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-2xl font-bold mt-3">Eman Elsayed</Text>
        <Text className="text-gray-600">eman.elsayed@example.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity className="mt-4 bg-purple-800 p-3 rounded-full flex-row items-center">
          <PencilIcon size={18} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View className="m-4 mt-6 bg-white p-4 rounded-lg shadow-md">
        <Text className="text-lg font-semibold">Account Information</Text>
        <Text className="text-gray-500 mt-1">Phone: +123 456 7890</Text>
        <Text className="text-gray-500">Location: Cairo, Egypt</Text>
      </View>
    </View>
  );
};

export default Profile;
