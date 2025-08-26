import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { ThemeProvider } from "../components/theme-provider";
import { SearchComponents } from "../components/SearchComponents";

export default function SearchPage() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          <div className="w-64">
            <AppSidebar />
          </div>
          <div className="flex-1 p-4">
           <SearchComponents/>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
