import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import css from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  rep_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Required"),
});

export default function RegistrationForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .catch(() => {
        toast.error("Unknown error", {
          style: {
            background: "#181818",
            color: "#fff",
          },
        });
      });
    actions.resetForm();
  };

  return (
    <>
      <div className={css.container}>
        <Toaster
          containerStyle={{
            position: "relative",
          }}
          position="top-right"
          reverseOrder={false}
        />

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rep_password: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <h2 className={css.title}>Registration</h2>
            <div className={css.group}>
              <label htmlFor={`${id}-name`} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                placeholder="Stepan"
                name="name"
                id={`${id}-name`}
                className={css.input}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              ></ErrorMessage>
            </div>
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
            <div className={css.group}>
              <label htmlFor={`${id}-rep_password`} className={css.label}>
                Repeat password
              </label>
              <Field
                type="password"
                placeholder="*****"
                name="rep_password"
                id={`${id}-rep_password`}
                className={css.input}
              />
              <ErrorMessage
                name="rep_password"
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
