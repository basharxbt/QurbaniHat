"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { Slide, toast } from "react-toastify";
import Link from "next/link";

import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const singUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userInfo = Object.fromEntries(formData);
    const { email, password, name, photo } = userInfo;

    console.log(userInfo);

    // console.log(email, password, name, photo);

    const { data, error } = await authClient.signUp.email({
      email: email,
      password: password,
      name: name,

      photo: photo,
    });

    if (data) {
      await authClient.signOut();
      router.push("/login");
    }

    console.log(data, error);

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }
    toast.success(`Register Success `, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex  p-8 flex-col items-center justify-center ">
        <div className="my-5 text-center space-y-2">
          {/* <p className="font-semibold text-gray-500 mt-1 text-xl ">
            Please enter your details to Register.
          </p> */}
        </div>
        <div className="p-5 border border-gray-200 flex flex-col items-center w-full md:w-120">
          <h2 className="font-semibold text-2xl mb-3">Register account</h2>
          <Form className="flex  flex-col gap-4 w-full" onSubmit={onSubmit}>
            <TextField name="name" isRequired className="w-full ">
              <Label>Full Name</Label>
              <Input placeholder="Your Name" />
              <Description>Name field is required</Description>
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="Enter Your email address" />
              <FieldError />
            </TextField>

            <TextField name="photo" isRequired className="w-full ">
              <Label>Photo Url</Label>
              <Input placeholder="https://example.com/photo.jpg" />

              <Description>Photo Url is required</Description>
            </TextField>
            <TextField
              isRequired
              minLength={4}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 4) {
                  return "Password must be at least 4 characters";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 4 characters</Description>
              <FieldError />
            </TextField>

            <Button
              className="btn w-full bg-amber-600 text-white"
              type="submit"
            >
              Register
            </Button>
            <h2 className="text-amber-600 font-bold text-center">OR</h2>

            <div className="w-full">
              <button
                onClick={singUp}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
            </div>

            <p>
              Already have an account?
              <span>
                {" "}
                <Link className="text-amber-700 hover:underline" href="/login">
                  Login
                </Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
