import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  border-collapse: collapse;
  border: 0px solid #3a5a40;
  text-transform: capitalize;

  tr:nth-child(even) {
    background-color: #dad7cd;
  }

  th {
    padding: 10px;
    width: 100px;
    background-color: #588157;
    font-weight: 500;
    font-size: 18px;
    color: white;
    border: 1px solid #3a5a40;
  }

  td {
    padding: 8px;
    border: 1px solid #a7b3a9;
  }
`;
