import { useFormik } from "formik";
import { Card, Text, Input, Button } from "../../components";
import * as Yup from "yup";

interface AccountValues {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
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
});

const AccountForm = () => {
  const handleSubmit = (values: AccountValues) => {
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
          <Text>Username:</Text>
          <Input
            name={"username"}
            value={forMik.values.username}
            onChange={forMik.handleChange("username")}
            status={forMik.errors.username && "error"}
          />
          {forMik.errors.username && <Text>{forMik.errors.username}</Text>}{" "}
        </div>
        <div>
          <Text>Password:</Text>
          <Input
            name={"password"}
            value={forMik.values.password}
            onChange={forMik.handleChange("password")}
            status={forMik.errors.password && "error"}
          />
          {forMik.errors.password && <Text>{forMik.errors.password}</Text>}{" "}
        </div>
        <Button type={"primary"} htmlType={"submit"}>
          Next
        </Button>
      </form>
    </Card>
  );
};

export default AccountForm;

// import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
// import { Form, Input, Button } from "antd";
// import validationSchema from "../../validationSchema";

// interface AccountValues {
//   username: string;
//   password: string;
// }

// function AccountForm() {
//   return (
//     <Formik
//       initialValues={{
//         username: "",
//         password: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(
//         values: AccountValues,
//         { setSubmitting }: FormikHelpers<AccountValues>
//       ) => {
//         console.log("Account Form Values:", values);
//         setSubmitting(false);
//       }}
//     >
//       {() => (
//         <Form>
//           <div>
//             <label htmlFor="username">Username</label>
//             <Field type="text" name="username" as={Input} />
//             <ErrorMessage name="username" component="div" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <Field type="password" name="password" as={Input} />
//             <ErrorMessage name="password" component="div" />
//           </div>
//           <Button htmlType="submit" type="primary">
//             Next
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default AccountForm;
