import Modal from "../Modal/Modal";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../../buttons/buttons";
import { useState } from "react";
import PropTypes from "prop-types"
const ModalImage = ({ children, firstText, secondaryText }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        type="button"
        classNames="primary-button"
        onClick={() => setOpenModal(true)}
      >
        Click me
      </Button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        <ModalBody>
          <ModalHeader>{children}</ModalHeader>

          <ModalFooter firstText={firstText} secondaryText={secondaryText} />
        </ModalBody>
      </Modal>
    </>
  );
};
ModalImage.propTypes = {
  children: PropTypes.node.isRequired,
  firstText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};
export default ModalImage;
