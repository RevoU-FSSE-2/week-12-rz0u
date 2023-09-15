import { useFormik } from "formik";
import { Card, Text, Input, Button } from "../../components";
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
  birthDate: Yup.string()
    .nullable()
    .required("Please fill in your Date of Birth")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Invalid date format. Use DD/MM/YYYY."
    )
    .test("isNotFutureDate", "Date cannot be in the future", function (value) {
      if (!value) return true;

      const [day, month, year] = value.split("/").map(Number);

      const enteredDate = new Date(year, month - 1, day);

      const currentDate = new Date();

      return enteredDate <= currentDate;
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
      <form onSubmit={forMik.handleSubmit}>
        <div>
          <Text>Full Name:</Text>
          <Input
            name={"fullName"}
            value={forMik.values.fullName}
            onChange={forMik.handleChange("fullName")}
            status={forMik.errors.fullName && "error"}
            placeholder="John Doe"
          />
          {forMik.errors.fullName && (
            <Text font="secondary">{forMik.errors.fullName}</Text>
          )}
        </div>
        <div>
          <Text>Email Address:</Text>
          <Input
            name={"emailAddress"}
            value={forMik.values.emailAddress}
            onChange={forMik.handleChange("emailAddress")}
            status={forMik.errors.emailAddress && "error"}
            placeholder="johndoe@gmail.com"
          />
          {forMik.errors.emailAddress && (
            <Text font="secondary">{forMik.errors.emailAddress}</Text>
          )}
        </div>
        <div>
          <Text>Date of Birth:</Text>
          <Input
            name={"birthDate"}
            value={forMik.values.birthDate}
            onChange={forMik.handleChange("birthDate")}
            status={forMik.errors.birthDate && "error"}
            placeholder="21/05/1981"
          />
          {forMik.errors.birthDate && (
            <Text font="secondary">{forMik.errors.birthDate}</Text>
          )}
        </div>
        <Button type="default" htmlType="submit" children={undefined}></Button>
      </form>
    </Card>
  );
};

export default PersonalForm;
