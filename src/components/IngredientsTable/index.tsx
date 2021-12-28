import { Badge, Table, Typography } from "antd";
import { SpecialBadgeColorMap } from "constant";
import _ from "lodash";
import { FunctionComponent } from "react";
import { IngredientInterface, SpecialInterface } from "types";

const { Text } = Typography;

interface IngredientsTableInterface {
  ingredients?: Array<IngredientInterface>;
}

export const IngredientsTable: FunctionComponent<IngredientsTableInterface> = (
  props
) => {
  const { ingredients = [] } = props;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Measurement",
      dataIndex: "measurement",
      key: "measurement",
    },
    {
      title: "Specials",
      dataIndex: "specials",
      key: "specials",
      render: (specials: Array<SpecialInterface>) => {
        return (
          <>
            {Boolean(specials?.length) && (
              <>
                {specials?.map((special) => (
                  <>
                    <Badge.Ribbon
                      color={SpecialBadgeColorMap.get(special.type)}
                      text={_.upperFirst(special.type)}
                    >
                      <Text strong>{special.title}</Text>
                      <p>{special.text}</p>
                    </Badge.Ribbon>
                  </>
                ))}
              </>
            )}
          </>
        );
      },
    },
  ];

  return (
    <Table
      size="small"
      dataSource={ingredients}
      columns={columns}
      pagination={false}
    />
  );
};
