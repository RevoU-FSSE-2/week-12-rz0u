import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card, Text, Input, Button } from "../../components";
import * as Yup from "yup";
import { useState } from "react";

interface PersonalValues {
  fullName: string;
  emailAddress: string;
  birthDate: string;
}

interface PersonalData {
  goNext: () => void;
}

const PersonalForm: React.FC<PersonalData> = ({ goNext }) => {
  const [formData, setFormData] = useState<PersonalValues>({
    fullName: "",
    emailAddress: "",
    birthDate: "",
  });

  return (
    <Card title={"Personal Information"}>
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
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
            .test(
              "isNotFutureDate",
              "Date cannot be in the future",
              function (value) {
                if (!value) return true;

                const [day, month, year] = value.split("/").map(Number);

                const enteredDate = new Date(year, month - 1, day);

                const currentDate = new Date();

                return enteredDate <= currentDate;
              }
            ),
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
          <Card title={"Full Name:"}>
            <Field as={Input} type="text" name="fullName" />
            <ErrorMessage as={Text({ font: "secondary" })} name="fullName" />
          </Card>
          <Card title={"Email Address:"}>
            <Field as={Input} type="email" name="emailAddress" />
            <ErrorMessage
              as={Text({ font: "secondary" })}
              name="emailAddress"
            />
          </Card>
          <Card title={"Date of Birth:"}>
            <Field as={Input} type="text" name="birthDate" />
            <ErrorMessage as={Text({ font: "secondary" })} name="birthDate" />
          </Card>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};

export default PersonalForm;

// const PersonalForm1 = () => {
//   const handleSubmit = (values: PersonalValues) => {
//     console.log(values);
//     alert("submit");
//   };
//   const forMik = useFormik({
//     initialValues: initialValues,
//     onSubmit: handleSubmit,
//     validationSchema: validationSchema,
//   });
//   console.log(forMik.values);

//   return (
//     <Card title={"Personal Information"}>
//       <form onSubmit={forMik.handleSubmit}>
//         <div>
//           <Text>Full Name:</Text>
//           <Input
//             name={"fullName"}
//             value={forMik.values.fullName}
//             onChange={forMik.handleChange("fullName")}
//             status={forMik.errors.fullName && "error"}
//             placeholder="John Doe"
//           />
//           {forMik.errors.fullName && (
//             <Text font="secondary">{forMik.errors.fullName}</Text>
//           )}
//         </div>
//         <div>
//           <Text>Email Address:</Text>
//           <Input
//             name={"emailAddress"}
//             value={forMik.values.emailAddress}
//             onChange={forMik.handleChange("emailAddress")}
//             status={forMik.errors.emailAddress && "error"}
//             placeholder="johndoe@gmail.com"
//           />
//           {forMik.errors.emailAddress && (
//             <Text font="secondary">{forMik.errors.emailAddress}</Text>
//           )}
//         </div>
//         <div>
//           <Text>Date of Birth:</Text>
//           <Input
//             name={"birthDate"}
//             value={forMik.values.birthDate}
//             onChange={forMik.handleChange("birthDate")}
//             status={forMik.errors.birthDate && "error"}
//             placeholder="21/05/1981"
//           />
//           {forMik.errors.birthDate && (
//             <Text font="secondary">{forMik.errors.birthDate}</Text>
//           )}
//         </div>
//         <Button type="default" htmlType={"submit"}>
//           Submit
//         </Button>
//       </form>
//     </Card>
//   );
// };
