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
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarClientProvider>
      </body>
    </html>
  )
}