import { TRANSPARENT_BLACK, TRANSPARENT_PEACH } from '@designo/theme/colors.theme';
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from '@designo/theme/spacing.theme';
import styled, { css } from 'styled-components';

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin: 50px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        margin: 50px ${TABLET_X_PADDING};
    }
`;

export const ServiceNavigator = styled.div`
    background: linear-gradient(to bottom, ${TRANSPARENT_BLACK}, ${TRANSPARENT_BLACK}), ${(props) => props.backgroundImageUrl} no-repeat;
    background-size: cover;
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 308px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to bottom, ${TRANSPARENT_PEACH}, ${TRANSPARENT_PEACH}), ${(props) => props.backgroundImageUrl} no-repeat;
        background-size: cover;
    }

    ${(props) => props.bigCard ? css`
        grid-column: 1;
        grid-row: 1 / span 2;
    ` : ''}
`;

export const NavigatorTitle = styled.h3`
    color: #FFF;

    text-align: center;
    font-family: Jost;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 120% */
    letter-spacing: 2px;
`;

export const NavigatorText = styled.h6`
    color: #FFF;

    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 5px;
    text-transform: uppercase;
`;