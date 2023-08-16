import React, { useState } from 'react';
import * as T from './TicketDetail.styles';
import RatingStar from '../../components/TicketDetail/RatingStar';

const TicketDetail = () => {
    const imgUrl =
        'https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp';

    const ticketData = {
        categoryName: '영화',
        title: '엘리멘탈',
        showDate: '2023-08-14',
        rating: '4',
        place: '성수 메가박스',
        price: 12000,
        review: '오늘 영화봄',
        categoryColor: '#A888FF',
    };

    return (
        <T.Container>
            <T.TypeColorBox color={ticketData.categoryColor} />
            <T.TicketDetailWrap>
                <T.MainText>티켓 상세</T.MainText>
                <T.TicketImageWrap>
                    <img src={imgUrl} alt="티켓이미지" />
                </T.TicketImageWrap>
                <T.TicketDetailBox>
                    <T.DetailContainer>
                        <T.TitleText title="true">{ticketData.title}</T.TitleText>
                        <T.UnderLine />
                        <T.TitleText>카테고리</T.TitleText>
                        <T.DetailText>{ticketData.categoryName}</T.DetailText>
                        <T.TitleText>별점</T.TitleText>
                        <RatingStar rating={ticketData.rating} />
                        <T.TitleText>장소</T.TitleText>
                        <T.DetailText>{ticketData.place}</T.DetailText>
                        <T.TitleText>금액</T.TitleText>
                        <T.DetailText>{ticketData.price.toLocaleString()}원</T.DetailText>
                        <T.TitleText>일시</T.TitleText>
                        <T.DetailText>{ticketData.showDate}</T.DetailText>
                        <T.TitleText>리뷰</T.TitleText>
                        <T.DetailText>{ticketData.review}</T.DetailText>
                        <T.EditWrap>
                            <T.EditText>수정하기</T.EditText>
                            <T.EditText>|</T.EditText>
                            <T.EditText>삭제하기</T.EditText>
                        </T.EditWrap>
                    </T.DetailContainer>
                </T.TicketDetailBox>
            </T.TicketDetailWrap>
        </T.Container>
    );
};
export default TicketDetail;
