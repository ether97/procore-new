import DisplateDisplay from "./DisplateDisplay";
import DisplateForm from "./DisplateForm";
import DisplateSelection from "./DisplateSelection";

const DisplatePage = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-center pt-[250px]
                    xl:px-10
        lg:px-5 
        md:px-5
        sm:px-5
        px-4
    "
    >
      <DisplateDisplay />
    </div>
  );
};

export default DisplatePage;
