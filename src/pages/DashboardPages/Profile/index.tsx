import Button from "../../../atoms/Button";
import AgasBox from "../../../molecules/AgasBox";
import DashboardLayout from "../../../templates/DashboardLayout";
import "./Profile.scss";
import ProjectHistoryTable from "../../../molecules/tables/SupportHistoryTable";
import DonationHistoryTable from "../../../molecules/tables/DonationHistoryTable";

const Profile = () => {
  const personalInfoList = [
    {
      title: "Title",
      value: "Professor",
    },
    {
      title: "Full Name",
      value: "Abdul-Ganiyy Oladosu AGAS OON",
    },
    {
      title: "Email",
      value: "profagas@gmail.com",
    },
    {
      title: "Phone Number",
      value: "080123456789",
    },
    {
      title: "Phone Number 2",
      value: "080123456780",
    },
    {
      title: "Home Address",
      value: "No 32 Sheikh Ganiyy Street GRA Ilorin",
    },
    {
      title: "State",
      value: "Kwara",
    },
    {
      title: "Nationality",
      value: "Nigeria",
    },
    {
      title: "Favourite quote",
      value: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
    },
  ];

  return (
    <DashboardLayout>
      <AgasBox />
      <div className="personal-info">
        <h3 className="">Personal Information</h3>
        <hr />
        <div className="wrapper">
          {personalInfoList.map(({ title, value }) => (
            <div className="personal-info-field">
              <span className=" text-[#858585]">{title}</span>
              <span className="ml-4 text-[#222222] text-lg">{value}</span>
            </div>
          ))}
        </div>
        <div className="button w-[13.5575rem]">
          <Button customClasses="bg-primary text-whitee rounded-md font-medium">
            Edit
          </Button>
        </div>
      </div>

      <div className="project-history">
        <h3>Project support history</h3>
        <hr />
        <div className="mt-[2.8rem]">
          <ProjectHistoryTable />
        </div>
        <div className=" mt-6 flex justify-end w-full">
          <Button customClasses="bg-primary w-[13.5575rem] text-whitee rounded-md font-medium">
            Support a Project
          </Button>
        </div>
      </div>
      <div className="project-history">
        <h3>Donation history</h3>
        <hr />
        <DonationHistoryTable />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
