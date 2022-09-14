import AgasImg from "../vectors/AgasImg";

const AgasBox = () => {
  return (
    <div className="flex items-center w-[98%] mt-6 rounded-xl gap-4 border border-solid border-gray2">
      <div className="image-wrapper pl-7 py-4">
        <AgasImg />
      </div>
      <div className="description text-center">
        <h3 className="text-black font-medium text-sm">
          Prof. Abdul-Ganiyy Oladosu (AGAS) OON
        </h3>
        <p className="text-black2 font-semibold text-xs">
          Chief Imam of University of Ilorin
        </p>
      </div>
    </div>
  );
};

export default AgasBox;
