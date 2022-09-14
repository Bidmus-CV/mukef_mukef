const SecondAbout = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) => {
  return (
    <div className="">
      <img src={img} alt="" />
      <div>
        <h2 className="text-black1 text-xl font-medium">{title}</h2>
        <p className="max-w-[30rem] text-black2 font-normal text-sm ">{desc}</p>
      </div>
    </div>
  );
};

export default SecondAbout;
