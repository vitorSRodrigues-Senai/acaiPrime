import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
};

export default function CustomButton({ title, icon, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#8724b5",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    shadowColor: "#8724b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,
    flexDirection: "row",
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
});
