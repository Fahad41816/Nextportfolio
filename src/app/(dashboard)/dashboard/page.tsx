"use client";

import { Card, Progress } from "@nextui-org/react";

const page = () => {
  return (
    <div className="h-screen dark:bg-gray-900 bg-[#F0F1F7]   p-6">
      <div className="max-w-7xl mx-auto space-y-6 ">
        {/* Welcome Section */}
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, Nahidul Islam Fahad!
            </h1>
            <p className="text-gray-400">Track your activity,</p>
          </div>
        </div>

        {/* Target Completion Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
          <Card className="p-6 bg-purple-700 text-white shadow-lg">
            <h2 className="text-lg font-semibold">Your target is incomplete</h2>
            <p className="mt-2">
              You have completed <span className="font-bold">48%</span> of the
              given target, you can also check your status.
            </p>
            <div className="mt-4">
              <Progress
                value={48}
                color="warning"
                size="lg"
                className="rounded-full"
              />
            </div>
          </Card>

          {/* Analytics Section */}
          <Card className="p-6 bg-gray-800 shadow-lg">
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-2xl font-bold mt-2">1,02,890</p>
            <p className="text-green-500 text-sm mt-1">+40% this month</p>
            <a href="#" className="text-blue-400 underline mt-4 block">
              View All →
            </a>
          </Card>

          <Card className="p-6 bg-gray-800 shadow-lg">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-2xl font-bold mt-2">$56,562</p>
            <p className="text-green-500 text-sm mt-1">+25% this month</p>
            <a href="#" className="text-blue-400 underline mt-4 block">
              View All →
            </a>
          </Card>

          <Card className="p-6 bg-gray-800 shadow-lg">
            <h2 className="text-lg font-semibold">Total Deals</h2>
            <p className="text-2xl font-bold mt-2">2,543</p>
            <p className="text-green-500 text-sm mt-1">+19% this month</p>
            <a href="#" className="text-blue-400 underline mt-4 block">
              View All →
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
