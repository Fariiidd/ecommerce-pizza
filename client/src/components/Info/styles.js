import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: #F7CCAC;
    height: 100vh;
    display: flex;
    justify-content: space-between;
`;

export const HomeImage = styled.div`
    background-image: url("https://i.imgur.com/ZezuhRC.png");
    background-repeat: no-repeat;
    background-size: 600px;
    width: 100%;
 +

    @media screen and (max-width: 960px) {
        background-size: 500px;
    }
`;

export const Info = styled.div`
    color: #000;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? "#fff" : "#F7CCAC")}
`;