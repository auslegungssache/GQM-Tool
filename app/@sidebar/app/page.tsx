import SidebarView from "@/app/@sidebar/sidebar";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import React from "react";
import ListProjects from "@/app/@sidebar/app/_list/list-projects";

export default function Sidebar() {
  return (
    <SidebarView>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <ListProjects />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarView>
  );
}
