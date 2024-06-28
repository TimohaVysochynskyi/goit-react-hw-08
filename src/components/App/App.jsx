// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
// import { selectError, selectLoading } from "../../redux/contactsSlice";

// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";

// import { Oval } from "react-loader-spinner";
// import css from "./App.module.css";

// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && !error && (
//         <div className={css.loaderWrapper}>
//           <Oval
//             visible={true}
//             height="64"
//             width="64"
//             color="#181818"
//             secondaryColor="#333"
//             ariaLabel="oval-loading"
//             wrapperStyle={{}}
//             wrapperClass=""
//           />
//         </div>
//       )}
//       <ContactList />
//     </div>
//   );
// }

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

export default function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Layout>
          <Routes>
            <Route path="/" component={<HomePage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}
