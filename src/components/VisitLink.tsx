import classNames from 'classnames';
import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { type PropsWithChildren } from 'react';

const VisitLink: React.FC<PropsWithChildren<LinkProps>> = (props) => {
    const router = useRouter();

    return (
        <Link
            className={classNames(
                'cursor-pointer px-2 ',
                router.asPath === props.href
                    ? 'font-bold text-zinc-950'
                    : 'text-zinc-700',
            )}
            {...props}
        />
    );
};

export default VisitLink;
