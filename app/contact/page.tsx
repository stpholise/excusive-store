"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const page = () => {
  const validationSchema = Yup.object({
    name: Yup.string(),
    phone: Yup.string().matches(
      /^[0-9]+$/,
      "Phone number must contain only digits"
    ),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("This field is required"),
    message: Yup.string()
      .min(10, "message is too short ")
      .required("Message is required "),
  });

  const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    resetForm();
  };

  return (
    <div className="flex flex-col md:flex-row py-16 contianer mx-auto justify-center gap-9 lg:px-8 px-4">
      <div className="w-full xs:w-80 sm:w-96 px-4 py-4 rounded-sm flex flex-col  justify-center gap-8 bg-[#f4f4f4]">
        <div className="flex flex-col gap-2">
          <h4 className="callToUse capitalize font-semibold">Call to Us</h4>
          <p>we are availbible 24/7 days a week </p>
          <p className="">Phone: +234232302939</p>
        </div>
        <div className="border"></div>
        <div className="flex flex-col gap-2">
          <h4 className="capitalize font-semibold">write to Us</h4>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="">Emails: customer@exclusive.com</p>
          <p className="">Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="bg-white py-8 px-4 sm:px-9 shadow">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="flex flex-col gap-8 ">
              <div className=" flex gap-4 flex-col md:flex-row">
                <div className="relative bg-[#f5f5f5] z-0">
                  <Field
                    type="text"
                    aria-label="name "
                    name="name"
                    placeholder="enter you name"
                    className="px-3 py-2 bg-[#f5f5f5] w-full outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className="absolute bottom-0 text-xs text-red-600"
                  />
                </div>
                <div className="relative z-0 bg-[#f5f5f5]">
                  <Field
                    type="text"
                    name="phone"
                    aria-label="phone "
                    placeholder="+234********"
                    className="px-3 py-2 bg-[#f5f5f5] w-full outline-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component={"div"}
                    className="absolute bottom-0 text-xs text-red-600"
                  />
                </div>
                <div className="relative bg-[#f5f5f5] z-0">
                  <Field
                    type="text"
                    aria-label="name "
                    name="email"
                    placeholder="example@abc.com"
                    className="px-3 py-2 bg-[#f5f5f5] w-full outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className="absolute bottom-0 text-xs text-red-600"
                  />
                </div>
              </div>
              <Field
                as="textarea"
                aria-label="text area"
                name="message"
                id=""
                placeholder="write a  message"
                className="px-3 py-2 bg-[#f5f5f5] h-52 outline-none "
              />
              <div className=" flex justify-center md:justify-end w-full">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty}
                  className={clsx(
                    " w-56 px-6 py-2 rounded-sm text-white outline-none",
                    {
                      "bg-gray-400 cursor-not-allowed":
                        isSubmitting || !isValid || !dirty,
                      "bg-red-600 hover:bg-red-700":
                        !isSubmitting && isValid && dirty,
                    }
                  )}
                >
                  send message
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default page;
