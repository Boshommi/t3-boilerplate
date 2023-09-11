import React, { type ReactElement, useState, useEffect } from 'react';
import { MenuItem, TextField, type TextFieldProps } from '@mui/material';

export type SelectMenuItem = {
    value: string | number;
    inner: string | ReactElement | Element;
};

export type IInputProps = Omit<
    TextFieldProps,
    'value' | 'onChange' | 'select'
> & {
    value?: string | number;
    onChange?: (value: string | number) => void;
    selectItems?: SelectMenuItem[];
};

const Input = React.forwardRef<any, IInputProps>(function Input(
    { value, onChange, selectItems, ...props },
    ref,
) {
    const [localValue, setLocalValue] = useState<string>(
        value?.toString() || '',
    );

    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
        if (onChange) {
            if (props.type === 'number') onChange(parseInt(e.target.value));
            else onChange(e.target.value);
        }
    };

    useEffect(() => {
        setLocalValue(value?.toString() || '');
    }, [value]);

    return (
        <TextField
            inputRef={ref}
            value={localValue}
            label={props.label}
            select={selectItems && selectItems.length > 0}
            error={!!props.helperText}
            onChange={handleUpdate}
            sx={{
                '&': {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid lightgray',
                        borderRadius: '12px',
                    },
                    '.MuiInputLabel-root': {
                        color: 'lightgray',
                    },
                    legend: {
                        width: props.label === ' ' ? '0px' : 'auto',
                    },
                },
                '&:hover': {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid gray',
                    },
                    '.MuiInputLabel-root': {
                        color: 'gray',
                    },
                },
                '& .Mui-focused': {
                    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                        {
                            border: '2px solid black',
                        },
                    '&.MuiInputLabel-root': {
                        color: 'black',
                    },
                },
                '&:has(.MuiFormLabel-filled)': {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid black',
                    },
                    '.MuiInputLabel-root': {
                        color: 'black',
                    },
                },
                '&:has(.Mui-error)': {
                    '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid red',
                    },
                    '.MuiInputLabel-root': {
                        color: 'red',
                    },
                },
            }}
            {...props}
        >
            {selectItems &&
                selectItems.length > 0 &&
                selectItems.map((s) => (
                    <MenuItem key={s.value} value={s.value}>
                        <>{s.inner}</>
                    </MenuItem>
                ))}
        </TextField>
    );
});

export default React.memo(Input);
