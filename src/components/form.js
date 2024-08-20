import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptedTerms: false,
  };

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Wrong Email Address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be be no less than 8 characters').required('Password is required'),
    acceptedTerms: Yup.boolean().oneOf([true], 'Terms and Conditions have to be accepted.'),
  });

const onSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted:', values);
    setSubmitting(false);
  };

export const FormikForm = () => {
    return (
      <div>
        <h1>NET Sign-Up Form using Formik</h1>
  
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >

    <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="text" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

         <div>
            <label>
                <Field type="checkbox" name="acceptedTerms" />
                Accept Terms & Conditions
             </label>
            <ErrorMessage name="acceptedTerms" component="div" />
        </div>


          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};


