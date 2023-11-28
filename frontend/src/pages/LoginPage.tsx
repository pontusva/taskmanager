const Register = () => {
  return (
    <>
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
              <form action="#">
                <div className="flex justify-center mb-4 text-lg">
                  <input
                    className=" rounded-3xl border-none bg-opacity-50 md:px-6 md:py px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="name"
                    placeholder="id@email.com"
                  />
                </div>

                <div className="flex justify-center mb-4 text-lg">
                  <input
                    className="rounded-3xl border-nonebg-opacity-50  md:px-0 md:py px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    name="name"
                    placeholder="*********"
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
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
    </>
  );
};

export default Register;
