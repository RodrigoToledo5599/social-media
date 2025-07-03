import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    width:500px;
    padding:24px;
    margin:24px;

`;

export const TitleContent = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:16px;
    font-size:18px;

`;

export const NameAndDate = styled.p`
    margin:0;

`;

export const TextContent = styled.div`
    margin-bottom:16px;
`;


export const AccountCircle = styled.img`
    max-width:45px;
    margin-right:10px;
`;

export const LikeCommentAndShare = styled.div`
    padding-right:12px;
    padding-left:12px;
    height:50px;
    display:flex;
    flex-direction:row;
    align-items:center;

`;

export const IconButton = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:transparent;
    margin-right:24px;
    padding:6px;
    border:none;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    &:active{
        background-color: rgba(0,0,0,0.1);
    }
`;

export const Icon = styled.img`
    width:25px;
    margin-right:6px;


`;