"use client";
import React, { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { motion } from "framer-motion";
// import { SectionAnimate } from "../motionAnimate";
// import MotionDiv from "../motionDiv";
// import Alert from "../alert";
import { buttonVariants, Button } from "@/components/ui/button";
const emailSchema = Yup.object().shape({
  userEmail: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  organization: Yup.string().required("Required"),
  emailBody: Yup.string().required("Required"),
});

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const autoClose = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(autoClose);
  }, [isOpen]);

  return (
    <div className="">
      <Formik
        initialValues={{
          userEmail: "",
          username: "",
          organization: "",
          subject: "",
          emailBody: "",
        }}
        validationSchema={emailSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          setSubmitting(false);

          if (response.ok) {
            const data = await response.json();
            setIsOpen(true);
            setResponseMessage(`Success: ${data.message}`);
          } else {
            const errorData = await response.json();
            setIsOpen(true);
            setResponseMessage(
              `Error: ${errorData.error || "Something went wrong"}`
            );
          }
          resetForm();
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto space-y-6"
          >
            {/* Alert */}
            {isOpen && (
              <Alert responseMessage={responseMessage} setIsOpen={setIsOpen} />
            )}
            {/* Alert End */}
            <div className="flex flex-col">
              <label className="hero-paragraph text-black" htmlFor="userEmail">
                Email
              </label>
              <Field
                className={`block w-full hero-paragraph bg-gray-100 py-4 mt-2 px-4  rounded-lg text-black  ${
                  touched.userEmail && errors.userEmail ? "border-red-500" : ""
                } `}
                id="userEmail"
                name="userEmail"
                placeholder="example@company.com"
              />
              <ErrorMessage className="text-red-500" name="userEmail">
                {(msg) => (
                  <p className="text-xs text-red-500 mb-0 mt-2">{msg}*</p>
                )}
              </ErrorMessage>
            </div>

            <div className="name flex flex-col lg:flex-row lg:gap-6">
              <div className="grow mb-8  lg:mb-0">
                <label className="hero-paragraph text-black" htmlFor="username">
                  Name
                </label>
                <Field
                  className={`w-full hero-paragraph bg-gray-100 py-4 px-4 mt-2  rounded-lg  ${
                    touched.username && errors.username ? "border-red-500" : ""
                  } `}
                  id="username"
                  name="username"
                  placeholder="Your Name"
                />
                <ErrorMessage className="text-red-500" name="username">
                  {(msg) => (
                    <p className="text-xs text-red-500 mb-0 mt-2">{msg}*</p>
                  )}
                </ErrorMessage>
              </div>

              <div className="grow">
                <label
                  className="hero-paragraph text-black"
                  htmlFor="organization"
                >
                  Organization
                </label>
                <Field
                  className={`w-full hero-paragraph bg-gray-100 py-4 px-4 mt-2  rounded-lg ${
                    touched.organization && errors.organization
                      ? "border-red-500"
                      : ""
                  } `}
                  id="organization"
                  name="Organization"
                  placeholder="organization"
                />
                <ErrorMessage className="text-red-500" name="organization">
                  {(msg) => (
                    <p className="text-xs text-red-500 mb-0 mt-2">{msg}*</p>
                  )}
                </ErrorMessage>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="hero-paragraph text-black" htmlFor="subject">
                Subject
              </label>
              <Field
                className={`w-full hero-paragraph bg-gray-100 py-4 px-4 mt-2  rounded-lg ${
                  touched.subject && errors.subject ? "border-red-500" : ""
                } `}
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <ErrorMessage className="text-red-500" name="subject">
                {(msg) => (
                  <p className="text-xs text-red-500 mb-0 mt-2">{msg}*</p>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col w-full">
              <label className="hero-paragraph text-black" htmlFor="subject">
                Message :
              </label>
              <Field
                className={`w-full hero-paragraph bg-gray-100 py-4 px-4 mt-2  rounded-lg ${
                  touched.emailBody && errors.emailBody ? "border-red-500" : ""
                } `}
                id="emailBody"
                as="textarea"
                name="emailBody"
                placeholder=""
                cols="30"
                rows="10"
              />
              <ErrorMessage className="text-red-500" name="emailBody">
                {(msg) => (
                  <p className="text-xs text-red-500 mb-0 mt-2">{msg}*</p>
                )}
              </ErrorMessage>
            </div>
            <div className="w-full">
              <Button
                disabled={isSubmitting}
                type="submit"
                className={`w-full gradient-bg text-lg p-8 mt-4 rounded-full ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
