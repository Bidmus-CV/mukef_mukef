import Button from "../../../atoms/Button";
import PageLayout from "../../../templates/PageLayout";
import "./Home.scss";
import { leftCard, rightCard } from "../../../data/HomeData";
import News from "../../../atoms/News";
import homeNewsData from "../../../data/HomeNewsData";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="home-wrapper">
        <div className="house-bg">
          <h2 className="text-white max-w-[43.5rem] text-5xl text-center">
            Muhammad Kamalud-Deen Education Foundation
          </h2>
          <div className="button-holder flex gap-10 pt-10">
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
          <section className="bottom-cards">
            {leftCard.map((card, indx) => (
              <div className="left" key={indx}>
                <div className="top flex flex-col items-center gap-3">
                  <img src={card.image} alt="" />
                  <img src={card.image2} alt="" />
                </div>
                <h3 className="text-black1 text-2xl font-medium">
                  {card.title}
                </h3>
                <p className="max-w-[30rem] text-black2 font-normal text-xl">
                  {card.text}
                </p>
              </div>
            ))}
            <div className="right-wrap">
              {rightCard.map((card, indx) => (
                <div className="right" key={indx}>
                  <div className="top">
                    <h3 className="font-bold text-2xl pb-6">{card.title}</h3>
                    <p className="text-xl">{card.text}</p>
                  </div>
                  <div className="w-[16.375rem] ">
                    <Button
                      customClasses="bg-whitee text-primary rounded-[5px]"
                      outline={true}
                    >
                      {card.buttonText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="main-page">
          <h1 className="text-[2rem] text-black1 font-medium pb-6 pr-[66rem]">
            Top News
          </h1>
          <div className="news-wrap">
            {homeNewsData.map((n, i) => (
              <News title={n.title} img={n.image} desc={n.desc} key={i} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
