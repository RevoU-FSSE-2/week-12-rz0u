import * as Yup from "yup";

const validationSchema = Yup.object().shape({
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
  streetAddress: Yup.string().required("Please fill in your Street Address"),
  city: Yup.string().required("Please fill in your City"),
  state: Yup.string().required("Please fill in your State"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "ZIP code must be 5 digits")
    .required("Please fill in your Zip Code"),
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

export default validationSchema;
