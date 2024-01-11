import { BLACK, WHITE } from "@designo/theme/colors.theme";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
    margin: 50px ${DESKTOP_X_PADDING};
    padding: 0px 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    background-image: url('/background-hero-home.png');
    height: 640px;
    border-radius: 15px;

    @media screen and (max-width: 1000px) {
        margin: 50px ${TABLET_X_PADDING};
        padding: 20px 95px;
        background-image: url('/home-tablet-background.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 843px;
        justify-content: unset;
        align-items: center;
        text-align: center;
    }
`;

export const HeroTitle = styled.h1`
    color: ${WHITE};
    font-family: Jost;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    width: 540px;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const HeroText = styled.p`
    color: ${WHITE};
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    width: 445px;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const ValuesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    margin: 200px ${DESKTOP_X_PADDING} 300px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1000px) {
        margin: 50px ${TABLET_X_PADDING};
        grid-template-columns: 1fr;
    }
`;

export const ValueCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    img {
        display: block;
        margin: auto;
    }
`;

export const ValueTitle = styled.h6`
    color: ${BLACK};

    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 130% */
    letter-spacing: 5px;
`;

export const ValueText = styled.p`
    color: ${BLACK};

    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`;