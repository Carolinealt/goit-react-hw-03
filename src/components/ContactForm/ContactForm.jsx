import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
const ContactForm = ({ onSubmit }) => {
  let schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short")
      .max(50, "too long")
      .required("required"),
    number: Yup.string()
      .min(2, "too short")
      .max(50, "too long")
      .required("required"),
  });
  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name">
            <Field type="text" name="name" className={css.field} />
          </label>
          <label htmlFor="number">
            <Field type="text" name="number" className={css.field} />
          </label>
          <button type="submit" className={css.addBtn}>
            add
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
