import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Authenticator } from "../../../util/authUtil";

const userItems = [
  {
    display_name: "Dashboard",
    route: "/dashboard",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "Accepted Request",
    route: "/dashboard/accepted",
    icon: "bx bx-user-pin",
  },
  {
    display_name: "Scheduled Request",
    route: "/dashboard/scheduled",
    icon: "bx bx-time",
  },
  {
    display_name: "Previous Services",
    route: "/dashboard/previous",
    icon: "bx bx-user-pin",
  },
];

const helperItems = [
  {
    display_name: "Dashboard",
    route: "/dashboard",
    icon: "bx bx-category-alt",
  },
  {
    display_name: "All Services",
    route: "/dashboard/allservices",
    icon: "bx bx-user-pin",
  },
  {
    display_name: "Pending Requests",
    route: "/dashboard/rq/pending",
    icon: "bx bx-notification",
  },
  {
    display_name: "Scheduled Services",
    route: "/dashboard/services/scheduled",
    icon: "bx bx-time",
  },
  {
    display_name: "Completed Request",
    route: "/dashboard/completed",
    icon: "bx bx-task",
  },
];

const DashboardSidebar = (props) => {
  const isUser = Authenticator.getIsUser();
  const { pathname } = useLocation();

  const active = pathname;

  return (
    <Sidebar
      {...props}
      active={active}
      items={isUser ? userItems : helperItems}
    />
  );
};

export default DashboardSidebar;
