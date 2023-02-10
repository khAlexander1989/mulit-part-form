import { useField } from 'formik';

import * as styled from './FileInput.styled';

const FileInput = ({ hidden, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <styled.Container>
      {!hidden && (
        <styled.Label htmlFor={props.id || props.name}></styled.Label>
      )}
      <styled.Input type="file" {...field} {...props} />
      {meta.touched && meta.error && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default FileInput;
