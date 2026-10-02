import { object, string } from "yup";

const schema = object({
  email: string()
    .required("მეილი არის სავალდებულო ველი")
    .email("თქვენს მიერ შეყვანილი მეილი არავალიდურია"),

  password: string()
    .required("პაროლი არის სავალდებულო ველი")
    .min(8, "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),

    
});

export default schema;
