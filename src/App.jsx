import { useForm } from "react-hook-form";
import schema from "./validations/LoginValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";

import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const sendData = (data) => {
    console.log("Data sent!", data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sendData)}
        className="mt-80 w-100 mx-auto p-4 rounded-md bg-white border-1 border-gray-300"
      >
        <input
          {...register("email")}
          //  {...register("email", {
          //   required: "მეილი არის სავალდებულო ველი",
          //   validate: (value) => {
          //     if (value.includes("@")) {
          //       return true;
          //     }

          //     return "აუცილებელია '@'-ს გამოყენება";
          //   },
          // })}
          type="email"
          placeholder="Enter email..."
          name="email"
          className=" w-full bg-white border-1 border-gray-600 p-4 rounded-md my-4"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <div className=" relative  my-4">
          <input
            {...register("password")}
            // {...register("password", {
            //   required: "პაროლი არის სავალდებულო ველი",
            //   minLength: {
            //     value: 8,
            //     message: "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან",
            //   },
            // })}
            type={isVisible ? "text" : "password"}
            placeholder="Enter password..."
            name="password"
            className="w-full bg-white border-1 border-gray-600 p-4 rounded-md"
          />

          <button
            type="button"
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          >
            {!isVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          disabled={!isValid}
          type="submit"
          className="mt-5 rounded-md w-full text-center p-4 "
          style={{
            backgroundColor: !isValid ? "#888" : "lightgreen",
            cursor: !isValid ? "not-allowed" : "pointer",
          }}
        >
          Send
        </button>
      </form>
    </>
  );
}

export default App;
