import styled from "styled-components";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "./spacing.theme";

export const ServiceHero = styled.div`
    background-image: ${props => props.backgroundImageUrl};
    padding: 72px 95px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    gap: 20px;
    margin: 50px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1000px) {
        margin: 50px ${TABLET_X_PADDING};
    }
`;

export const ServiceTitle = styled.h2`
    color: #FFF;
    font-family: Jost;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
`;

export const ServiceText = styled.p`
    color: #FFF;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin: 75px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr; 
        margin: 75px ${TABLET_X_PADDING};
    }
`;


