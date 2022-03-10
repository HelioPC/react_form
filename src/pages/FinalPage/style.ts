import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044A;
    color: #fff;
    width: 100%;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Header = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #16195C;
    height: 50px;

    h1 {
        cursor: none;
        position: absolute;
        top: 55px;
        left: 340px;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        color transparent;
        text-transform: uppercase;
    }

    h1 span:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        overflow: hidden;
    }

    h1:hover span:nth-child(1) {
        transform: translateY(-16px);
    }

    h1 span:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        transition: .5s;
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        overflow: hidden;
    }

    h1:hover span:nth-child(2) {
        transform: translateY(16px);
    }

    h1 span:nth-child(3) {
        position: absolute;
        top: 50%;
        left: 0;
        color: #000;
        transform: translateY(-50%) scaleY(0);
        width: 100%;
        background-color: #25CD89;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: .7em;
        text-align: center;
        transition: .5s;
    }

    h1:hover span:nth-child(3) {
        transform: translateY(-50%) scaleY(1);
    }

    a {
        position: absolute;
        top: 30px;
        right: 225px;
        text-decoration: none;
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 20px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        transition: all ease .5s
    }

    a:hover {
        transform: scale(1.15);
    }
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #16195C;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        a {
            text-decoration: none;
            color: #FFF;
        }

        p {
            margin-left: 10px;
        }

        svg:hover {
            color: #25CD89;
        }
    }
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;

export const Info = styled.div`
    height: 130px;
    width: 100%;
    border: 2px solid #FFF;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &:hover {
        border: 2px solid #25CD89;
    }

    h1 {
        font-size: 24px;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    p {
        padding: 2px;
        background-image: linear-gradient(#25CD89, #25CD89);
        background-repeat: no-repeat;
        background-size: 0 100%;
        background-position-x: right;
        transition: background-size 500ms;

        &:hover {
            background-size: 100% 100%;
            background-position-x: left;
            color: #141414;
        }
    }
`;
