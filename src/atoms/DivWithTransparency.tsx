import { getClosestBGColor } from '@/utils/styling/GetClosestBGColor';
import { type Interpolation, type Theme } from '@emotion/react';
import React, { useEffect, useRef } from 'react';

type IProps = React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & {
        css?: Interpolation<Theme>;
    } & { enabled?: boolean };

const DivWithTransparency = React.forwardRef<any, IProps>(
    function DivWithTransparency({ enabled = true, ...props }, ref) {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (!divRef.current) return;

            const color = getClosestBGColor(divRef.current);

            if (!color) return;

            if (enabled)
                divRef.current.style.backgroundImage = `linear-gradient(0deg, ${color} 15%, transparent)`;
            else divRef.current.style.backgroundImage = `unset`;
        }, [enabled]);

        return (
            <div ref={ref} css={{ position: 'relative', overflow: 'hidden' }}>
                <div {...props} />
                <div
                    ref={divRef}
                    css={{
                        position: 'absolute',
                        bottom: '0px',
                        height: '60px',
                        width: '100%',
                    }}
                />
            </div>
        );
    },
);

export default DivWithTransparency;
