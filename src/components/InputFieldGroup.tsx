import { Row, Col, Input, Typography } from "antd";

const InputFieldGroup = () => {
  return (
    <Row style={{ marginBottom: 24 }}>
      <Col span={12}>
        <Row style={{ marginBottom: 12 }}>
          <Typography.Text>First name:</Typography.Text>
          <Input placeholder="First name..." />
        </Row>
        <Row>
          <Typography.Text>Last name:</Typography.Text>
          <Input placeholder="Last name..." />
        </Row>
      </Col>
    </Row>
  );
};

export default InputFieldGroup;
