import styled from "styled-components";

export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: #FDF3F0;
    gap: 15px;

    img {
        width: 100%;
        height: auto;
    }
`;

export const ServiceTitle = styled.h5`
    color: #E7816B;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

export const ServiceDescription = styled.p`
    color: #333136;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin: 0px 10px 15px 10px;
`;