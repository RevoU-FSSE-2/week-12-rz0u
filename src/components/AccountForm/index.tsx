import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card } from "../../components";
import * as Yup from "yup";
import { useState } from "react";
import { Button, Input } from "antd";

interface AccountValues {
  username: string;
  password: string;
}

interface AccountData {
  goBack: () => void;
  goNext: () => void;
  onFinish: (data: { username: string; password: string }) => void;
}

const AccountForm: React.FC<AccountData> = ({ goBack, goNext, onFinish }) => {
  const [formData, setFormData] = useState<AccountValues>({
    username: "",
    password: "",
  });

  return (
    <Card title={"Account Information"}>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          username: Yup.string()
            .matches(
              /^[a-zA-Z0-9_]+$/,
              "Username can only contain letters, numbers, and underscores"
            )
            .required("Please fill in your desired Username"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
              "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
            )
            .required("Please fill in your desired Password"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const areAnyValuesEmpty = Object.values(values).some(
            (value) => value === ""
          );

          if (areAnyValuesEmpty) {
            setSubmitting(false);
          } else {
            setFormData({ ...formData, ...values });
            onFinish(values);
            goNext();
            alert("Finished filling week 12 form");
          }
        }}
      >
        <Form>
          <Card title={"Username:"}>
            <Field as={Input} type="text" name="username" />
            <ErrorMessage as={Text} name="username" />
          </Card>
          <Card title={"Password:"}>
            <Field as={Input} type="password" name="password" />
            <ErrorMessage as={Text} name="password" />
          </Card>
          <Button onClick={goBack}>Previous</Button>
          <Button type="primary" htmlType="submit">
            Finish
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};

export default AccountForm;
