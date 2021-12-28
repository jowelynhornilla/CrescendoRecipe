import { Modal } from "antd";
import { RecipeDetail } from "components";
import { FunctionComponent } from "react";
import { RecipeInterface } from "types";

interface RecipeDetailModalInterface {
  recipe?: RecipeInterface;
  isVisible?: boolean;
  handleCancel?: () => void;
}

export const RecipeDetailModal: FunctionComponent<RecipeDetailModalInterface> =
  (props) => {
    const { isVisible, recipe, handleCancel } = props;

    return (
      <Modal
        title={recipe?.title}
        visible={isVisible}
        width={1000}
        footer={null}
        onCancel={handleCancel}
        destroyOnClose
      >
        {recipe && <RecipeDetail recipe={recipe} />}
      </Modal>
    );
  };
