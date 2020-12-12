import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: thin solid black;
`;

export const MenuItemContainer = styled.div`
    display: flex;
    justify-self: flex-end;
    align-items: center;
        
    & > * {
      margin-right: 1rem;
      cursor: pointer;
      text-transform: uppercase;
    }
`;