import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  margin: 15px;
  text-align: center;
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h2`
  padding: 10px;
  text-transform: uppercase;
  margin: 0;
`;

export const StatList = styled.ul`
  min-height: 60px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(60px, 1fr);
`;

export const Item = styled.li`
  padding: 8px;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
