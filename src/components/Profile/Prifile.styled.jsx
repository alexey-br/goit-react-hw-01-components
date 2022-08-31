import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 15px;
  padding-top: 30px;
  max-width: 300px;
  background-color: #f7f5f2;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 15px 0 10px;
  font-size: 22px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin: 0px 0 10px;
  font-size: 16px;
  color: dimgray;
`;

export const Location = styled.p`
  margin: 0px 0 15px;
  font-size: 16px;
  color: dimgray;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #e7e5e1;
  border-top: 1px solid #30475e;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  li {
    padding: 10px;
  }

  li:not(:last-child) {
    border-right: 1px solid #30475e;
  }
`;

export const Label = styled.span`
  display: block;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
