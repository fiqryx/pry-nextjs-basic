"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { navigation } from "@/config/navigation"
import { useAuthStore } from "@/stores/auth"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const auth = useAuthStore()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navigation.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          label="Menu"
          items={navigation.navMain}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={auth.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
