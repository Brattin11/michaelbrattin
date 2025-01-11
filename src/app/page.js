import * as React from "react";
import HighlightBox from "./HighlightBox";
import ContentSection from "./ContentSection";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <body>
      <div className="header-container">
        <header className={roboto.className}>
          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            href="https://resume.michaelbrattin.com"
          >
            RESUME
          </a>
          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/michael-brattin-8b688011b/"
          >
            LINKEDIN
          </a>
          <a
            target="_blank"
            and
            rel="noopener noreferrer"
            href="https://github.com/Brattin11"
          >
            GITHUB
          </a>
        </header>
      </div>
      <main className={roboto.className}>
        <HighlightBox>
          <ContentSection />
        </HighlightBox>
      </main>
    </body>
  );
}
