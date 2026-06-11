import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const MONTHLY_COST = 397;
const DEPOSIT_AMOUNT = 20;

const DepositROICalculator = () => {
  const [bookingsPerWeek, setBookingsPerWeek] = useState([25]);

  const weekly = bookingsPerWeek[0] * DEPOSIT_AMOUNT;
  const monthly = weekly * 4;
  const profit = monthly - MONTHLY_COST;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8">
      <div>
        <label className="block font-bold text-gray-900 mb-4">
          How many bookings per week?{" "}
          <span className="text-primary">{bookingsPerWeek[0]}</span>
        </label>
        <Slider
          value={bookingsPerWeek}
          onValueChange={setBookingsPerWeek}
          min={5}
          max={100}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>5/week</span>
          <span>100/week</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">
            {bookingsPerWeek[0]} bookings/week × ${DEPOSIT_AMOUNT} deposit
          </span>
          <span className="font-bold text-gray-900">${weekly.toLocaleString()}/week</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">Monthly secured revenue</span>
          <span className="font-bold text-gray-900">${monthly.toLocaleString()}/month</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-gray-700 font-medium">Your investment</span>
          <span className="font-bold text-primary">${MONTHLY_COST}/month</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-900 font-bold text-lg">Profit from deposits alone</span>
          <span className={`font-black text-xl ${profit >= 0 ? "text-primary" : "text-red-500"}`}>
            ${profit.toLocaleString()}/month
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepositROICalculator;
