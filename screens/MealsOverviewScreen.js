import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const category = route.params.categoryId;
  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(category) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
