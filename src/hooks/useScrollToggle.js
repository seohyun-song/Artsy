import { useEffect, useState } from 'react';

const useScrollToggle = (initialState = false) => {
    const [isScroll, setIsScroll] = useState(initialState);

    const checkIsScroll = () => {
        const { scrollY } = window;
        scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkIsScroll);
        return () => {
            window.removeEventListener('scroll', checkIsScroll);
        };
    }, []);

    return isScroll;
};

export default useScrollToggle;
