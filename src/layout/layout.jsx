import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export default function Layout({ children, userLogin }) {
  return (
    <SidebarProvider>
      {userLogin && <AppSidebar />}
      <main className="flex-1 w-full min-h-screen bg-gray-50">
        {userLogin && <SidebarTrigger className="m-4" />}
        <div className="w-full">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
