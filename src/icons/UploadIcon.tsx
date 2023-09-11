import React from 'react';
import { type IconBaseProps } from 'react-icons';
import { FiUpload } from 'react-icons/fi';

const UploadIcon: React.FC<IconBaseProps> = (props) => {
    return <FiUpload {...props} />;
};

export default React.memo(UploadIcon);
