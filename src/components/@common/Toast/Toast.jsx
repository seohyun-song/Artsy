import { useEffect, useRef } from 'react';

import StyledToast from './Toast.styles';
import useToastContext from '@hooks/useToastContext';

const Toast = ({ message, id }) => {
    const toast = useToastContext();
    const timerId = useRef(null);

    useEffect(() => {
        timerId.current = setTimeout(() => {
            toast.hide(id);

            return () => {
                clearTimeout(timerId.current);
            };
        }, 2000);
    }, []);
    return <StyledToast>{message}</StyledToast>;
};
export default Toast;
