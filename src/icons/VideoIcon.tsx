import { BsCameraVideoFill } from 'react-icons/bs';
import React from 'react';
import { type IconBaseProps } from 'react-icons';

const VideoIcon: React.FC<IconBaseProps> = (props) => {
    return (
        <div>
            <BsCameraVideoFill {...props} />
        </div>
    );
};

export default VideoIcon;
