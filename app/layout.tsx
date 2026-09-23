import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata: Metadata = {
  title: "Vibicons - An open source animated icon library for React",
  description: "Vibicons is an open source animated icon library for React based solely on Motion. It provides a collection of animated icons that can be easily integrated into your React projects.",
  icons: {
    icon: "/logo/logo.svg",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
