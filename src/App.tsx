import { FormEvent } from "react";
import { Button, Card, MultiStepContainer } from "./components";
import { PersonalForm, AddressForm, AccountForm } from "./containers";
// import { useFormik } from "formik";

interface InitialFormValues {
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

const InitialFormValues: InitialFormValues = {
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
  // const [data, setData] = useState(InitialFormValues);
  const multiStep = MultiStepContainer([
    <PersonalForm />,
    <AddressForm />,
    <AccountForm />,
  ]);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    multiStep;
  // const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //   MultiStepContainer([<PersonalForm />, <AddressForm />, <AccountForm />]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Finished!!!");
  }
  return (
    <>
      <PersonalForm>
    </>
  );
}

export default App;
