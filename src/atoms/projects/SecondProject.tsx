const SecondProject = ({
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
      <h2 className="text-black1 text-xl font-medium">{desc}</h2>
      <p className="max-w-[30rem] text-black2 font-normal">{title}</p>
    </div>
  );
};

export default SecondProject;
