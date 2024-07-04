import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";
import Button from "../Button/Button";
import css from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function LoginForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn({ email: values.email, password: values.password }));
    actions.resetForm();
  };

  return (
    <>
      <div className={css.container}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <h2 className={css.title}>Login</h2>
            <div className={css.group}>
              <label htmlFor={`${id}-email`} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                placeholder="Email"
                name="email"
                id={`${id}-email`}
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              ></ErrorMessage>
            </div>
            <div className={css.group}>
              <label htmlFor={`${id}-password`} className={css.label}>
                Password
              </label>
              <Field
                type="password"
                placeholder="*****"
                name="password"
                id={`${id}-password`}
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={css.error}
              ></ErrorMessage>
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
