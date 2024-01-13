import { WHITE } from "@designo/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";

import styled from "styled-components";

export const ContactUsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: url('/about-us-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    margin: 50px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        margin: 50px ${TABLET_X_PADDING};
    }
    
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        margin: 50px 0;
        border-radius: 0;
    }
`;

export const ContactInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 95px 40px 95px 95px;
    
    @media screen and (max-width: 1200px) {
        padding: ${TABLET_X_PADDING};
    }
`;

export const ContactUsTitle = styled.h2`
    color: ${WHITE};

    font-family: Jost;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const ContactUsText = styled.p`
    color: ${WHITE};

    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    @media screen and (max-width: 600px) {
       text-align: center;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 95px 95px 95px 40px;

    button {
        margin-left: auto;
        display: block;
    }

    @media screen and (max-width: 1200px) {
        padding: ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 600px) {
        button {
            margin: auto;
            display: block;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${WHITE};
    padding-left: 10px;
    color: ${WHITE};
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    outline: none;

    &::placeholder {
        color: ${WHITE};
        font-family: Jost;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${WHITE};
    padding-left: 10px;
    color: ${WHITE};
    font-family: Jost;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    height: 102px;
    resizable: none;
    outline: none;

    &::placeholder {
        color: ${WHITE};
        font-family: Jost;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;