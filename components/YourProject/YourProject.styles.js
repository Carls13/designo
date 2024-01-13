import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components";

export const CallToActionContainer = styled.div`
    padding: 72px 95px;
    background-image: url('/background-lets-talk.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    gap: 100px;
    border-radius: 15px;
    margin-top: -300px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    @media screen and (max-width: 600px) {
        padding: 50px ${MOBILE_X_PADDING};
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
`;

export const CallTitle = styled.h2`
    color: #FFF;
    font-family: Jost;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
`;
export const CallText = styled.p`
    color: #FFF;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`;

export const WhiteButton = styled.button`
    border-radius: 8px;
    background: #FFF;
    width: 152px;
    height: 56px;
    color: #333136;
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
`;