import * as yup from 'yup';

const FILE_MAX_SIZE = 8388608;
const ACCEPTABLE_MIMETYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const DATE_REGEX =
  /(^(0+?[1-9]|[12][0-9]|3[01])[-\.](0+?[1-9]|[1][0-12])[-\.]((19|20)\d\d))/;
const PRICE_REGEX = /^[1-9]+[0-9]*$/;
// const VALIDATION_ERR_MSGS = {
//   TOO_LONG_FIELD: 'This field too long!',
//   TOO_SHORT_FIELD: 'This field too short!',
//   REQUIRE_FIELD: 'This field is required!',
//   ZERO_VALUE_FIELD: 'This field must be greater than 0.',
//   NOT_NUMBER_FIELD: `This field must have a number value`,
// };

const firstStepValidation = yup.object({
  title: yup.string().min(2).max(48).required(),

  name: yup.string().min(2).max(16),

  birthdate: yup
    .string()
    .matches(DATE_REGEX, "birthdate must be a 'DD.MM.YYYY' format."),

  breed: yup.string().min(2).max(24),
});

const secondStepValidation = yup.object({
  sex: yup.string().oneOf(['male', 'female']).required(),

  petPhoto: yup
    .mixed()
    .test('FILE_SIZE', 'Too big', value => {
      console.log('file-size');
      console.log(value);
      return value && value.size < FILE_MAX_SIZE;
    })
    .test('MIME_TYPE', 'invalid extension', value => {
      console.log('mime-type');
      console.log(value);
      return value && ACCEPTABLE_MIMETYPES.includes(value.type);
    }),

  location: yup.string().required(),

  price: yup
    .string()
    .matches(PRICE_REGEX, "price must be a 'Number' type.")
    .when('category', {
      is: 'sell',
      then: yup.string().required(),
    }),

  comments: yup.string().min(2).max(120),
});

const addNoticesSchema = { firstStepValidation, secondStepValidation };

export default addNoticesSchema;
