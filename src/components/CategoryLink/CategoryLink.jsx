import React from 'react';
import * as C from './CategoryLink.styles';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

const getCategoryImageURL = (categoryId) => {
    return `/src/assets/icons/category_${categoryId}.png`;
};

const CategoryLink = ({ name, categoryId }) => {
    const categoryImageURL = getCategoryImageURL(categoryId);
    const theme = useTheme();
    return (
        <C.CategoryLink $theme={theme}>
            <C.CategoryImage src={categoryImageURL} alt={name} />
            <C.CategoryTitle $theme={theme}>{name}</C.CategoryTitle>
            <C.MakeTicketLink>
                <Link to={`/ticket/create?categoryId=${categoryId}`}>
                    기록남기기<span>&#62;</span>
                </Link>
            </C.MakeTicketLink>
        </C.CategoryLink>
    );
};

export default CategoryLink;
