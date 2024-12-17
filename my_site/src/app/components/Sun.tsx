import "@/app/css/sun.css";

const Sun = () => {
  return (
    <div className="sun-container">
      <div className="sun"></div>
      <div className="blue-fill"></div>
      <div className="rays-container">
        <div className="rays ray1"></div>
        <div className="rays ray2"></div>
        <div className="rays ray3"></div>
        <div className="rays ray4"></div>
        <div className="rays ray5"></div>
        <div className="rays blue-rays ray6"></div>
        <div className="rays blue-rays ray7"></div>
        <div className="rays blue-rays ray8"></div>
        <div className="rays blue-rays ray9"></div>
        <div className="rays blue-rays ray10"></div>
      </div>
    </div>
  );
};

export default Sun;
