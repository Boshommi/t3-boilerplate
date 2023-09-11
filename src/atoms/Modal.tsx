import { FC } from 'react';
import { Modal as ModalMUI, ModalProps } from '@mui/material';

const Modal: FC<ModalProps> = (props) => {
    return (
        <ModalMUI
            {...props}
            className="pointer-events-nones flex h-screen items-center justify-center"
        >
            <div className="max-h-[70vh] w-[500px] max-w-[700px] rounded-2xl bg-white p-6">
                {props.children}
            </div>
        </ModalMUI>
    );
};

export default Modal;
