import * as T from './Ticket.styles';
import starIconUrl from '@assets/icons/icon-star.png';
import ticketUrl from '@assets/images/ticket.png';

const Ticket = ({ title, showDate, rating, category, image }) => {
    return (
        <T.Wrap $category={category}>
            <T.ImageBox>
                {/* 티켓의 files의 배열길이 체크로 default 이미지 추가 */}
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <img
                        src="https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp"
                        alt="기본이미지"
                    />
                )}
            </T.ImageBox>
            <T.DivideLine>
                <span></span>
                <span></span>
            </T.DivideLine>
            <T.InfoBox>
                <T.Title>{title}</T.Title>
                <T.Date>{showDate}</T.Date>
                <T.Rating>
                    <img src={starIconUrl} />
                    <span>{rating}</span>
                </T.Rating>
            </T.InfoBox>
        </T.Wrap>
    );
};
export default Ticket;
