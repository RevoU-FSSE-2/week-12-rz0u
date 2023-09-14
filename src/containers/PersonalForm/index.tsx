import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { Form, Input, Button } from "antd";
import validationSchema from "../../validationSchema";

interface PersonalValues {
  fullName: string;
  emailAddress: string;
  birthDate: string;
}

function PersonalForm() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        emailAddress: "",
        birthDate: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: PersonalValues,
        { setSubmitting }: FormikHelpers<PersonalValues>
      ) => {
        console.log("Personal Form Values:", values);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field type="text" name="fullName" as={Input} />
            <ErrorMessage name="fullName" component="div" />
          </div>
          <div>
            <label htmlFor="emailAddress">Email Address</label>
            <Field type="email" name="emailAddress" as={Input} />
            <ErrorMessage name="emailAddress" component="div" />
          </div>
          <div>
            <label htmlFor="birthDate">Date of Birth</label>
            <Field type="date" name="birthDate" as={Input} />
            <ErrorMessage name="birthDate" component="div" />
          </div>
          <Button htmlType="submit" type="primary">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalForm;
