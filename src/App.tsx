import { Row, Col, Checkbox, Typography } from "antd";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Row align="middle" justify="space-evenly">
      <Col span={14}>
        <Typography.Title level={2}>Context Hook Sample</Typography.Title>
        <LoginForm />
        <Checkbox>Use dark mode</Checkbox>
      </Col>
    </Row>
  );
};

export default App;
