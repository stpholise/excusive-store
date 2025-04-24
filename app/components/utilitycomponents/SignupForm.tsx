"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { signupSuccess } from "@/app/store/slices/userSlice";
import clsx from "clsx";

interface User {
  id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
  password: string;
}

const PASSWORD_RULES = {
  minLength: 8,
  requireLowercase: true,
  requireUppercase: true,
  requireNumber: true,
  requireSpecialChar: true,
  specialChars: "@$!%*?&", // Customize allowed special characters
};

const PASSWORD_REGEX = new RegExp(
  `^(?=(.*[a-z])${PASSWORD_RULES.requireLowercase ? "{1,}" : "*"})` +
    `(?=(.*[A-Z])${PASSWORD_RULES.requireUppercase ? "{1,}" : "*"})` +
    `(?=(.*\\d)${PASSWORD_RULES.requireNumber ? "{1,}" : "*"})` +
    `(?=(.*[${PASSWORD_RULES.specialChars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}])` +
    `${PASSWORD_RULES.requireSpecialChar ? "{1,}" : "*"})` +
    `[A-Za-z\\d${PASSWORD_RULES.specialChars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}]` +
    `{${PASSWORD_RULES.minLength},}$`,
);

const PASSWORD_ERROR_MESSAGE = [
  `Must be at least ${PASSWORD_RULES.minLength} characters`,
  PASSWORD_RULES.requireLowercase ? "1 lowercase letter" : null,
  PASSWORD_RULES.requireUppercase ? "1 uppercase letter" : null,
  PASSWORD_RULES.requireNumber ? "1 number" : null,
  PASSWORD_RULES.requireSpecialChar
    ? `1 special character (${PASSWORD_RULES.specialChars})`
    : null,
]
  .filter(Boolean)
  .join(", ");

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const determineRole = (name: string): "user" | "admin" => {
    return name.toLowerCase().endsWith("admin") ? "admin" : "user";
  };
  const signupValidation = Yup.object({
    name: Yup.string()
      .trim()
      .required("name cannot be empty")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("enter a valid email format")
      .required("email cannot be empty")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must not contain spaces"),
    password: Yup.string()
      .required("Password is required")
      .min(
        PASSWORD_RULES.minLength,
        `Password must be at least ${PASSWORD_RULES.minLength} characters`,
      )
      .matches(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
  });

  const initialValues: User = {
    id: uuidv4(),
    name: "",
    email: "",
    role: "user",
    password: "",
  };

  const handleSignup = async (values: User) => {
    // Determine role based on name
    const role = determineRole(values.name);

    const userData = {
      ...values,
      role,
    };
    await dispatch(
      signupSuccess({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        password: userData.password,
      }),
    );
    router.push(role === "admin" ? "/studio" : "/");
  };

  return (
    <div>
      <Formik
        onSubmit={handleSignup}
        initialValues={initialValues}
        validationSchema={signupValidation}
      >
        {(formik) => (
          <Form action="" className="flex flex-col gap-10 mt-12">
            <div className="">
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                className=" outline-none border-b-2 border-gray-400 p-2 w-full  "
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div className="">
              <Field
                type="text"
                name="email"
                placeholder="Email eg@mail.com"
                className=" outline-none border-b-2 border-gray-400 p-2 w-full  "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div className="">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="outline-none border-b-2 border-gray-400 p-2 w-full "
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-400"
              />
            </div>
            <div className=" flex flex-col gap-4">
              <button
                disabled={formik.isSubmitting || !formik.isValid}
                className={clsx(" text-white py-3 px-14 rounded-md", {
                  "bg-gray-400": formik.isSubmitting || !formik.isValid,
                  "bg-red-500": !(formik.isSubmitting || !formik.isValid),
                })}
                type="submit"
              >
                Create Account
              </button>
              <button className="bg-transparent text-black border-2 border-gray-400 py-3 px-14 rounded-md">
                Sign up with Google
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
