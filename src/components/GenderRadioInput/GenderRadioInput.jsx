import { useField } from 'formik';
import * as styled from './GenderRadioInput.styled';
import { TbVenus } from 'react-icons/tb';
import { TbMars } from 'react-icons/tb';

const PetGenderRadioInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <styled.Label htmlFor={props.id} active={field.value === props.value}>
        {props.value === 'male' ? (
          <TbMars size="80%" color="#23C1EE" />
        ) : (
          <TbVenus size="80%" color="#FE8787" />
        )}

        <styled.Text>{props.value}</styled.Text>
      </styled.Label>
      <styled.Input type="radio" {...field} {...props} />
    </>
  );
};

export default PetGenderRadioInput;
