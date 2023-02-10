import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  :not(:first-child) {
    margin-left: 50px;
  }
`;
export const Label = styled.span``;
export const RequiredFieldSign = styled.span`
  color: tomato;
`;
