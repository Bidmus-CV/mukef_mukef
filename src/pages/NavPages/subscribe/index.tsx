import Button from "../../../atoms/Button";
import { rightCard3 } from "../../../data/NewsData";
import PageLayout from "../../../templates/PageLayout";
import "./SubscribeStyle.scss";

const Subscribe = () => {
  return (
    <PageLayout>
      <div className="subscribe-wrapper">
        <div className="subscribe-content-wrapper">
          <div className="join-us-container">
            <p className="title">JOIN US</p>
            <p className="description">
              We love catching up with our supporters and want to make speaking
              to us as easy as possible.
            </p>
            <div className="location-wrapper">
              {rightCard3.map((card, indx) => (
                <div className="right" key={indx}>
                  <h3 className="header">{card.title}</h3>
                  <div className="top">
                    <img src="/vectors/location.svg" width={28} alt="" />
                    <div className="card-text pt-10">
                      <p className="text-sm font-bold pb-4">
                        {card.description}
                      </p>
                      <p className="text-xs">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="create-account-wrapper">
            <div className="instant-donation">
              <div className="top-desc p-8">
                <p className="create">Create an account to subscribe</p>
                <p className="make">Make an instant donation</p>
              </div>
              <div className="button p-8">
                <Button outline={true} customClasses="rounded-md text-white">
                  Donate
                </Button>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Subscribe;
