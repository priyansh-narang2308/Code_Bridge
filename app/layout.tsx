import type { Metadata } from "next";
import { Pixelify_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const gameFont = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-game",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "CodeBridge",
  description: "An Pixelated E-learning platform for learning and coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={` ${gameFont.variable} ${ubuntu.variable}`}>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
