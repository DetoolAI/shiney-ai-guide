import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const MONTHLY_COST = 297;
const AVG_JOB_VALUE = 200;

const DepositROICalculator = () => {
  const [jobsPerWeek, setJobsPerWeek] = useState([8]);

  const weekly = jobsPerWeek[0] * AVG_JOB_VALUE;
  const monthly = weekly * 4;
  const profit = monthly - MONTHLY_COST;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8">
      <div>
        <label className="block font-bold text-gray-900 mb-4">
          How many detailing jobs per week?{" "}
          <span className="text-primary">{jobsPerWeek[0]}</span>
        </label>
        <Slider
          value={jobsPerWeek}
          onValueChange={setJobsPerWeek}
          min={2}
          max={40}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>2/week</span>
          <span>40/week</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">
            {jobsPerWeek[0]} jobs/week × ${AVG_JOB_VALUE} avg job
          </span>
          <span className="font-bold text-gray-900">${weekly.toLocaleString()}/week</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">Monthly revenue</span>
          <span className="font-bold text-gray-900">${monthly.toLocaleString()}/month</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">Your investment</span>
          <span className="font-bold text-primary">${MONTHLY_COST}/month</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-900 font-bold text-lg">Profit after Detool.AI</span>
          <span className={`font-black text-xl ${profit >= 0 ? "text-primary" : "text-red-500"}`}>
            ${profit.toLocaleString()}/month
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepositROICalculator;
