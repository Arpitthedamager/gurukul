import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./utils/SessionProvider";
const inter = Inter({ subsets: ["latin"] });
const keywords = [
  "Gurukul Skills",
  "gurukul Skills",
  "Gurukul skills",
  "gurukul skills",

  "online courses",
  "skill development",
  "skill enhancement",
  "professional development",
  "learning hub",
  "educational empowerment",
  "mastery workshops",
  "expert-led courses",
  "learning community",
  "knowledge enrichment",
  "competency development",
  "vocational training",
  "practical learning",
  "career advancement courses",
  "hands-on learning",
  "personal growth courses",
  "talent development",
  "lifelong learning",
  "professional skills training",
  "industry-relevant courses",
  "interactive learning",
  "career skills development",
  "practical knowledge",
  "career enhancement",
  "expert guidance",
  "career skills workshops",
  "educational enrichment",
  "learning solutions",
  "professional certification",
  "expert-led workshops",
  "knowledge enhancement",
  "skill-based education",
  "industry-specific training",
  "learning experience",
  "learning modules",
  "career skills advancement",
  "knowledge expansion",
  "talent enrichment",
  "practical training",
  "professional learning",
  "practical skill development",
  "career skills mastery",
  "industry skills training",
  "career-focused training",
  "professional skillsets",
  "career skills empowerment",
  "expert-led seminars",
  "career skills development",
  "expert-led workshops",
  "skill mastery workshops",
  "career skills mastery",
  "industry-focused courses",
  "career skills seminars",
  "career skills advancement",
  "practical skill workshops",
  "career skills mastery",
  "industry skills training",
  "practical skill acquisition",
  "expert-led seminars",
  "career skills empowerment",
  "industry-specific skill development",
  "career skills development pathways",
  "practical skill mastery",
  "career skills empowerment programs",
  "expert skill-building workshops"
];



export const metadata = {
  title: "Gurukul Skills - Online Courses & Skill Development",
  description: "Gurukul Skills offers a variety of online courses designed to enhance your professional development and skillset. Join our learning community today!",
};
const keywordsString = keywords.join(", ");

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={keywordsString} />
        <meta name="author" content="Gurukul Skills" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://gurukulskills.site/images/og-image.jpg" />
        <meta property="og:url" content="https://gurukulskills.site" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://gurukulskills.site/images/twitter-card.jpg" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <main>
          <AuthProvider>
             
          <div className="relative bg-gray-900 min-h-screen text-white ">
            <div className="absolute z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-yellow-300 rounded-full"
                  style={{
                    width: `${Math.random() * 10}px`,
                    height: `${Math.random() * 10}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                  ></div>
                ))}
            </div>
            <div className="relative">{children}</div>
          </div>
                </AuthProvider>
                </main>
      </body>
    </html>
  );
}
