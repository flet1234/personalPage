import "@/app/css/sun.css";
import ThemeSwitcher from "./ThemeSwitcher";

const Sun = () => {
  return (
    <div className="sun-container">
      <div className="sun bg-background dark:bg-slate-300"></div>
      <div className="blue-fill">
        <ThemeSwitcher />
      </div>
      <div className="rays-container">
        <div className="rays ray1"></div>
        <div className="rays ray2"></div>
        <div className="rays ray3"></div>
        <div className="rays ray4"></div>
        <div className="rays ray5"></div>
      </div>
    </div>
  );
};

export default Sun;
