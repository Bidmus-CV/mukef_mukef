import FirstProject from "../../../atoms/projects/FirstProject";
import { projectData1 } from "../../../data/ProjectData";
import AgasBox from "../../../molecules/AgasBox";
import DashboardLayout from "../../../organisms/DashboardLayout";
import "./Support.scss";

const Support = () => {
  return (
    <DashboardLayout>
      <AgasBox />
      <div className="ongoing-projects">
        <h3>Ongoing projects</h3>
        <hr />
      </div>
      <div className="project-wrap">
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
    </DashboardLayout>
  );
};

export default Support;
