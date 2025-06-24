
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Users, 
  FilePlus, 
  Activity, 
  Settings, 
  Database 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    roles: ['admin', 'creator', 'analytics']
  },
  {
    title: 'User Management',
    url: '/admin/users',
    icon: Users,
    roles: ['admin']
  },
  {
    title: 'Quiz Management',
    url: '/quizzes',
    icon: FilePlus,
    roles: ['admin', 'creator']
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: Activity,
    roles: ['admin', 'analytics']
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
    roles: ['admin', 'creator', 'analytics']
  }
];

export function AppSidebar() {
    const { user } = useAuth();
    const userRole = user?.role ?? "admin"; //mockado para quando tiver endpoint que retorna info do user
    console.log(user);
    const filteredItems = navigationItems.filter(item => userRole && item.roles.includes(userRole));

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-blue-100 text-blue-700 font-medium border-r-2 border-blue-600" 
      : "hover:bg-gray-100 text-gray-700";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="font-bold text-xl text-gray-900">QuizHub</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
