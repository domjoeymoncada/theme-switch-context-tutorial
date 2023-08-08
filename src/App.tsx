import { Row, Col, Checkbox, Typography } from "antd";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import { CurrentUserContext, ThemeContext } from "./contexts";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Row align="middle" justify="space-evenly">
      <Col span={14}>
        <ThemeContext.Provider value={theme}>
          <Typography.Title level={2}>Context Hook Sample</Typography.Title>
          <CurrentUserContext.Provider
            value={{
              currentUser,
              setCurrentUser,
            }}
          >
            <LoginForm />
          </CurrentUserContext.Provider>
        </ThemeContext.Provider>
        <Checkbox
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        >
          Use dark mode
        </Checkbox>
      </Col>
    </Row>
  );
};

export default App;
