import { BLACK, DARK_GREY, WHITE } from "@designo/theme/colors.theme";
import styled from "styled-components";
import css from "styled-jsx/css";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";

export const FooterContainer = styled.footer`
    background-color: ${BLACK};
    padding: ${(props) => {
        if (props.bigPadding) return`144px ${DESKTOP_X_PADDING} 72px ${DESKTOP_X_PADDING}`;
        
        return `72px ${DESKTOP_X_PADDING}`;
    }};
    display: flex;
    flex-direction: column;
    gap: 31px;
    position: relative;
    margin-top: 200px;

    hr {
        width: 100%;
    }

    @media screen and (max-width: 1000px) {
        padding: ${(props) => {
            if (props.bigPadding) return`144px ${TABLET_X_PADDING} 72px ${TABLET_X_PADDING}`;
            
            return `72px ${TABLET_X_PADDING}`;
        }};
    }
`;

export const FooterFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

export const FooterInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.span`
    color: #FFF;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
`; 

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const SocialRow = styled.div`
    display: flex;
    gap: 10px;
`;