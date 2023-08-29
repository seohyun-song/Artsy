const formatTime = (seconds) => {
    let min = parseInt((seconds % 3600) / 60);
    let sec = seconds % 60;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${min} : ${sec}`;
};

export default formatTime;
