// ...existing code...
import SidebarClientProvider from "@/components/sidebarClientProvider"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css" // ensure this file exists and contains your global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarClientProvider>
          <AppSidebar />
          <SidebarTrigger className={`cursor-pointer`}/>
          <main className="flex flex-row w-full">
             <div className=" rounded-2xl bg-gray-100 h-screen w-full right-20 top-0 flex items-center justify-center">
              
              {children}
            </div>
          </main>
        </SidebarClientProvider>
      </body>
    </html>
  )
}