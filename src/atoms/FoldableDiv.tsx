import { useSmoothShowMore } from '@/hooks/useSmoothShowMore';
import { type PropsWithChildren, type FC, useRef } from 'react';
import Button from './Button';
import DivWithTransparency from './DivWithTransparency';

type IProps = PropsWithChildren & {
    maxHeight?: number;
};

const FoldableDiv: FC<IProps> = ({ children, maxHeight = 150 }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const { onToggle, isOpen, isNeeded } = useSmoothShowMore({
        ref: divRef,
        maxHeight,
    });

    return (
        <>
            <DivWithTransparency enabled={!isOpen && isNeeded} ref={divRef}>
                {children}
            </DivWithTransparency>
            {isNeeded && <Button onClick={onToggle}>Открыть</Button>}
        </>
    );
};

export default FoldableDiv;
