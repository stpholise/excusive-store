"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "@/app/store/slices/userSlice";
import { RootState } from "@/app/store";

interface InitialValue {
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().min(3, "at least 3 alphabets").required("Required"),
  lastName: Yup.string()
    .min(3, "at least 3 alphabets")
    .max(25, "must be less than 15 characters ")
    .required(),
  email: Yup.string().email("Invalid Email address").required("Required"),
  address: Yup.string(),
});

interface Values {
  firstName: string;
  email: string;
  currentPassword: string;
}

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleProfileUpdate = (values: Values) => {
    const { firstName: name, currentPassword: password, email } = values;
    dispatch(loginSuccess({ name, password, email }));
  };

  const initialValue: InitialValue = {
    firstName: "",
    lastName: user?.name || "",
    email: user?.email || "",
    adress: "",
    currentPassword: user?.password || "",
    newPassword: "",
    confirmPassword: "",
  };

  return (
    <div className="md:px-4 lg:px-12 py-12">
      <h2 className="text-red-400 font-bold text-3xl"> Edit Your Profile</h2>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleProfileUpdate}
      >
        <Form>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-6 md:gap-y-4 lg:gap-x-10 gap-y-5 py-8 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                placeholder="Mdew"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2 outline-none "
                type="text"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage
                  name="firstName"
                  className="text-sm text-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                placeholder="Rimel"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2   outline-none "
                type="text"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage
                  name="lastName"
                  className="text-sm text-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                placeholder="rimel1111@gmail.com"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2  outline-none "
                type="email"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage name="email" className="text-sm text-red-400" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <Field
                name="address"
                placeholder="Kingston, 5236, United State"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2  outline-none "
                type="text"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage name="address" component="div" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className=""> Password Changes</p>
            <div className="">
              <Field
                type="password"
                name="currentPassword"
                placeholder="Current Passwod"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2  outline-none "
              />
              <ErrorMessage name="currentPassword" />
            </div>
            <div className="">
              <Field
                name="newPassword"
                placeholder="New Passwod"
                className="bg-[#f5f5f5] w-full rounded-md lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2  outline-none "
                type="password"
              />
              <ErrorMessage name="newPassword" />
            </div>
            <div className="">
              <Field
                name="confirmPassword"
                placeholder="Confirm New Passwod"
                className="bg-[#f5f5f5] w-full rounded-md  lg:px-4 lg:py-3 sm:px-3 sm:py-2 px-3 py-2   outline-none "
                type="password"
              />
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>
          <div className="flex justify-end item-center py-8 gap-8 ">
            <div className="flex items-center">
              <button className="cancel w-20">Cancel</button>
            </div>
            <div className="h-9">
              <button
                type="submit"
                className="text-white block     bg-red-600 lg:px-4 lg:py-3 md:px-6 md:py-2  px-12 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
