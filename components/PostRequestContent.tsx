import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function PostRequestContent() {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
        Post a Load
      </Text>
      <TextInput
        placeholder="Enter Material Name"
        placeholderTextColor={"#439D25"}
        cursorColor={"#439D25"}
        style={{
          borderWidth: 1,
          borderColor: "#439D25",
          outlineColor:'#439D25',
          borderRadius: 10,
          padding: 10,
          marginBottom: 15,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#439D25",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
}
