import FirstAbout from "../../../atoms/About/About";
import SecondAbout from "../../../atoms/About/SecondAbout";
import Button from "../../../atoms/Button";
import { FirstData, secondData, thirdData } from "../../../data/AboutData";
import { rightCard2 } from "../../../data/NewsData";
import PageLayout from "../../../templates/PageLayout";
import "./About.scss";

const About = () => {
  return (
    <PageLayout>
      <>
        <div className="about-bg">
          <h2 className="text-white max-w-[43.5rem] pl-[8.625rem] pt-[10rem] text-5xl">
            About Mukef
          </h2>
          <div className="button-holder pl-[8.625rem] flex gap-10 pt-10">
            <div className="w-[16.375rem]">
              <Button customClasses="text-whitee border-whitee" outline={true}>
                Make an instant donation
              </Button>
            </div>
            <div className="w-[16.375rem] ">
              <Button customClasses="bg-whitee rounded-[5px]" outline={true}>
                Join us
              </Button>
            </div>
          </div>
          <div className="right-wrap">
            {rightCard2.map((card, indx) => (
              <div className="right" key={indx}>
                <div className="top">
                  <h3 className="font-bold text-2xl">{card.title}</h3>
                  <p className="text-lg pt-4">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="main">
          <div className="top-tier">
            {FirstData.map((d, i) => (
              <FirstAbout
                desc={d.description}
                title={d.title}
                img={d.image}
                key={i}
              />
            ))}
          </div>
          <div className="second-tier pt-[7.625rem]">
            <h2 className="text-5xl text-black1">Meet our executives</h2>
            <div className="flex items-center text-center py-[6rem] gap-[6.5rem] justify-center">
              {secondData.map((d, i) => (
                <SecondAbout
                  desc={d.text}
                  img={d.image}
                  title={d.title}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className="third-tier grid gap-[3rem] pb-[5.25rem] grid-cols-4 max-w-[85rem] place-items-center">
            {thirdData.map((d, i) => (
              <div
                key={i}
                className="flex flex-col text-center justify-center  items-center"
              >
                <div className="w-[16rem] h-[16rem]">
                  <img src={d.image} alt="" />
                </div>{" "}
                <div>
                  <h2 className="text-black1 font-medium">{d.title}</h2>
                  <p className="max-w-[20rem] text-black2 font-normal text-sm ">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </PageLayout>
  );
};

export default About;
