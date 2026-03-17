import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thecklearn - Learn Web Development & Tech Skills Online",
  description: "Thecklearn is an edtech platform offering courses in web development, programming, and more. Learn, practice, and master tech skills at your pace.",
  keywords: ["Thecklearn", "web development", "learn programming", "frontend courses", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Afolabi AbdulRahman Taiwo", url: "https://portfolio-ef1e.vercel.app" }],
  openGraph: {
    title: "Thecklearn - Learn Web Development & Tech Skills Online",
    description: "Master web development and programming with Thecklearn’s online courses. Interactive tutorials, projects, and more.",
    siteName: "Thecklearn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thecklearn Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thecklearn - Learn Web Development & Tech Skills Online",
    description: "Interactive courses in web development and programming. Build skills at your pace!",
    images: ["/og-image.png"],
    site: "@thecklearn",
    creator: "@abdulrahman_dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}