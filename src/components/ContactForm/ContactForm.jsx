import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { validationContactsSchema } from "../../utils/schema";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  return (
    <div className={styles.contactFormContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationContactsSchema}
    >
      <Form className={styles.form}>
        <label className={styles.formLabel}>
          Name
          <Field
            className={styles.formField}
            type="text"
            name="name"
            autoComplete="off"
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <Field
            className={styles.formField}
            type="text"
            name="number"
            autoComplete="off"
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
    </div>
  );
};

export default ContactForm;