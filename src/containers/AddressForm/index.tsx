import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card, Text, Input, Button } from "../../components";
import * as Yup from "yup";
import { useState } from "react";

interface AddressValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddressData {
  goBack: () => void;
  goNext: () => void;
}

const AddressForm: React.FC<AddressData> = ({ goBack, goNext }) => {
  const [formData, setFormData] = useState<AddressValues>({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  return (
    <Card title={"Personal Information"}>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          streetAddress: Yup.string().required(
            "Please fill in your Street Address"
          ),
          city: Yup.string().required("Please fill in your City"),
          state: Yup.string().required("Please fill in your State"),
          zipCode: Yup.string()
            .matches(/^\d{5}$/, "ZIP code must be 5 digits")
            .required("Please fill in your Zip Code"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const areAnyValuesEmpty = Object.values(values).some(
            (value) => value === ""
          );

          if (areAnyValuesEmpty) {
            setSubmitting(false);
          } else {
            setFormData({ ...formData, ...values });
            goNext();
          }
        }}
      >
        <Form>
          <Card title={"Street Address:"}>
            <Field as={Input} type="text" name="streetAddress" />
            <ErrorMessage
              as={Text({ font: "secondary" })}
              name="streetAddress"
            />
          </Card>
          <Card title={"City:"}>
            <Field as={Input} type="text" name="city" />
            <ErrorMessage as={Text({ font: "secondary" })} name="city" />
          </Card>
          <Card title={"State:"}>
            <Field as={Input} type="text" name="state" />
            <ErrorMessage as={Text({ font: "secondary" })} name="state" />
          </Card>
          <Card title={"Zip Code:"}>
            <Field as={Input} type="text" name="zipCode" />
            <ErrorMessage as={Text({ font: "secondary" })} name="zipCode" />
          </Card>
          <Button onClick={goBack}>Previous</Button>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};

export default AddressForm;
