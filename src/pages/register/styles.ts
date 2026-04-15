import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f3f4;
`;

export const Card = styled.div`
    width: 750px;
    background: white;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 320px;
`;

export const Logo = styled.img`
    width: 80px;
`;

export const Title = styled.h1`
    font-size: 28px;
`;

export const Subtitle = styled.p`
    color: gray;
`;

export const InputGroup = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;

    &:focus {
        border-color: #1a73e8;
    }

    &:focus + span {
        top: -8px;
        left: 8px;
        font-size: 12px;
        background: white;
        padding: 0 5px;
        color: #1a73e8;
    }
`;

export const Label = styled.span<{ $active: boolean }>`
    position: absolute;
    left: 10px;
    top: 14px;
    color: gray;
    font-size: 14px;
    pointer-events: none;
    transition: 0.2s ease all;

    ${({ $active }) =>
        $active &&
        `
        top: -8px;
        left: 8px;
        font-size: 12px;
        background: white;
        padding: 0 5px;
        color: #1a73e8;
    `}
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CreateAccount = styled.span`
    color: #1a73e8;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: #1a73e8;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #1669c1;
    }
`;
