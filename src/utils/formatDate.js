import { format, setMinutes } from 'date-fns';

const formatTicketDate = (date) => {
    return format(date, 'yyyy-MM-dd HH:mm');
};

const formatKstDate = (time) => {
    time = new Date(time);
    const offset = time.getTimezoneOffset() * 60000;

    return new Date(time.getTime() + offset);
};

const formatDate = (date) => {
    const kst = formatKstDate(date);

    const year = kst.getFullYear();
    const month = kst.getMonth() + 1;
    const day = kst.getDate();

    return `${year}.${month}.${day}`;
};

const formatTenMinutes = () => {
    const nowMinutes = new Date().getMinutes();
    const now = setMinutes(new Date(), Math.floor(nowMinutes / 10) * 10);

    return now;
};

export { formatTicketDate, formatKstDate, formatDate, formatTenMinutes };
