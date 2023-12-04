import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { userIdStore } from '../zustand/CustomHooks';

interface Inputs {
  userName: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>({
    mode: 'onChange',
  });

  // zustand: custom hook for state management
  const updateUserId = userIdStore(state => state.updateUserId);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const response = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
      }),
    });
    const loginSuccess = response.ok;
    const result = await response.json();
    updateUserId(result.userResponseRow.userid);
    loginSuccess && navigate('/dashboard');
  };
  return (
    <>
      <div
        className="flex h-screen  items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('mario-esposito-3lembc75Y5o-unsplash.jpg')",
        }}>
        <div className="rounded-xl bg-gray-800 bg-opacity-50 md:px-4 md:py-4  px-2 py-2 shadow-lg backdrop-blur-md ">
          <div className="text-slate-400">
            <div className="mb-4 flex flex-col items-center">
              <img
                src="./assets/6334480_checkbox_document_done_heart_list_icon.svg"
                width="150"
                alt=""
              />
              <span className="text-gray-300">Enter Login Details</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  id="username"
                  {...register('userName', { required: true })}
                  className=" rounded-3xl border-none bg-opacity-50 md:px-6 md:py px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="userName"
                  placeholder="iuser name"
                />
              </div>

              <div className="flex justify-center mb-4 text-lg">
                <input
                  id="password"
                  {...register('password', { required: true })}
                  className="rounded-3xl border-nonebg-opacity-50  md:px-0 md:py px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex flex-col justify-center text-lg text-black">
                <NavLink
                  className="text-white italic text-center mb-2"
                  to="/register">
                  Not registered?
                </NavLink>
                <button
                  id="login"
                  type="submit"
                  className="rounded-3xl bg-[#9dc8e5] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#051415]">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
