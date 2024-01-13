import { PEACH, WHITE, BLACK } from "@designo/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components";

export const LocationsGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 50px ${DESKTOP_X_PADDING};
    
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
        text-align: center;
    }

    @media screen and (max-width: 1200px) {
        margin: 50px ${MOBILE_X_PADDING};
    }
`;

export const LocationCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    img, button {
        display: block;
        margin: auto;
    }
`;

export const LocationTitle = styled.h6`
    color: ${BLACK};

    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 130% */
    letter-spacing: 5px;
`;

export const PeachButton = styled.button`
    border-radius: 8px;
    background: ${PEACH};
    width: 152px;
    height: 56px;
    color: ${WHITE};
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