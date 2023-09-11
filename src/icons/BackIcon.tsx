import { TfiBackLeft } from 'react-icons/tfi';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const BackIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <TfiBackLeft {...props} />
        </div>
    );
};

export default BackIcon;
