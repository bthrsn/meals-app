import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }

  return (
    <FlatList
      style={styles.mainScreen}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  mainScreen: {
    // backgroundColor: "#24180f",
  },
});
