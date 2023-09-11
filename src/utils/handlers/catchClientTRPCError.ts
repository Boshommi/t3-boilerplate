import useToast, { SendToastType } from '@/hooks/useToast';
import { TRPCClientError } from '@trpc/client';
import { ToastOptions } from 'react-toastify';

const sendToast = useToast();

export const catchClientTRPCError = (e: any) => {
    if (e instanceof TRPCClientError)
        sendToast({
            text: e.message,
            type: 'error',
        });
    else {
        console.log(e);
    }
};
