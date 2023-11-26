import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-tabs/style/react-tabs.css";
import ButtonUp from "../../components/Shared/Buttons/SecondaryButton";
import FormTemplate from "../../components/Shared/FormTemplate/FormTemplate";
import Spiner from "../../components/Spiner/Spiner";
import AlertMessage from "../../Hooks/AlertMessage";
import axios from "axios";

const register = () => {
  const { successMessage, errorMessage } = AlertMessage();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const id = data.id;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phone = data.phone;
    const address = data.address;
    const dataCreated = new Date();
    const verification = false;

    const bodyInfo = {
      businessName: id,
      phone: phone,
      email: email,
      verification: verification,
      password: password,
      details: {
        name: name,
        businessName: id,
        address: address,
        accountCreated: dataCreated,
      },
    };

    try {
      const { data } = await axios.post(`/api/user/user`, bodyInfo);
      if (data?.status) {
        setLoading(false);
        successMessage(data?.msg);
        router.push(`/user/login`);
      } else {
        setLoading(false);
        errorMessage(data?.msg);
      }
    } catch (err) {
      console.log("reg submit error", err);
      setLoading(false);
      errorMessage("Something Went Wrong!");
    }
  };

  //common input data
  const CommonTableData = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      error: errors.name,
    },
    {
      name: "id",
      type: "text",
      placeholder: "Business Name",
      error: errors.id,
    },
    { name: "email", type: "email", placeholder: "Email", error: errors.email },

    {
      name: "phone",
      type: "number",
      placeholder: "Phone",
      error: errors.phone,
    },
    {
      name: "address",
      type: "text",
      placeholder: "Address",
      error: errors.address,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      error: errors.password,
    },
  ];

  return (
    <>
      <Head>
        <title>Ecomservice - Register</title>
      </Head>
      <div>
        <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
          <div className="flex justify-center min-h-screen ">
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 ">
              <div
                className="w-full bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 p-7"
              >
                <h1 className="text-2xl font-semibold tracking-wider capitalize ">
                  Create your account.
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 ">
                    {CommonTableData.map((data, i) => (
                      <FormTemplate key={i} data={data} register={register} />
                    ))}
                  </div>
                  <div className="mt-5">
                    <ButtonUp>
                      {loading ? (
                        <Spiner color={"#fff"} height={15} />
                      ) : (
                        <span>Sign Up </span>
                      )}
                    </ButtonUp>
                  </div>
                </form>
                <p className="mt-3 text-xs font-light text-center text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/user/login"
                    className="font-medium text-gray-700 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default register;
