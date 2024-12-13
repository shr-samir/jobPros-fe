import React from "react";
import { AppSidebar, AllJobsTable } from "../components";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardLayout from "@/components/DashboardLayout";

const Employer = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex">

        <AllJobsTable />
      </div>
    </DashboardLayout>
  );
};

export default Employer;
