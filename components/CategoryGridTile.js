import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import ContainerWithShadow from "./ContainerWithShadow";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <ContainerWithShadow style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </ContainerWithShadow>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
