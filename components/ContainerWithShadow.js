import { View, StyleSheet } from "react-native";

function ContainerWithShadow({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

export default ContainerWithShadow;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
