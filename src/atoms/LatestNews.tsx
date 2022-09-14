import Button from "./Button";

const LatestNews = ({
  title,
  text,
  img,
  desc,
  button,
}: {
  title: string;
  text: string;
  img: string;
  desc: string;
  button: string;
}) => {
  return (
    <div className="flex justify-center gap-8">
      <div className="first-section">
        <img src={img} alt="" width={716} />
      </div>
      <div className="second-section max-w-[37.875rem] flex flex-col gap-8">
        <div>
          <p className="pb-4 text-black2">{text}</p>
          <h2 className="text-black1 text-2xl">{title}</h2>
        </div>
        <p className="text-black2 text-xl">{desc}</p>
        <div className="w-[11.375rem] pt-[4.5rem]">
          <Button
            customClasses="bg-whitee text-primary border-primary rounded-[5px]"
            outline={true}
          >
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
