import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-right: 10px;

  .label {
    color: ${(props) => props.scoreColor};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.scoreColor};
  border-radius: 50%;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  span {
    color: #ffffff;
  }
`;
