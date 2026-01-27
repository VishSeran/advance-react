import "./Styles.css";
import { useTheme } from "../ThemeContext";
import { useCallback } from "react";

const Switch = () => {
  const { theme } = useTheme();
  return (
    <label className="switch">
      <input onChange = {useCallback}
        type="checkbox"
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
