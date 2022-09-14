import { rightCard2, rightCard3 } from "../../../data/NewsData";
import PageLayout from "../../../organisms/PageLayout";
import "./Contact.scss";

const Contact = () => {
  return (
    <PageLayout>
      <>
        <div className="contact-bg">
          <div className="first-text">
            <h2 className="text-[3rem]">Contact us</h2>
            <p className="text-[1.5rem] pt-4">
              We love catching up with our supporters and want to make speaking
              to us as easy as possible.
            </p>
          </div>
          <div className="right-wrap rounded-md">
            {rightCard3.map((card, indx) => (
              <div className="right" key={indx}>
                <h3 className="font-bold text-2xl">{card.title}</h3>
                <div className="top flex items-center gap-4">
                  <img src="/vectors/location.svg" alt="" />
                  <div className="card-text pt-12">
                    <p className="text-xl pb-4">{card.description}</p>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="main pt-[8rem]">
          <div className="input-card  h-[20rem] w-[20rem]"></div>
        </section>
      </>
    </PageLayout>
  );
};

export default Contact;
