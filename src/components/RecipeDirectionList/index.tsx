import { Steps } from "antd";
import { FunctionComponent } from "react";
import { DirectionInterface } from "../../types";

const { Step } = Steps;

interface RecipeDirectionListInterface {
  directions?: Array<DirectionInterface>;
}

export const RecipeDirectionList: FunctionComponent<RecipeDirectionListInterface> =
  (props) => {
    const { directions = [] } = props;
    return (
      <Steps progressDot direction="vertical" current={directions?.length}>
        {directions?.map((direction, index) => (
          <Step
            title={`Step ${index + 1} ${
              direction?.optional ? "(optional)" : ""
            }`}
            description={direction.instructions}
          />
        ))}
      </Steps>
    );
  };
