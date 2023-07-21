import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  padding: 40px;

  color: #b4b4b4;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  margin-bottom: 5px;

  &::before {
    content: '►';
    margin-right: 8px;
  }
`;
