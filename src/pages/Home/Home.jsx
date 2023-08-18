import { useEffect, useState } from 'react';
import axiosInstance from '../../api';
import useLoginQuery from '../../hooks/@queries/useLoginQuery';

const Home = () => {
    const [tickets, setTickets] = useState({});
    useEffect(() => {
        axiosInstance
            .get('/api/user/ticket-total-count', {
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            })
            .then((res) => res.data.message)
            .then(setTickets)
            .then(() => console.log(tickets));
    }, []);

    return <h1>Home</h1>;
};
export default Home;
