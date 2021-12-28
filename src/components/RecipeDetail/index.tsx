import { Col, Image, Row, Statistic, Tabs } from "antd";
import { IngredientsTable } from "components";
import { FunctionComponent } from "react";
import { RecipeInterface, SpecialInterface } from "../../types";
import { RecipeDirectionList } from "../RecipeDirectionList";
import "./styles.scss";

const { TabPane } = Tabs;

interface RecipeDetailInterface {
  recipe: RecipeInterface;
}

export const RecipeDetail: FunctionComponent<RecipeDetailInterface> = (
  props
) => {
  const { recipe } = props;
  return (
    <>
      <Row gutter={16} className="recipe-detail-container">
        <Col span={9}>
          <Image src={recipe.images?.full} />
          <Row className="additional-info">
            <Col span={8}>
              <Statistic title="Servings" value={recipe.servings} />
            </Col>
            <Col span={8}>
              <Statistic title="Cook Time" value={recipe.cookTime} />
            </Col>
            <Col span={8}>
              <Statistic title="Prep Time" value={recipe.prepTime} />
            </Col>
          </Row>
        </Col>
        <Col span={15}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Ingredients" key="1">
              <div className="ingredients-container">
                <IngredientsTable ingredients={recipe?.ingredients} />
              </div>
            </TabPane>
            <TabPane tab="Directions" key="2">
              <div className="directions-container">
                <RecipeDirectionList directions={recipe.directions} />
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
