/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import {
    DatePicker as DatePickerMUI,
    type DatePickerProps,
} from '@mui/x-date-pickers';
import { type FC, forwardRef } from 'react';

type IProps = DatePickerProps<any> & {
    name?: string;
};

const DatePicker: FC<IProps> = forwardRef<any, IProps>(
    function DatePicker(props, ref) {
        const { value, ...restProps } = props;

        return (
            <DatePickerMUI
                sx={{
                    '&': {
                        '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                            {
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
                        '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                            {
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
                        '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                            {
                                border: '2px solid black',
                            },
                        '.MuiInputLabel-root': {
                            color: 'black',
                        },
                    },
                    '&:has(.Mui-error)': {
                        '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                            {
                                border: '2px solid red',
                            },
                        '.MuiInputLabel-root': {
                            color: 'red',
                        },
                    },
                }}
                {...restProps}
                value={value ?? null}
                ref={ref}
            />
        );
    },
);

export default DatePicker;
