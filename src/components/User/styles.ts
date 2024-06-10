import styled from 'styled-components';

export const UserFilterButton = styled.button<{ $active?: boolean }>`
    width: 100%;
    background: ${(props) => (props.$active ? '#60a5fa' : 'none')};
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 0;
    user-select: none;
    text-align: start;
    font-size: 16px;

    &:focus {
        border: none;
        outline: none;
    }
`;
