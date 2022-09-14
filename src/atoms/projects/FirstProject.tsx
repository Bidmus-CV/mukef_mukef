import Button from "../Button";

const FirstProject = ({
  text,
  img,
  desc,
  button,
}: {
  text: string;
  img: string;
  desc: string;
  button: string;
}) => {
  return (
    <div className="flex flex-col gap-8 max-w-[90rem]">
      <div className="first-section w-full">
        <img src={img} alt="" />
      </div>
      <div className="second-section">
        <div className="flex gap-[9rem] pb-[3rem]">
          <div className="text max-w-[49rem]">
            <h2 className="text-black1 text-2xl">{text}</h2>
            <p className="text-black2 text-xl pt-4">{desc}</p>
          </div>
          <div className="w-[16.375rem] pt-12">
            <Button
              customClasses="bg-whitee text-primary border-primary rounded-[5px]"
              outline={true}
            >
              {button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProject;
