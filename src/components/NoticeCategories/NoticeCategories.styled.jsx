import styled from 'styled-components';

export const CategoryList = styled.ul`
  display: flex;

  list-style: none;
`;
export const CategoryItem = styled.li`
  :not(:first-child) {
    margin-left: 15px;
  }
`;
