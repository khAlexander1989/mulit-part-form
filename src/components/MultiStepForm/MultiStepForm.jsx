import axios from 'axios';
import { useState } from 'react';
import { Formik } from 'formik';

import TextInput from 'components/TextInput';
import FileInput from 'components/FileInput';
import PreviewPhoto from 'components/PreviewPhoto';
import NoticeCategories from 'components/NoticeCategories';
import GenderSwitch from 'components/GenderSwitch';
import addNoticesSchema from 'validationSchemas/noticesSchema';

axios.defaults.baseURL = 'http://localhost:3001/api';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGZlOWE3N2E1ZjA2MWY5MjVlZWE3ZSIsImlhdCI6MTY3NTgwNTI5NCwiZXhwIjoxNjc1ODg4MDk0fQ.jmldbupCGFEZGh2NHWW-sxM9JSay9Unr30WlTOezEQI';

const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: '',
  location: '',
  comments: '',
  price: '',
  petPhoto: '',
};

const NOTICE_CATEGORIES = ['lost/found', 'in good hands', 'sell'];
const PET_GENDER = ['male', 'female'];

const MultiStepForm = () => {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const currentValidationSchema = isFirstStep
    ? addNoticesSchema.firstStepValidation
    : addNoticesSchema.secondStepValidation;

  async function handleFormSubmit(values) {
    const { name, breed, birthdate, comments, petPhoto, sex } = values;
    console.log({ name, breed, birthdate, comments, petPhoto, sex });
    // try {
    //   const result = await axios.post(
    //     '/pets/',
    //     { name, breed, birthdate, comments, petPhoto },
    //     {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     }
    //   );
    //   console.log(result);
    // } catch (err) {
    //   console.log(err.message);
    // }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={currentValidationSchema}
    >
      {({
        values,
        errors,
        handleSubmit,
        setFieldValue,
        setTouched,
        setFieldTouched,
        validateForm,
        validateField,

        touched,
        isValid,
      }) => (
        <form onSubmit={handleSubmit}>
          <h1>Multi-step form</h1>
          {isFirstStep ? (
            <div>
              <p>First Step</p>
              <p>{`category: ${values.category}`}</p>
              <NoticeCategories categories={NOTICE_CATEGORIES} />

              <TextInput label="Title of ad" name="title" required />
              <TextInput label="Name pet" name="name" />
              <TextInput
                label="Date of birth"
                name="birthdate"
                placeholder="dd.mm.yyyy"
              />
              <TextInput label="Breed" name="breed" placeholder="" />

              <button type="button" onClick={async () => console.log('Cancel')}>
                cancel
              </button>
              <button
                disabled={!isValid || values.title === ''}
                type={'button'}
                onClick={async () => setIsFirstStep(false)}
              >
                next
              </button>
            </div>
          ) : (
            <div>
              <p>Second Step</p>
              <GenderSwitch gender={PET_GENDER} />
              <TextInput label="Location" name="location" required />
              {values.category === 'sell' && (
                <TextInput label="Price" name="price" required />
              )}

              {values.petPhoto ? (
                <PreviewPhoto
                  photo={values.petPhoto}
                  onDeletePreview={() => setFieldValue('petPhoto', '')}
                />
              ) : (
                <>
                  <FileInput
                    id="petPhoto"
                    name="petPhoto"
                    onChange={({ target }) =>
                      setFieldValue('petPhoto', target.files[0] || '')
                    }
                  />
                </>
              )}
              <TextInput label="Comments" name="comments" />
              <button type="button" onClick={() => setIsFirstStep(true)}>
                back
              </button>
              <button
                type="submit"
                disabled={!isValid || values.location === ''}
              >
                done
              </button>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
