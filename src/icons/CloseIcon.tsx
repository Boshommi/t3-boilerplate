import React from 'react';
import { type IconBaseProps } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';

const CloseIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <AiOutlineClose {...props} />
        </div>
    );
};

export default CloseIcon;
