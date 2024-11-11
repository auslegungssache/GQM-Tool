"use server";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import React from "react";

interface SidebarViewProps {
  children?: React.ReactNode;
}

export default async function SidebarView({ children }: SidebarViewProps) {
  return (
    <div>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>{children}</SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}
