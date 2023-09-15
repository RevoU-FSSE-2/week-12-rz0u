// import { useState } from "react";
// import { Card, Space, Button } from "./components";
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
  return (
    <>
      <PersonalForm></PersonalForm>
      <AddressForm></AddressForm>
      <AccountForm></AccountForm>
    </>
  );
}

export default App;
