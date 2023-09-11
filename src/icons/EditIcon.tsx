import React, { FC } from 'react';
import { BiEdit } from 'react-icons/bi';

type IProps = {
    className?: string;
};

const EditIcon: FC<IProps> = ({ className }) => {
    return <BiEdit className={className} />;
};

export default EditIcon;
