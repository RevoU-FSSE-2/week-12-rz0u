import { useFormik } from "formik";
import { Card, Text, Input, Button, Space } from "../../components";
import * as Yup from "yup";

interface PersonalValues {
  fullName: string;
  emailAddress: string;
  birthDate: string;
}

const initialValues = {
  fullName: "",
  emailAddress: "",
  birthDate: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Please fill in your Full Name"),
  emailAddress: Yup.string()
    .email("Invalid Email Address")
    .required("Please fill in your Email Address"),
  birthDate: Yup.date()
    .nullable()
    .required("Please fill in your Date of Birth")
    .max(new Date(), "Cannot be filled with future dates")
    .test("age", "You must be at least 18 years old", function (value) {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }),
});

const PersonalForm = () => {
  const handleSubmit = (values: PersonalValues) => {
    console.log(values);
  };

  const forMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Card title={"Personal Information"}>
      <Space>
        <form onSubmit={forMik.handleSubmit}>
          <div>
            <Text>Full Name:</Text>
            <Input
              name={"fullName"}
              value={forMik.values.fullName}
              onChange={forMik.handleChange("fullName")}
              status={forMik.errors.fullName && "error"}
            />
            {forMik.errors.fullName && (
              <Text font="secondary">{forMik.errors.fullName}</Text>
            )}{" "}
          </div>
          <div>
            <Text>Email Address:</Text>
            <Input
              name={"emailAddress"}
              value={forMik.values.emailAddress}
              onChange={forMik.handleChange("emailAddress")}
              status={forMik.errors.emailAddress && "error"}
            />
            {forMik.errors.emailAddress && (
              <Text font="secondary">{forMik.errors.emailAddress}</Text>
            )}{" "}
          </div>
          <div>
            <Text>Date of Birth:</Text>
            <Input
              name={"birthDate"}
              value={forMik.values.birthDate}
              onChange={forMik.handleChange("birthDate")}
              status={forMik.errors.birthDate && "error"}
            />
            {forMik.errors.birthDate && (
              <Text font="secondary">{forMik.errors.birthDate}</Text>
            )}{" "}
          </div>
          <br />
          <Button type={"primary"} htmlType={"submit"}>
            Next
          </Button>
        </form>
      </Space>
    </Card>
  );
};

export default PersonalForm;
