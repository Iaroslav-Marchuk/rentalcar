import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../Button/Button.jsx';
import Loader from '../Loader/Loader.jsx';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/calendar.css';
import css from './BookForm.module.css';

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Miminum 3 symboles')
    .max(16, 'Maximum 16 symboles')
    .required('Field required'),
  email: Yup.string().email('Invalid email format').required('Field required'),
  bookingDate: Yup.date().required('Field required'),
  comment: Yup.string().max(400, 'Maximum 400 symboles'),
});

const BookForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Car booked successfully!');
      actions.resetForm();
    } catch (error) {
      toast.error('Failed to book a car: ' + error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your car now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={OrderSchema}
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && <Loader loadingState={true} />}

            <Form className={css.form}>
              <div className={css.formGroup}>
                <Field
                  className={css.formInput}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name*"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.formGroup}>
                <Field
                  className={css.formInput}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>

              <Field name="bookingDate">
                {({ field, form }) => (
                  <div className={css.formGroup}>
                    <DatePicker
                      {...field}
                      selected={field.value ? new Date(field.value) : null}
                      onChange={date => form.setFieldValue('bookingDate', date)}
                      placeholderText="Booking date"
                      dateFormat="dd.MM.yyyy"
                      className={css.formInput}
                      autoComplete="off"
                    />
                    <ErrorMessage
                      name="bookingDate"
                      component="div"
                      className={css.error}
                    />
                  </div>
                )}
              </Field>

              <div className={css.formGroup}>
                <Field
                  as="textarea"
                  className={css.formTextarea}
                  name="comment"
                  id="comment"
                  placeholder="Comment"
                />

                <ErrorMessage
                  name="comment"
                  component="div"
                  className={css.error}
                />
              </div>

              <Button type="submit" className={css.formBtn}>
                Send
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
export default BookForm;
