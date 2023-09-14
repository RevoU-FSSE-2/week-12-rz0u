import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { Form, Input, Button } from "antd";
import validationSchema from "../../validationSchema";

interface AccountValues {
  username: string;
  password: string;
}

function AccountForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: AccountValues,
        { setSubmitting }: FormikHelpers<AccountValues>
      ) => {
        console.log("Account Form Values:", values);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" as={Input} />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" as={Input} />
            <ErrorMessage name="password" component="div" />
          </div>
          <Button htmlType="submit" type="primary">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AccountForm;
