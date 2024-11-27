import React from "react";
import { JobCard } from "../components";
import { assets } from "../assets";

const Jobs = () => {
  return (
    <main className="bg-lightBg">
      <div className="max-w-7xl m-auto px-5 py-8 flex flex-col items-center justify-center gap-12 mt-20">
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-center text-3xl font-semibold text-mainColor">
            Filter Job
          </h2>
          <div className="md:w-full bg-white px-3 py-4 rounded flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-5 w-full justify-between items-center">
              <div className="w-full md:w-1/2 flex flex-col gap-3 flex-wrap">
                <label
                  htmlFor="jobTitle"
                  className="text-mainColor font-medium"
                >
                  Job Title<span className="text-red2">*</span>
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="Keyword, Category or Company"
                  className="px-3 py-2 outline-mainColor bg-lightBg rounded"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-3 flex-wrap">
                <label
                  htmlFor="jobLocation"
                  className="text-mainColor font-medium"
                >
                  Job Location
                </label>
                <input
                  id="jobLocation"
                  type="text"
                  placeholder="City, State"
                  className="px-3 py-2 outline-mainColor bg-lightBg rounded"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-between items-center flex-wrap">
              <div>
                <select
                  name="datePosted"
                  id="datePosted"
                  className="bg-lightBg px-3 py-2 rounded text-center outline-mainColor"
                >
                  <option value="">Date Posted</option>
                  <option value={1}>Today</option>
                  <option value={2}>2 Days Ago</option>
                  <option value={3}>3 Days Ago</option>
                  <option value={6}>6 Days Ago</option>
                  <option value={9}>9 Days Ago</option>
                  <option value={12}>12 Days Ago</option>
                  <option value={15}>15 Days Ago</option>
                  <option value={25}>25 Days Ago</option>
                  <option value={30}>30 Days Ago</option>
                </select>
              </div>
              <div>
                <select
                  name="estimatedSalary"
                  id="estimatedSalary"
                  className="bg-lightBg px-3 py-2 rounded text-center outline-mainColor"
                >
                  <option value="">Estimated Salary</option>
                  <option value={1}>1K or less</option>
                  <option value={2}>1K - 5K</option>
                  <option value={3}>5K - 10K</option>
                  <option value={6}>10K - 20K</option>
                  <option value={9}>20K - 30K</option>
                  <option value={12}>30K - 40K</option>
                  <option value={15}>40K - 50K</option>
                  <option value={25}>50K - 1L</option>
                  <option value={30}>1L - 5L</option>
                  <option value={30}>Negotiable</option>
                </select>
              </div>
              <div>
                <select
                  name="jobType"
                  id="jobType"
                  className="bg-lightBg px-3 py-2 rounded text-center outline-mainColor"
                >
                  <option value="">Type of Job</option>
                  <option value={1}>Full Time</option>
                  <option value={2}>Part Time</option>
                  <option value={3}>Internship</option>
                  <option value={6}>Contract</option>
                  <option value={9}>Temporary</option>
                  <option value={12}>Fresher</option>
                </select>
              </div>
              <div>
                <select
                  name="jobType"
                  id="jobType"
                  className="bg-lightBg px-3 py-2 rounded text-center outline-mainColor"
                >
                  <option value="">Education Level</option>
                  <option value={1}>10th Pass</option>
                  <option value={2}>12th Pass</option>
                  <option value={3}>Bachelor's Degree</option>
                  <option value={6}>Master's Degree</option>
                  <option value={9}>Bachelor's Running</option>
                  <option value={12}>Master's Running</option>
                </select>
              </div>
              <div>
                <select
                  name="jobType"
                  id="jobType"
                  className="bg-lightBg px-3 py-2 rounded text-center outline-mainColor"
                >
                  <option value="">Work Shifts</option>
                  <option value={1}>Day(9:00 to 5:00)</option>
                  <option value={1}>Day(11:00 to 2:00)</option>
                  <option value={1}>Online(9:00 to 5:00)</option>
                  <option value={1}>Online(4:00 to 11:00)</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="bg-mainColor hover:bg-hoverColor px-6 py-2 rounded cursor-pointer text-white"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-8">
          <h2 className="text-center text-3xl font-semibold text-mainColor">
            All Jobs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-x-10 md:gap-y-14">
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
            <JobCard
              id={1}
              logo={assets.dataAnalyst}
              name="Digital Home International Electronics"
              expiryDate="2024-12-25"
              role="Data Analyst / MIS"
              location="Thaiba, Lalitpur"
              salary="Negotiable"
              jobLevel="Entry Level"
              jobType="Full Time"
              shift="Day Shift (9:00-5:00)"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
