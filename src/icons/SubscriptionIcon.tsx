import { MdSubscriptions } from 'react-icons/md';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const SubscriptionIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <MdSubscriptions {...props} />
        </div>
    );
};

export default SubscriptionIcon;
