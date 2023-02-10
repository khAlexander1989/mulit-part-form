import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${p => (p.required ? 'black' : 'red')};
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 30px;
  border-color: tomato;
  padding-left: 12px;
  font-size: 16px;
`;

export const RequiredSign = styled.span`
  color: red;
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
