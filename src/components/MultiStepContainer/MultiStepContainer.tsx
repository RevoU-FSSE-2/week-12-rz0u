import { useState } from "react";
import { Steps, Button } from "antd";
import { PersonalForm, AddressForm, AccountForm } from "../../containers";

const { Step } = Steps;

function MultiStepFormContainer() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <Steps
        direction="vertical"
        items={[
          {
            title: "Finished",
          },
          {
            title: "In Progress",
          },
          {
            title: "Waiting",
          },
        ]}
        current={currentStep}
      >
        <Step title="Personal Information" />
        <Step title="Address Information" />
        <Step title="Account Information" />
      </Steps>
      <div>
        {currentStep === 0 && <PersonalForm />}
        {currentStep === 1 && <AddressForm />}
        {currentStep === 2 && <AccountForm />}
        <div>
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 1 ? (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepFormContainer;
