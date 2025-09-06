import { useTheme } from "../context/theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // ✅ Correct arrow function
  const coChangeBtn = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      onClick={coChangeBtn}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeBtn;
