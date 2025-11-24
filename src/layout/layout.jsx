import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export default function Layout({ children, userLogin }) {
  return (
    <SidebarProvider>
      {userLogin && <AppSidebar />} 
      <main className="flex-1 overflow-auto">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
