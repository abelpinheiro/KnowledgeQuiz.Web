import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { DashboardHeader } from './DashboardHeader';
import { AppSidebar } from './AppSidebar';

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader/>
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    </SidebarProvider>
  );
};