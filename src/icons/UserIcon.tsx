import React from 'react';
import { type IconBaseProps } from 'react-icons';
import { BiSolidUser } from 'react-icons/bi';

const UserIcon: React.FC<IconBaseProps> = (props) => {
    return <BiSolidUser {...props} />;
};

export default React.memo(UserIcon);
