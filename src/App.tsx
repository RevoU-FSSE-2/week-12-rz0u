import { useState } from "react";
import { Card, Space, Button } from "./components";
import { PersonalForm, AddressForm, AccountForm } from "./containers";
// import { useFormik } from "formik";

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
  const [step, setStep] = useState<number>(1);
  const handleNext = () => {
    if (step === 1 || step === 2) {
      setStep((prev) => prev + 1);
    }
    return;
  };
  const handlePrev = () => {
    if (step === 2 || step === 3) {
      setStep((prev) => prev - 1);
    }
    return;
  };
  return (
    <Card title="Intermediate Assignment Week 12">
      <div>
        {step === 1 && <PersonalForm />}
        {step === 2 && <AddressForm />}
        {step === 3 && <AccountForm />}
      </div>
      <Space direction="vertical">
        <Space wrap>
          {step === 2 && (
            <div>
              <Button onClick={handlePrev}>Previous</Button>
              <Button onClick={handleNext} type={"primary"}>
                Next
              </Button>
            </div>
          )}

          {step === 1 && (
            <Button onClick={handleNext} type={"primary"}>
              Next
            </Button>
          )}

          {step === 3 && (
            <div>
              <Button onClick={handlePrev}>Previous</Button>
            </div>
          )}
        </Space>
      </Space>
    </Card>
  );
}

export default App;
