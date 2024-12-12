import styled from 'styled-components';

export const SectionOneStyled = styled.div`
    background-color: #f4f4f4;
    padding: 2rem;
    text-align: center;
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #333;
        color: #fff;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #555;
        }
    }
`;