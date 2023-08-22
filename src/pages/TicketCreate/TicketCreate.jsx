import React, { useState, useRef } from 'react';
import { useTheme } from 'styled-components';
import * as T from './TicketCreate.styles';
import PhotoUploader from '@components/TicketCreate/PhotoUploader/PhotoUploader';
import Datepicker from '@components/TicketCreate/DatePicker/DatePicker';
import RatingSliderBar from '@components/TicketCreate/RatingSliderBar/RatingSliderBar';
import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import CategoryButton from '@components/TicketCreate/CategoryButton/CategoryButton';
import Loading from '@components/@common/Loading/Loading';
import * as I from '@components/@common/Input/Input.styles';
import deleteIconUrl from '@assets/icons/icon-delete.png';

import useTicketCreateQuery from '@hooks/@queries/useTicketCreateQuery';

const TicketCreate = () => {
    const theme = useTheme();
    const categoryQuery = useCategoryQuery();
    const { mutate } = useTicketCreateQuery();

    const [inputValue, setInputValue] = useState({
        title: '',
        place: '',
        price: '',
        review: '',
    });

    const [showDate, setShowDate] = useState(new Date());
    const [rating, setRating] = useState(3);
    const [category, setCategory] = useState(1);

    const [imgfile, setImgfile] = useState(''); // 이미지 파일
    const [imgSrc, setImgSrc] = useState(''); // 이미지 미리보기
    const [imgName, setImgName] = useState(''); // 이미지 이름

    const titleRef = useRef();
    const [titleError, setTitleError] = useState('');

    const onChange = (e) => {
        setInputValue((input) => ({ ...input, [e.target.id]: e.target.value }));
    };

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const createFormatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();

        return `${year}-${month}-${day}`;
    };

    const onResetImage = () => {
        setImgSrc('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (inputValue.title === '') {
            setTitleError('제목을 입력해주세요');
            titleRef.current.focus();
            return;
        }

        // mutate
        let formData = new FormData();

        // 필수
        formData.append('categoryId', parseInt(category));
        formData.append('title', inputValue.title);
        formData.append('showDate', createFormatDate(showDate));

        // 선택사항
        formData.append('place', inputValue.place);
        formData.append('price', inputValue.price ?? parseInt(inputValue.price));
        formData.append('rating', parseInt(rating));
        formData.append('review', inputValue.review);

        if (imgfile !== '') {
            formData.append('file', imgfile);
        }

        mutate(formData);

        setInputValue({ title: '', place: '', price: '', review: '' });
        setTitleError('');
    };

    if (categoryQuery.isLoading) return <Loading></Loading>;

    return (
        <T.Container>
            <T.TitleContainer>
                <h3>티켓 등록</h3>
            </T.TitleContainer>
            <T.CreateForm onSubmit={(e) => onSubmit(e)}>
                {imgSrc === '' && (
                    <PhotoUploader setImgfile={setImgfile} setImgSrc={setImgSrc} setImgName={setImgName} />
                )}
                {imgSrc !== '' && (
                    <T.ImgContainer>
                        <T.ImgWrap>
                            <img alt="티켓 이미지" src={imgSrc} />
                        </T.ImgWrap>
                        <div>
                            <img alt="삭제" style={{ cursor: 'pointer' }} src={deleteIconUrl} onClick={onResetImage} />
                        </div>
                    </T.ImgContainer>
                )}
                <T.StyledInput
                    id="title"
                    labelText="제목"
                    onChange={onChange}
                    value={inputValue.title}
                    isRequired
                    isValid={titleError === '' ? true : false}
                    placeholder="제목을 입력하세요"
                    inputWidth="100%"
                    errorMessage={titleError}
                    inputRef={titleRef}
                />
                <div>
                    <T.Label>카테고리</T.Label>
                    <I.StyledRequired>&#42;</I.StyledRequired>
                    <CategoryButton datas={categoryQuery?.data} checkedvalue={category} onChange={onCategoryChange} />
                </div>
                <Datepicker
                    selected={showDate}
                    onChange={(date) => setShowDate(date)}
                    customInput={
                        <T.StyledInput
                            id="title"
                            labelText="관람일"
                            isRequired
                            isValid={true}
                            inputWidth="100%"
                            style={{ cursor: 'pointer' }}
                        />
                    }
                />
                <T.StyledInput
                    id="place"
                    labelText="장소"
                    onChange={onChange}
                    value={inputValue.place}
                    isValid={true}
                    placeholder="장소를 입력하세요"
                    inputWidth="100%"
                />
                <T.StyledInput
                    id="price"
                    labelText="금액"
                    onChange={onChange}
                    value={inputValue.price}
                    inputType="number"
                    isValid={true}
                    placeholder="금액을 입력하세요"
                    inputWidth="100%"
                />
                <div>
                    <T.Label>별점</T.Label>
                    <RatingSliderBar value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <T.ReviewContainer>
                    <T.Label>리뷰</T.Label>
                    <T.ReviewInput
                        placeholder="리뷰를 입력하세요(1000자)"
                        id="review"
                        onChange={onChange}
                        value={inputValue.review}
                    />
                </T.ReviewContainer>
                <T.ButtonContaienr>
                    <T.CreateButton full="true" color={theme.colors.point1}>
                        등록하기
                    </T.CreateButton>
                </T.ButtonContaienr>
            </T.CreateForm>
        </T.Container>
    );
};
export default TicketCreate;
