const FirstAbout = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) => {
  return (
    <div className="flex justify-between gap-[6.5rem]">
      <div className="display-flexy">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <h2 className="text-black1 text-xl font-medium">{title}</h2>
        <p className="max-w-[50rem] text-black2 font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default FirstAbout;
