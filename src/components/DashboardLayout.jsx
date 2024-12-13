import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from ".";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
      <AppSidebar />
      <div className="p-8 w-full">{children}</div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
