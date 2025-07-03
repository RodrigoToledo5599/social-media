import styled from "styled-components";

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    height:550px;
    width:500px;
    border: 2px solid black;
    border-radius:30px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    width:70%;
    height:45px;
    padding:1rem;
    border-radius:5px;
    margin-bottom:3rem;
    font-size:1.3rem;

`;

export const SendingButton = styled.button`
    font-size:1.5rem;
`;