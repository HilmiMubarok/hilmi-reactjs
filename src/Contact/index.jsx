import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      msg: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      msg: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Message is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form className="grid-row grid gap-4" onSubmit={formik.handleSubmit}>
      {formik.touched.name && formik.errors.name ? (
        <div>
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-4 w-full rounded-lg border-2 border-red-500 bg-gray-900 p-4 text-white"
            placeholder="Input your name"
          />
          <div className="p-3 font-bold text-red-500">{formik.errors.name}</div>
        </div>
      ) : (
        <div>
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-4 w-full rounded-lg bg-gray-900 p-4 text-white"
            placeholder="Input your name"
          />
        </div>
      )}

      {formik.touched.email && formik.errors.email ? (
        <div>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            className="mt-4 w-full rounded-lg border-2 border-red-500 bg-gray-900 p-4 text-white"
            placeholder="Input your email"
          />
          <div className="p-3 font-bold text-red-500">
            {formik.errors.email}
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            className="mt-4 w-full rounded-lg bg-gray-900 p-4 text-white"
            placeholder="Input your email"
          />
        </div>
      )}

      {formik.touched.msg && formik.errors.msg ? (
        <div>
          <label htmlFor="msg" className="text-xl">
            Message
          </label>
          <textarea
            id="msg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="10"
            className="mt-4 w-full rounded-lg border-2 border-red-500 bg-gray-900 p-4 text-white"
            value={formik.values.msg}
          >
            {formik.values.msg}
          </textarea>
          <div className="p-3 font-bold text-red-500">{formik.errors.msg}</div>
        </div>
      ) : (
        <div>
          <label htmlFor="msg" className="text-xl">
            Message
          </label>
          <textarea
            id="msg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="10"
            className="mt-4 w-full rounded-lg bg-gray-900 p-4 text-white"
            value={formik.values.msg}
          >
            {formik.values.msg}
          </textarea>
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 p-3 hover:bg-gradient-to-l hover:from-orange-500 hover:to-amber-500 sm:w-[200px]"
      >
        Send to me
      </button>
    </form>
  );
};

export default class Contact extends React.Component {
  render() {
    return (
      <div className="flex flex-col px-16 py-16 xl:px-0">
        <div className="text-3xl font-bold">Hire Me</div>
        <div className="mb-8">
          Feel free to to contact me any time, through any method below.
        </div>
        <ContactForm />
      </div>
    );
  }
}
