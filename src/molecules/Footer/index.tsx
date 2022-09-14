import News from "../../atoms/News";
import { newsData } from "../../data/NewsData";
import FooterLogo from "../../vectors/FooterLogo";
import "./Footer.scss";

const Footer = () => {
  const footerText = [
    ["Events", "Become Affiliate", "Go Unlimited", "Services"],
    ["News", "Business Stories", "Digital Store", "Learning", "Social Media"],
    [
      "Completed Projects",
      "Design Systems",
      "Theme & Templates",
      "Mockups",
      "Presentations",
      "Wireframes Kits",
      "UI Kits",
    ],
    ["Ongoing Projects", "License", "Refund Policy", "About Us", "Contacts"],
  ];
  return (
    <div className="footer">
      <div className="base-center">
        <div className="footer-wrap">
          <FooterLogo />
          <div className="footer-widgets ">
            {footerText.map((arrTexts, index) => (
              <div key={index} className="footer-text gap-y-4 flex flex-col">
                {arrTexts.map((arrText, indx) => (
                  <p
                    className={`${
                      indx === 0 ? "text-whitee" : "text-whiteSmoke"
                    } ${indx === 0 ? "text-2xl" : "text-xl"} ${
                      indx === 0 ? "font-medium" : "font-normal"
                    }`}
                    key={arrText}
                  >
                    {arrText}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="text-[whitesmoke] mx-[9.6875rem]" />
        <div className="social">
          <p>Copyright © 2020</p>
          <div className="images-wrap">
            <span className="circle">
              <img src="/vectors/facebook.svg" alt="facebook-logo" />
            </span>
            <span className="circle">
              <img src="/vectors/insta.svg" alt="facebook-logo" />
            </span>
            <span className="circle">
              <img src="/vectors/twitter.svg" alt="facebook-logo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
