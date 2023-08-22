const formatDate = (date) => {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return `${year}.${month}.${day}`;
};

export default formatDate;
