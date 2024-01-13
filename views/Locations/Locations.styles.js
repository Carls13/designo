import { BLACK, PEACH } from "@designo/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components"

export const LocationRow = styled.div`
    display: grid;
    grid-template-columns: ${props => props.reverse ? '1fr 2fr' : '2fr 1fr'};
    grid-gap: 25px;
    margin: 25px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1200px) {
        margin: 50px ${TABLET_X_PADDING};
        display: flex;
        flex-direction: ${props => props.reverse ? 'column' : 'column-reverse'};;
        align-items: center;
    }
`;

export const LocationInfoContainer = styled.div`
    background: #FDF3F0; url('/locations-mask.png');
    border-radius: 15px;
    padding-left: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    @media screen and (max-width: 1200px) {
        padding: 95px;
    }

    @media screen and (max-width: 600px) {
        align-items: center;
        text-align: center;
        padding: ${MOBILE_X_PADDING};
        width: 100%;
    }
`;

export const LocationTitle = styled.h3`
    color: ${PEACH};

    font-family: Jost;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
`;

export const LocationDetailsRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
`;

export const LocationDetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LocationInfo = styled.span`
    color: ${BLACK};
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
`; 