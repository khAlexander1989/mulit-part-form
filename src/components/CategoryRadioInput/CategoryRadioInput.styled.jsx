import styled from 'styled-components';
// import HiddenInput from 'components/HiddenInput';

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: center;
  padding: 5px 20px;
  align-items: center;
  font-size: 18px;
  color: ${p => (p.active ? 'white' : 'tomato')};
  height: 40px;
  background-color: ${p => (p.active ? 'tomato' : 'white')};
  border: 1px solid tomato;
  border-radius: 40px;

  :not(:first-child) {
    margin-left: 15px;
  }

  :hover,
  :focus {
    color: white;
    background-color: tomato;
  }
`;
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
