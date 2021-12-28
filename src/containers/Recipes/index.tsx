import { Avatar, Button, Layout, List } from "antd";
import { recipeApi } from "api";
import { FunctionComponent, useEffect, useState } from "react";
import { RecipeInterface } from "types";
import { RecipeDetailModal } from "./components/RecipeModal";

const { Header, Content } = Layout;

export const Recipes: FunctionComponent = () => {
  const [recipes, setRecipes] = useState<Array<RecipeInterface>>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeInterface>();

  const [isModalVisible, setIsModalVisible] = useState<boolean>();

  useEffect(() => {
    recipeApi.getRecipes().then((response) => setRecipes(response));
  }, []);

  const handleViewRecipe = (recipe: RecipeInterface) => {
    recipeApi.getSpecials(recipe.uuid).then((specials) => {
      const ingredients = recipe?.ingredients?.map((ingredient) => ({
        ...ingredient,
        specials: specials?.filter(
          (special) => special.ingredientId === ingredient.uuid
        ),
      }));
      const recipeWithSpecials: RecipeInterface = {
        ...recipe,
        ingredients,
      };
      setSelectedRecipe(recipeWithSpecials);
      showModal();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Layout>
      <Header>My Recipe</Header>
      <Content>
        <List
          itemLayout="horizontal"
          dataSource={recipes}
          renderItem={(recipe: RecipeInterface) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={recipe.images?.small} />}
                description={recipe.description}
                title={
                  <Button
                    type="link"
                    onClick={() => {
                      handleViewRecipe(recipe);
                    }}
                  >
                    {recipe.title}
                  </Button>
                }
              />
            </List.Item>
          )}
        />
        <RecipeDetailModal
          recipe={selectedRecipe}
          isVisible={isModalVisible}
          handleCancel={handleCancel}
        />
      </Content>
    </Layout>
  );
};
