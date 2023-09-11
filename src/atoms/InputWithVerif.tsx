import Form from '@/atoms/Form';
import Input, { IInputProps } from '@/atoms/Input';
import React, { FC, forwardRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type IProps = {
    onChange?: (value: string) => void;
    name?: string;
    label?: string;
};

type InputWithVerifType = {
    firstInput: string;
    secondInput: string;
};

const InputWithVerif = forwardRef<any, IProps>(function InputWithVerif(
    { onChange, label, ...props },
    ref,
) {
    const {
        watch,
        control,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<InputWithVerifType>();

    useEffect(() => {
        const subscription = watch((value) => {
            if (!onChange || !value.firstInput || !value.secondInput) return;

            if (value.firstInput === value.secondInput) {
                onChange(value.firstInput);
                clearErrors();
            } else {
                setError('secondInput', {
                    message: `${label} отличается. Проверьте ввёденные данные`,
                });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <Form control={control} className="flex flex-col gap-5">
            <Input label={label} name="firstInput" ref={ref} />
            <Input
                label={`Повторите ${label}`}
                name="secondInput"
                helperText={errors.secondInput?.message}
            />
        </Form>
    );
});

export default InputWithVerif;
