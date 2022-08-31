import styled from '@emotion/styled';

export const FriendCard = styled.li`
  padding: 5px;
  width: 200px;
  height: 50px;
  display: grid;
  grid-template-columns: 20px 55px auto;
  align-items: center;
  justify-items: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 45px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;
