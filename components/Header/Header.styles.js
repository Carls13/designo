import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@designo/theme/spacing.theme";
import styled from "styled-components";
import css from "styled-jsx/css";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px ${DESKTOP_X_PADDING};

    .toggle-menu-icon {
        display: none;
        position: relative;
        z-index: 10;

        @media screen and (max-width: 600px) {
                display: flex;
        }
    }

    @media screen and (max-width: 1000px) {
        padding-right: 25px;
    }

    @media screen and (max-width: 1000px) {
        padding: 50px ${TABLET_X_PADDING};
    }
`;

export const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 600px) {
        ${(props) => !props.isOpen ? css`display: none;` : ''};
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        padding-top: 150px;
        top: 0;
        right: 0;
        height: 100vh;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.774227142333984px);
        width: 254px;
    }
`;