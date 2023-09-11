/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { type SubmitHandler, Controller, type Control } from 'react-hook-form';

type IProps = React.PropsWithChildren & {
    control: Control<any>;
    className?: string;
    onSubmit?: SubmitHandler<any>;
};

const Form: React.FC<IProps> = ({ children, control, className, onSubmit }) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            {React.Children.map(children, (child) => {
                const childRef = child as React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                >;

                if (childRef?.props?.name) {
                    return (
                        <Controller
                            name={childRef.props.name}
                            control={control}
                            render={({ field }) => {
                                return React.createElement(childRef.type, {
                                    ...{
                                        ...childRef.props,
                                        ...field,
                                        key: childRef.props.name,
                                    },
                                });
                            }}
                        />
                    );
                }

                return childRef;
            })}
        </form>
    );
};

export default React.memo(Form);
