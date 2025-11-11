import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Builder Assignment",
  description: "React + Next.js form validation assignment by Adhil Ali C.T",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
