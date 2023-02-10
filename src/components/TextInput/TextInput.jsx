import { useField } from 'formik';
import * as styled from './TextInput.styled';

const TextInut = ({ label, required, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // console.log({ field, meta, helpers });

  return (
    <styled.Container>
      <styled.Label required htmlFor={props.name}>
        {required ? (
          <>
            {label} <styled.RequiredSign>*</styled.RequiredSign>
          </>
        ) : (
          label
        )}
      </styled.Label>
      <styled.Input {...field} {...props} />
      {meta.error && meta.touched && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default TextInut;
