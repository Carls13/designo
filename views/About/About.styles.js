import { BLACK, PEACH, WHITE } from "@designo/theme/colors.theme";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components"

export const AboutUsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-image: url('/about-us-background.png');
    background-size: cover;
    border-radius: 15px;
    margin: 50px ${DESKTOP_X_PADDING};

    .tablet-image {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        margin: 50px ${TABLET_X_PADDING};
        grid-template-columns: 1fr;

        .desktop-image {
            display: none;
        }

        .tablet-image {
            display: block;
            width: 100%;
            border-radius: 15px 15px 0 0;
        }
    }
`;

export const AboutUsInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0 95px;

    @media screen and (max-width: 1000px) {
        padding: 95px;
        align-items: center;
        text-align: center;
    }
`;

export const AboutUsTitle = styled.h2`
    color: ${WHITE};

    font-family: Jost;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
`;

export const AboutUsParagraph = styled.p`
    color: ${WHITE};

    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`;

export const AboutInfoContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 15px;
    margin: 50px ${DESKTOP_X_PADDING};

    .tablet-image {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        margin: 50px ${TABLET_X_PADDING};
        flex-direction: column;

        .desktop-image {
            display: none;
        }

        .tablet-image {
            display: block;
            width: 100%;
            border-radius: 15px 15px 0 0;
        }
    }
`;

export const AboutInfoTitle = styled.h2`
    color: ${PEACH};

    font-family: Jost;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
`;

export const AboutInfoText = styled.p`
    color: ${BLACK};

    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`;