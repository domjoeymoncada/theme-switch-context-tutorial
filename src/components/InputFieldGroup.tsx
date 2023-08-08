import { useContext } from "react";
import { Row, Col, Input, Typography } from "antd";
import { ThemeContext } from "../contexts";

type InputFieldGroupType = {
  handleSetFirstName: (value: string) => void;
  handleSetLastName: (value: string) => void;
};

const InputFieldGroup = ({
  handleSetFirstName,
  handleSetLastName,
}: InputFieldGroupType) => {
  const theme = useContext(ThemeContext);
  const color = theme === "dark" ? "white" : undefined;

  return (
    <Row style={{ marginBottom: 24 }}>
      <Col span={12}>
        <Row style={{ marginBottom: 12 }}>
          <Typography.Text
            style={{
              color,
            }}
          >
            First name:
          </Typography.Text>
          <Input
            placeholder="First name..."
            onChange={(e) => handleSetFirstName(e.target.value)}
          />
        </Row>
        <Row>
          <Typography.Text
            style={{
              color,
            }}
          >
            Last name:
          </Typography.Text>
          <Input
            placeholder="Last name..."
            onChange={(e) => handleSetLastName(e.target.value)}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default InputFieldGroup;
