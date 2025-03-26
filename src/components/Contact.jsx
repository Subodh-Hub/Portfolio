import Title from "./Title";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!!!"),
      message: Yup.string().required("Message is required!!!"),
    }),

    onSubmit: (values, { resetForm }) => {
      if (formik.dirty && formik.isValid) {
        emailjs
          .send(
            "service_9bxmowm",
            "template_kj04hn1",
            values,
            "j6BKmdCXvX_oBPftJ"
          )
          .then(
            (result) => {
              toast.success("Message sent successfully!");
              resetForm();
            },
            (error) => {
              toast.error("Failed to send message: " + error.text);
            }
          );
      }
    },
  });

  return (
    <div className="px-5 xl:px-40 lg:px-10" id="contact">
      <Title title="Contact" />
      <div className="max-w-2xl m-auto py-10 px-5 mt-20 rounded-md border-3 border-[#678D58]">
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email: <span className="text-red-600">*</span>
            </label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">
              Message: <span className="text-red-600">*</span>
            </label>
            <Textarea
              name="message"
              placeholder="Type your message here."
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="flex justify-center items-center gap-5 my-10">
        <a
          href="https://www.linkedin.com/in/subodh-rijal-aa911a289/"
        >
          <FaLinkedin
            size={30}
            className="hover:text-[#678D58] cursor-pointer"
          />
        </a>
        <a href="https://github.com/Subodh-Hub">
          <FaGithub size={30} className="hover:text-[#678D58] cursor-pointer" />
        </a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
