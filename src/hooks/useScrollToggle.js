import { useEffect, useState } from 'react';
import throttle from '@utils/throttle';

/* 스크롤 내렸을 때 요소 show/hide Hook */
const useScrollToggle = (initialState = false) => {
    const [isScroll, setIsScroll] = useState(initialState);

    const checkIsScroll = () => {
        const { scrollY } = window;
        scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(checkIsScroll, 100));
        return () => {
            window.removeEventListener('scroll', throttle(checkIsScroll, 100));
        };
    }, []);

    return isScroll;
};

export default useScrollToggle;
