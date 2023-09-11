import { FaStore } from 'react-icons/fa';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const StoreIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <FaStore {...props} />
        </div>
    );
};

export default StoreIcon;
