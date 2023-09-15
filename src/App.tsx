import { useState } from "react";
import { Card } from "./components";
import {
  PersonalForm,
  AddressForm,
  AccountForm,
  MultiStepContainer,
} from "./containers";
import { useFormik } from "formik";

interface InitialValues {
  fullName: string;
  emailAddress: string;
  birthDate: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

const InitialValues: InitialValues = {
  fullName: "",
  emailAddress: "",
  birthDate: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  username: "",
  password: "",
};

function App() {
  const [data, setData] = useState(InitialValues);
  const handleSubmit = (values: InitialValues) => {
    console.log(values);
  };

  const forMik = useFormik({
    initialValues: InitialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    MultiStepContainer([<PersonalForm />, <AddressForm />, <AccountForm />]);
  return (
    <>
      <Card>
        <div>
          <form onSubmit={forMik.handleSubmit}>
            <PersonalForm></PersonalForm>
          </form>
        </div>
        <div>
          <AddressForm></AddressForm>
        </div>
        <div>
          <AccountForm></AccountForm>
        </div>
      </Card>
    </>
  );
}

export default App;
