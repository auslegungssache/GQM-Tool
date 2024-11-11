import SidebarView from "@/app/@sidebar/sidebar";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import ListProjects from "@/app/@sidebar/app/_list/list-projects";
import React from "react";

export default function SidebarContent() {
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
