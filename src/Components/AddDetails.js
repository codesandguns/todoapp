import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'

const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //...

  return errors;
};

const Basic = () => (

  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ name: '', Age: '', phone: '', email: '', password: '' }}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log("log in", values)
        }, 500)
      }}
      validationSchema={Yup.object().shape(
        {
          email: Yup.string().email().required("please enter email"),
          name: Yup.string().min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          Age: Yup.number(),//.required("please enter age"),
          phone: Yup.number().required("please enter phone number"),
          password: Yup.string().required("please enter password").min(4, "too short, it shouls be min 4 characher")
        }
      )}
    >

      {props => {
        const { values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting } = props;


        return (

          <div className="flex">
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email"> Email</label>
              <input className={errors.email && touched.email && "error"} type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="enter your email"></input>
              {errors.email && touched.email && (
                <div className="input-feedback">
                  {errors.email}
                </div>
              )}
              <label htmlFor="Age"> Age</label>
              <input className={errors.name && touched.Age && "error"} type="number" name="age" onChange={handleChange} onBlur={handleBlur} value={values.Age} placeholder="enter your Age"></input>
              <div className="input-feedback">
                {errors.Age}
              </div>
              <label htmlFor="phone"> phone</label>
              <input className={errors.phone && touched.phone && "error"} type="number" name="phonenumber" onChange={handleChange} value={values.phonel} placeholder="enter your phone number"></input>
              <div className="input-feedback">
                {errors.phone}
              </div>
              <label htmlFor="name"> Name</label>
              <input className={errors.name && touched.name && "error"} type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="enter your name"></input>
              <div className="input-feedback">
                {errors.name}
              </div>
              <label htmlFor="password"> Password</label>
              <input className={errors.password && touched.password && "error"} type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="enter your password"></input>
              <div className="input-feedback">
                {errors.password}
              </div>
              <div>
                <button type="submit" onClick={handleSubmit} issubmitting={isSubmitting}>Register</button>
              </div>
            </Form>
          </div>
        )
      }}
    </Formik>
  </div>
);

export default Basic;

// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Required'),
// });

// export const ValidationSchemaExample = () => (
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="firstName" />
//           {errors.firstName && touched.firstName ? (
//             <div>{errors.firstName}</div>
//           ) : null}
//           <Field name="lastName" />
//           {errors.lastName && touched.lastName ? (
//             <div>{errors.lastName}</div>
//           ) : null}
//           <Field name="email" type="email" />
//           {errors.email && touched.email ? <div>{errors.email}</div> : null}
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default ValidationSchemaExample