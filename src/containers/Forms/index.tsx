import React, { useState } from "react";
import { PersonalForm, AddressForm, AccountForm } from "../../components";

interface FormData {
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

const Forms: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    emailAddress: "",
    birthDate: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  });

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleData = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {currentStep === 1 && <PersonalForm goNext={next} />}
      {currentStep === 2 && <AddressForm goBack={prev} goNext={next} />}
      {currentStep === 3 && (
        <AccountForm goBack={prev} goNext={next} onFinish={handleData} />
      )}
    </div>
  );
};

export default Forms;
