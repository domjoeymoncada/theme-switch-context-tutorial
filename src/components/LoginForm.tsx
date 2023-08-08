import { Button } from "antd";
import InputFieldGroup from "./InputFieldGroup";

const LoginForm = () => {
  return (
    <div
      style={{
        border: "1px solid #333333",
        padding: 10,
        borderRadius: 5,
        marginBottom: 8,
      }}
    >
      <InputFieldGroup />
      <Button>Log in</Button>
    </div>
  );
};

export default LoginForm;
