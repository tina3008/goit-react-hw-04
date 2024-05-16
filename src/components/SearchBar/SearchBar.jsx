// export default function SearchBar() {
//   return (
//     <header>
//       <form>
//         <input
//           type="text"
//           // autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
//   );
// }


import { Field, Form, Formik } from "formik";
// import css from "./SearchForm.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}