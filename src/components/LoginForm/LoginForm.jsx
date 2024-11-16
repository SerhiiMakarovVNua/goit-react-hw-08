import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { validationLoginSchema } from "../../utils/schema";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={styles.loginContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationLoginSchema}
    >
      <Form className={styles.form}>
        <label className={styles.formLabel}>
          Email
          <Field
            type="text"
            name="email"
            className={styles.formField}
            placeholder="Enter email..."
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={styles.formLabel}>
          Password
          <Field
            type="password"
            name="password"
            className={styles.formField}
            placeholder="Enter password..."
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Log in
        </button>
      </Form>
    </Formik>
    </div>
  );
};

export default LoginForm;