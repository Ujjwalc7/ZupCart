import { useEffect } from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-md p-10 md:p-16">
        <h1 className="text-center text-2xl mb-4">LOGIN</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="gender">Gender</label>
          <select
            className="inset-shadow-sm p-4 rounded-md outline-none"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date">Date of Birth</label>
          <input
            className="inset-shadow-sm p-4 rounded-md outline-none"
            type="date"
            id="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-center">Already Signed In Once</p>
          <button className="flex items-center rounded-md gap-1 border border-gray-200 overflow-hidden cursor-pointer active:scale-95 transition-all">
            <FcGoogle className="w-[25px] h-full bg-white" />{" "}
            <span className="text-white bg-blue-500 p-1">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Login;
