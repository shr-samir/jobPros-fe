import React from "react";
import { Button } from "../components";

const Register = () => {
  return (
    <main className="bg-lightBg w-full">
      <div className="max-w-7xl m-auto ">
        <form method="POST" className="my-10 mx-8 flex flex-col gap-8 justify-center items-center">
          <div className="">
            <select name="userRole" className="px-4 py-2 outline-mainColor text-sm cursor-pointer" required>
              <option value="employee">Job Seeker(Employee)</option>
              <option value="employer">Job Provider(Employeer)</option>
            </select>
          </div>

          <div className="bg-white rounded-xl px-16 py-8 flex flex-col gap-8">
            <h6 className="text-center text-[34px] font-semibold">
              Job Application Form
            </h6>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your First Name"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your Last Name"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="jobRole">Job Role</label>
                  <select
                    name="jobRole"
                    id="jobRole"
                    className="px-4 py-2 text-sm border outline-mainColor"
                  >
                    <option value="">Select Job Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="qa">Quality Assurance</option>
                    <option value="fullstack">Fullstack Developer</option>
                    <option value="graphics">Graphics Designer</option>
                    <option value="ui">UI/UX Designer</option>
                    <option value="laravel">Laravel Developer</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  placeholder="Enter your Address"
                  className="px-4 py-2 text-sm border outline-mainColor"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter City"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    id="pincode"
                    type="text"
                    placeholder="Enter Pincode"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    value="2024-10-08"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cv">Upload Your CV</label>
                  <input
                    id="cv"
                    type="file"
                    className="px-4 py-2 outline-mainColor border text-sm"
                  />
                </div>
              </div>
            </div>
          <button type="submit" className="bg-mainColor rounded-md sm:w-1/4 py-2 px-3 text-center cursor-pointer text-white hover:bg-hoverColor">Register Now</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
