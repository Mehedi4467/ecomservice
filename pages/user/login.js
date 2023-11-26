import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AlertMessage from "../../Hooks/AlertMessage";
import axios from "axios";
import { getCookie } from "cookies-next";
const login = () => {
  const { successMessage, errorMessage } = AlertMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const borderPrimaryColor =
    "block w-full p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40";
  const borderErrorColor = "border-red-700 focus:ring-red-300";
  const borderSuccessColor = "focus:border-blue-400 focus:ring-blue-300";

  //form data :
  const onSubmit = async (data) => {
    const submitData = {
      email: data?.email,
      password: data?.password,
    };

    try {
      const { data } = await axios.post(`/api/user/login`, submitData);
      if (data?.status) {
        router.reload();
        router.push(router?.query?.next || "/dashboard/profile");
      } else {
        errorMessage("We do not know please Register first");
      }
      console.log(data);
    } catch (err) {
      console.log("user login error", err.message);
      errorMessage("Something went wrong please try again");
    }
  };

  return (
    <>
      <Head>
        <title>Ecomservice - Login</title>
      </Head>
      <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div
          className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md 
            bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100"
        >
          <h1 className="text-3xl font-semibold text-center text-gray-700 ">
            Ecomservice
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className={`${borderPrimaryColor} ${
                  errors.email ? borderErrorColor : borderSuccessColor
                }`}
                {...register("email", {
                  required: "Email must required",
                })}
              />
              {errors.email && (
                <span className="label-text text-red-400">
                  {errors?.email.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 "
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="password"
                className={`${borderPrimaryColor} ${
                  errors.password ? borderErrorColor : borderSuccessColor
                }`}
                {...register("password", {
                  required: "password must required",
                })}
              />
              {errors.password && (
                <span className="label-text text-red-400">
                  {errors?.password.message}
                </span>
              )}
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs font-light text-center text-gray-400">
            Don't have an account?
            <Link
              href="/user/register"
              className="font-medium text-gray-700  hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default login;

export async function getServerSideProps(context) {
  const { req, res, query } = context;
  const userCookieId = getCookie("ecom_user", { req, res });

  // Perform any necessary cookie parsing or validation here
  const user = userCookieId ? JSON.parse(userCookieId) : null;

  if (user) {
    return {
      redirect: {
        destination: query?.next ? query?.next : "/dashboard/profile",
        permanent: false,
      },
    };
  } else {
    return { props: { user } };
  }
}
