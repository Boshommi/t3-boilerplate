import { BiSolidPen } from 'react-icons/bi';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const PenIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <BiSolidPen {...props} />
        </div>
    );
};

export default PenIcon;
