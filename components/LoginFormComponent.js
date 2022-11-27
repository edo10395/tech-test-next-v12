import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import logo from '../public/assets/logo.png';
import ILogin from '../public/assets/ILogin.png';

function LoginFormComponent() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [pageState, setPageState] = useState({
    error: '',
    processing: false,
  });

  const handleChange = (e) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  // handle pesan error
  const errorMessage = (error) => {
    const errorMap = {
      CredentialsSignin: 'Username atau Password salah',
    };
    return errorMap[error] ?? 'Unknown error occure';
  };

  // handle form submit
  const handleSubmit = (event) => {
    setPageState((old) => ({ ...old, processing: true, error: '' }));

    event.preventDefault();
    signIn('credentials', {
      ...form,
      redirect: false,
    })
      .then((res) => {
        if (res.ok) {
          // Authenticate User
          router.push('/');
          setPageState((old) => ({ ...old, processing: true }));
        } else {
          setPageState((old) => ({
            ...old,
            processing: false,
            error: res.error,
          }));
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);

        setPageState((old) => ({
          ...old,
          processing: false,
          error: err.message ?? 'Something went wrong!',
        }));
      });
  };

  return (
    <div className="lg:flex bg-white">
      {/* section sign in */}
      <div className="lg:w-1/2 xl:max-w-screen-sm ">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <Image src={logo} alt="logo" />
          </div>
        </div>

        <div className="mt-10 px-30 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
             xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12">
            {/* ================FORM================  */}
            <form onSubmit={handleSubmit}>
              <div>
                {/* alert */}
                {pageState.error !== '' && (
                  <div
                    className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2"
                    role="alert"
                  >
                    <p className="font-bold">Maaf !</p>
                    <p>
                      {errorMessage(pageState.error)}
                      .
                    </p>
                  </div>
                )}
                {/* tutup alert */}

                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Username
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="username"
                  placeholder="Masukkan Username"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                             cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  // onChange={(event) => setForm("password", event.target.value)}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-10">
                <button
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                       font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                       shadow-lg"
                  type="submit"
                  disabled={pageState.processing}
                >
                  Log In
                </button>
              </div>
            </form>
            {/* ================TUTUP FORM================  */}

            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?
              {' '}
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* section logo */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <Image src={ILogin} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default LoginFormComponent;
