import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Quick Loan",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={
          (cn("min-h-screen bg-background font-sans antialiased"),
          poppins.className)
        }
      >
        {children}
      </body>
    </html>
  );
}
