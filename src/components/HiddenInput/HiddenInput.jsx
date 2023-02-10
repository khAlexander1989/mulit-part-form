import styled from 'styled-components';

const HiddenInput = styled.input`
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

export default HiddenInput;
