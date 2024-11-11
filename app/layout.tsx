import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import HeaderAuth from "@/components/header-auth";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "GQM-Tool",
  description: "",
};

export default function RootLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {sidebar}

            <main className="min-h-screen flex flex-col flex-1">
              {/* <SidebarTrigger /> */}
              <nav className="inset-x-0 w-full h-20 top-0 bg-neutral-800 flex justify-between items-center px-8 text-xl">
                <div></div>

                <div>
                  <HeaderAuth />
                </div>
              </nav>

              <div className="flex flex-col flex-1">
                <div className="flex-1">{children}</div>

                <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                  <ThemeSwitcher />
                </footer>
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
