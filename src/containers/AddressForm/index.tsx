import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { Form, Input, Button } from "antd";
import validationSchema from "../../validationSchema";

interface AddressValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

function AddressForm() {
  return (
    <Formik
      initialValues={{
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: AddressValues,
        { setSubmitting }: FormikHelpers<AddressValues>
      ) => {
        console.log("Address Form Values:", values);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <Field type="text" name="streetAddress" as={Input} />
            <ErrorMessage name="streetAddress" component="div" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Field type="text" name="city" as={Input} />
            <ErrorMessage name="city" component="div" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <Field type="text" name="state" as={Input} />
            <ErrorMessage name="state" component="div" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <Field type="text" name="zipCode" as={Input} />
            <ErrorMessage name="zipCode" component="div" />
          </div>
          <Button htmlType="submit" type="primary">
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddressForm;
