import { Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "@/constants/Colors";

const CustomButton = (props) => {
  const filledBgColor = props.white || COLORS.white;
  const outLineColor = COLORS.blueman;
  const bgColor = props.filled ? filledBgColor : outLineColor;
  const textColor = props.filled ? COLORS.blueman : COLORS.white;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{ fontSize: 22, ...{ color: textColor }, fontWeight: "600" }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomButton;
