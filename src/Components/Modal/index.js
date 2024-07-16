import { IoMdClose } from "react-icons/io";
import "./Modal.css";

const Modal = ({ estaEditando, setEditar, children }) => {
    if (estaEditando) {
        return (
            <div className="modal-fundo">
                <div className="modal">
                    <IoMdClose className="fechar" onClick={setEditar} />
                    {children}
                </div>
            </div>
        );
    }

    return null;
};

export default Modal;
