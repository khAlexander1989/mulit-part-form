import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;
  padding: 0;

  margin: -1px;
  border: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);

  overflow: hidden;
  pointer-events: none;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 10px;

  background-color: paleGreen;
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: red;
`;
