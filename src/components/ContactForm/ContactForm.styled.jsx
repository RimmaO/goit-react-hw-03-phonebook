import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  padding: 4px 8px;

  font-family: inherit;
  font-style: normal;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.04em;

  border: 1px solid black;
  border-radius: 4px;

  color: black;
  background-color: white;

  &:hover {
    background-color: green;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  color: black;
`;

export const Input = styled.input`
  display: block;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 200px;
  height: 20px;

  color: black;
  font-size: 16px;

  border-radius: 4px;
  background-color: transparent;
`;
