import classNames from 'classnames';
import React from 'react';
import { type IconBaseProps } from 'react-icons';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const Loader: React.FC<IconBaseProps> = (props) => {
    return (
        <div className={classNames(props.className, 'animate-spin')}>
            <CgSpinnerTwoAlt {...props} className="h-full w-full" />
        </div>
    );
};

export default React.memo(Loader);
