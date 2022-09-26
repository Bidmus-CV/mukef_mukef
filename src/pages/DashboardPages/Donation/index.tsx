import { useState } from "react";
import Modal from "../../../organisms/modals";
import DonationModal from "../../../organisms/modals/donationModal";
import DashboardLayout from "../../../templates/DashboardLayout";
import "./Donation.scss";

const DonationPage = () => {
  const [openDonationModal, setOpenDonationModal] = useState(false);
  return (
    <DashboardLayout>
      <div
        className="donation-modal"
        onClick={() => setOpenDonationModal(true)}
      >
        <Modal
          title="Add donation"
          openModal={openDonationModal}
          closeModal={() => setOpenDonationModal(false)}
        >
          <DonationModal />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default DonationPage;
