import { useFormik } from "formik";
import { Card, Text, Input } from "../../components";
import * as Yup from "yup";

interface AddressValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

const initialValues = {
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
};

const validationSchema = Yup.object({
  streetAddress: Yup.string().required("Please fill in your Street Address"),
  city: Yup.string().required("Please fill in your City"),
  state: Yup.string().required("Please fill in your State"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "ZIP code must be 5 digits")
    .required("Please fill in your Zip Code"),
});

const AddressForm = () => {
  const handleSubmit = (values: AddressValues) => {
    console.log(values);
  };

  const forMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Card title={"Address Information"}>
      <form onSubmit={forMik.handleSubmit}>
        <div>
          <Text>Street Address:</Text>
          <Input
            name={"streetAddress"}
            value={forMik.values.streetAddress}
            onChange={forMik.handleChange("streetAddress")}
            status={forMik.errors.streetAddress && "error"}
          />
          {forMik.errors.streetAddress && (
            <Text>{forMik.errors.streetAddress}</Text>
          )}{" "}
        </div>
        <div>
          <Text>City:</Text>
          <Input
            name={"city"}
            value={forMik.values.city}
            onChange={forMik.handleChange("city")}
            status={forMik.errors.city && "error"}
          />
          {forMik.errors.city && <Text>{forMik.errors.city}</Text>}{" "}
        </div>
        <div>
          <Text>State:</Text>
          <Input
            name={"state"}
            value={forMik.values.state}
            onChange={forMik.handleChange("state")}
            status={forMik.errors.state && "error"}
          />
          {forMik.errors.state && <Text>{forMik.errors.state}</Text>}{" "}
        </div>
        <div>
          <Text>Zip Code:</Text>
          <Input
            name={"zipCode"}
            value={forMik.values.zipCode}
            onChange={forMik.handleChange("zipCode")}
            status={forMik.errors.zipCode && "error"}
          />
          {forMik.errors.zipCode && <Text>{forMik.errors.zipCode}</Text>}{" "}
        </div>
      </form>
    </Card>
  );
};

export default AddressForm;

// import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
// import { Form, Input, Button } from "antd";
// import validationSchema from "../../validationSchema";

// interface AddressValues {
//   streetAddress: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

// function AddressForm() {
//   return (
//     <Formik
//       initialValues={{
//         streetAddress: "",
//         city: "",
//         state: "",
//         zipCode: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(
//         values: AddressValues,
//         { setSubmitting }: FormikHelpers<AddressValues>
//       ) => {
//         console.log("Address Form Values:", values);
//         setSubmitting(false);
//       }}
//     >
//       {() => (
//         <Form>
//           <div>
//             <label htmlFor="streetAddress">Street Address</label>
//             <Field type="text" name="streetAddress" as={Input} />
//             <ErrorMessage name="streetAddress" component="div" />
//           </div>
//           <div>
//             <label htmlFor="city">City</label>
//             <Field type="text" name="city" as={Input} />
//             <ErrorMessage name="city" component="div" />
//           </div>
//           <div>
//             <label htmlFor="state">State</label>
//             <Field type="text" name="state" as={Input} />
//             <ErrorMessage name="state" component="div" />
//           </div>
//           <div>
//             <label htmlFor="zipCode">Zip Code</label>
//             <Field type="text" name="zipCode" as={Input} />
//             <ErrorMessage name="zipCode" component="div" />
//           </div>
//           <Button htmlType="submit" type="primary">
//             Next
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default AddressForm;
