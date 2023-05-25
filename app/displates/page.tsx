import DisplateForm from "./DisplateForm";
import DisplateSelection from "./DisplateSelection";

const DisplatePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DisplateSelection />
      <DisplateForm />
    </div>
  );
};

export default DisplatePage;
