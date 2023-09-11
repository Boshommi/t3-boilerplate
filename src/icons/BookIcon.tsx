import { BsBookFill } from 'react-icons/bs';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const BookIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <BsBookFill {...props} />
        </div>
    );
};

export default BookIcon;
