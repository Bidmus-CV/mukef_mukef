const News = ({
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
      <h2 className="text-black1 text-2xl font-medium">{title}</h2>
      <p className="max-w-[30rem] text-black2 font-normal text-xl">{desc}</p>
    </div>
  );
};

export default News;
