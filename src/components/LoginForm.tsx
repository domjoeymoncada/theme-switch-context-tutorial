import { useContext, useState } from "react";
import { Button, Typography } from "antd";
import InputFieldGroup from "./InputFieldGroup";
import {
  CurrentUserContext,
  CurrentUserContextType,
  ThemeContext,
} from "../contexts";

const LoginForm = () => {
  const theme = useContext(ThemeContext);
  const { currentUser, setCurrentUser } = useContext(
    CurrentUserContext
  ) as CurrentUserContextType;

  const [firstName, setFirstName] = useState<string | null>("");
  const [lastName, setLastName] = useState<string | null>("");
  const isDarkTheme = theme === "dark";
  const backgroundColor = isDarkTheme ? "#333333" : undefined;
  const color = isDarkTheme ? "white" : undefined;

  return (
    <div
      style={{
        border: "1px solid #333333",
        padding: 10,
        borderRadius: 5,
        marginBottom: 8,
        backgroundColor,
      }}
    >
      {currentUser ? (
        <Typography.Text
          style={{ color }}
        >{`Logged in as ${currentUser}`}</Typography.Text>
      ) : (
        <>
          <InputFieldGroup
            handleSetFirstName={setFirstName}
            handleSetLastName={setLastName}
          />
          <Button
            style={{ backgroundColor }}
            onClick={() => setCurrentUser(`${firstName} ${lastName}`)}
          >
            <Typography.Text style={{ color }}>Log in</Typography.Text>
          </Button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
