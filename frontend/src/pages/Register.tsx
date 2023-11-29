import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  username: '';
  email: '';
  password: '';
  confirm: '';
  passwordMatch: false;
  firstName: '';
  lastName: '';
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const passwordConfirmation = data.password === data.confirm;
    const response =
      passwordConfirmation &&
      (await fetch('http://localhost:8000/user/plain-text-password-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        }),
      }));
    const result = response && (await response.json());
    console.log(result);
    passwordConfirmation
      ? toast.success('Successfull registerd', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      : toast.error('Password not matching', {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
  };

  return (
    <>
      <div className="min-h-screen   bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 py-4 md:w-1/2 w-3/3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-[20rem] p-10 rounded-lg shadow-lg ">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Register
            </h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                First name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                id="firstName"
                placeholder="first name"
                {...register('firstName', { required: true })}
                name="firstName"
              />
              {errors.firstName && (
                <span className="text-red-400">This field is required</span>
              )}
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Last name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                id="lastName"
                placeholder="last name"
                {...register('lastName', { required: true })}
                name="lastName"
              />
              {errors.lastName && (
                <span className="text-red-400">This field is required</span>
              )}
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Username
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                id="username"
                placeholder="username"
                {...register('username', { required: true })}
                name="username"
              />
              {errors.username && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Email
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                id="email"
                placeholder="@email"
                {...register('email', { required: true })}
                name="email"
              />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                id="password"
                placeholder="password"
                {...register('password', {
                  required: true,
                  minLength: 8,
                })}
                name="password"
              />
              {errors.password?.type === 'minLength' ? (
                <span className="text-red-400">
                  password needs to be longer
                </span>
              ) : (
                errors.password?.type === 'required' && (
                  <span className="text-red-400">This field is required</span>
                )
              )}
            </div>
            <div>
              <ToastContainer />
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Confirm password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                id="confirm"
                placeholder="confirm password"
                {...register('confirm', { required: true, minLength: 8 })}
                name="confirm"
              />
              {errors.confirm?.type === 'minLength' ? (
                <span className="text-red-400">
                  password needs to be longer
                </span>
              ) : (
                errors.confirm?.type === 'required' && (
                  <span className="text-red-400">This field is required</span>
                )
              )}
            </div>
            <button
              type="submit"
              className={clsx(
                watch('password') !== '' && watch('confirm') !== ''
                  ? 'bg-indigo-600 mt-6 w-full rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'
                  : '  bg-slate-400  w-full mt-6  rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'
              )}>
              Register
            </button>
            <button
              type="submit"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
