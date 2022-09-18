import { ReactElement } from "react";
import "./PageLayout.scss";
import Navbar from "../../molecules/Navbar";
import Footer from "../../molecules/Footer";

interface PageType {
  children: ReactElement;
  selected?: any;
}

const PageLayout = ({ children, selected }: PageType) => {
  return (
    <div className="page">
      <Navbar />
      <section className="flex-grow overflow-y-auto">
        <main>{children}</main>
        <Footer />
      </section>
    </div>
  );
};

export default PageLayout;
