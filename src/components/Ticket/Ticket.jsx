import * as T from './Ticket.styles';

const Ticket = ({ title, showDate, rating, category }) => {
    return (
        <T.Wrap category={category}>
            <T.ImageBox>
                {/* {data.img ? <img src={data.img} alt={data.title} /> : <img src={} alt="기본이미지" />} */}
            </T.ImageBox>
            <T.DivideLine>
                <span></span>
                <span></span>
            </T.DivideLine>
            <T.InfoBox>
                <T.Title>{title}</T.Title>
                <T.Date>{showDate}</T.Date>
                <T.Rating>
                    <span>{rating}</span>
                </T.Rating>
            </T.InfoBox>
        </T.Wrap>
    );
};
export default Ticket;
