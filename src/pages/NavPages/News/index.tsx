import Button from "../../../atoms/Button";
import LatestNews from "../../../atoms/LatestNews";
import { newsData, rightCard } from "../../../data/NewsData";
import PageLayout from "../../../templates/PageLayout";
import "./News.scss";

const News = () => {
  return (
    <PageLayout>
      <div className="news-wrapper">
        <div className="news-bg">
          <div className="first-text">
            <h2 className="text-[2rem]">Latest news & discussions</h2>
            <p>News, blog and Events shows here</p>
          </div>
          <div className="right-wrap">
            {rightCard.map((card, indx) => (
              <div className="right" key={indx}>
                <div className="top">
                  <h3 className="font-bold text-2xl">{card.title}</h3>
                  <p className="text-lg pt-4">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="main-page">
          <div className="wrapper">
            {newsData.map((d, i) => (
              <div
                className={`child-wrap ${i % 2 === 0 ? "" : "bg-gray1"} 
              ${d.image && "py-12"} `}
                key={i}
              >
                <LatestNews
                  img={d.image}
                  text={d.text}
                  title={d.title}
                  desc={d.description}
                  button={d.button}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default News;
