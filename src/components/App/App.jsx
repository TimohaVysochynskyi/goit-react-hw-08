import { lazy, Suspense, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div className={css.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className={css.loaderWrapper}>
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
