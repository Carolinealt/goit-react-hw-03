import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
const ContactForm = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, actions) => {
          console.log("actions", actions.resetForm());
          onSubmit(values);
        }}
      >
        <Form className={css.form}>
          <label htmlFor="name">
            <Field type="text" name="name" className={css.field}/>
          </label>
          <label htmlFor="number">
            <Field type="text" name="number" className={css.field}/>
          </label>
          <button type="submit" className={css.addBtn}>add</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
