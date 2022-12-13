import { useNavigate } from "react-router-dom";

const Back = () => {
  const nav = useNavigate();

  const handleBack = () => {
    nav("/");
  };

  return (
    <div className="btn-container">
      <button onClick={handleBack} className="back-btn">
        Back
      </button>
    </div>
  );
};
export default Back;
