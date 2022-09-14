import Button from "../../../atoms/Button";
import News from "../../../atoms/News";
import FirstProject from "../../../atoms/projects/FirstProject";
import SecondProject from "../../../atoms/projects/SecondProject";
import {
  projectData1,
  projectData2,
  projectData3,
  rightCard,
} from "../../../data/ProjectData";
import PageLayout from "../../../organisms/PageLayout";
import "./Projects.scss";

const Projects = () => {
  return (
    <PageLayout>
      <div className="project-wrapper">
        <div className="project-bg">
          <div className="first-text">
            <h2 className="text-[3rem]">Our projects are from donations</h2>
            <p className="text-[1.5rem] pt-4">
              No amount is to small to support the good work
            </p>
          </div>
          <div className="right-wrap">
            {rightCard.map((card, indx) => (
              <div className="right" key={indx}>
                <div className="top">
                  <h3 className="font-bold text-2xl">{card.title}</h3>
                  <p className="text-lg pt-4">{card.text}</p>
                </div>
                <div className="w-[11.375rem] ">
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
        </div>
        <section className="main-page">
          <p className="first-text pr-[51rem] text-[2rem] pb-4">
            Top areas for our projects
          </p>
          <div className="project-wrap">
            {projectData2.map((p, i) => (
              <News img={p.image} title={p.title} desc={p.description} />
            ))}
          </div>
          <p className="pt-[5.3125rem] pr-[59rem] text-[2rem] pb-4">
            Ongoing projects
          </p>
          <div className="project-wrap2">
            {projectData1.map((p, i) => (
              <FirstProject
                key={i}
                img={p.image}
                desc={p.description}
                text={p.title}
                button={p.button}
              />
            ))}
          </div>
          <p className="pt-[5.3125rem] pr-[47rem] text-[2rem] pb-4">
            Some our completed projects
          </p>
          <div className="project-wrap pb-12">
            {projectData3.map((p, i) => (
              <SecondProject
                img={p.image}
                title={p.text}
                desc={p.description}
                key={i}
              />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Projects;
