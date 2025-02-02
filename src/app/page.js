import * as React from "react";
import Head from "next/head";
import HighlightBox from "./HighlightBox";
import ContentSection from "./ContentSection";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%233e25e2%22></rect><path d=%22M9.52 60.32L9.52 60.32L9.77 64.74Q9.77 65.11 9.74 66.08Q9.71 67.04 9.01 67.80Q8.31 68.56 7.31 68.56Q6.32 68.56 5.77 68.50L5.77 68.50Q3.77 68.50 3.77 66.74L3.77 66.74Q3.77 65.29 5.10 55.03Q6.44 44.76 6.80 41.80Q7.16 38.83 7.44 36.80Q7.71 34.77 7.83 33.80Q7.95 32.83 8.19 31.87Q8.43 30.90 8.92 30.29L8.92 30.29Q9.83 29.14 12.43 29.14L12.43 29.14Q16.79 31.32 21.39 41.49L21.39 41.49Q24.66 48.76 25.75 50.70Q26.84 52.63 27.87 53.36L27.87 53.36L39.98 32.29Q41.25 31.38 41.92 31.38L41.92 31.38Q43.85 31.38 44.88 33.14Q45.91 34.89 46.61 37.41Q47.31 39.92 47.82 42.95Q48.33 45.97 48.73 49.27Q49.12 52.57 49.49 55.72L49.49 55.72Q50.33 63.29 50.79 65.23Q51.24 67.17 51.24 67.98Q51.24 68.80 50.70 69.56Q50.15 70.31 49.18 70.31Q48.21 70.31 47.25 69.56Q46.28 68.80 46.06 67.68Q45.85 66.56 45.64 64.74Q45.43 62.93 45.13 60.66Q44.82 58.39 44.52 55.87Q44.22 53.36 43.92 51.06Q43.61 48.76 43.37 46.97Q43.13 45.19 43.01 44.28L43.01 44.28Q43.01 43.07 42.95 42.04Q42.89 41.01 42.46 40.77Q42.04 40.52 41.16 41.34Q40.28 42.16 38.71 44.64L38.71 44.64Q35.32 49.91 28.90 62.38L28.90 62.38Q28.05 63.90 26.66 63.05L26.66 63.05Q25.02 62.14 23.87 58.39L23.87 58.39L12.73 34.71Q11.28 37.62 10.07 53.97L10.07 53.97Q9.89 55.96 9.83 57.36L9.83 57.36Q9.52 58.87 9.52 60.32ZM57.30 30.23L57.30 30.23Q61.78 29.26 65.77 29.26Q69.77 29.26 72.89 29.57Q76.00 29.87 79.15 30.72L79.15 30.72Q85.81 32.59 87.39 35.80L87.39 35.80Q87.81 36.47 87.81 37.38L87.81 37.38Q87.81 40.04 83.15 43.13L83.15 43.13Q80.06 45.19 74.31 47.31L74.31 47.31Q88.42 48.09 93.44 51.42L93.44 51.42Q96.23 53.18 96.23 55.54L96.23 55.54Q96.23 58.81 91.63 62.32L91.63 62.32Q86.60 66.08 78.79 68.56L78.79 68.56Q71.58 70.86 65.41 70.86L65.41 70.86Q60.69 70.86 57.30 69.47L57.30 69.47Q57.17 65.59 56.99 61.47L56.99 61.47Q56.51 52.33 56.51 46.06Q56.51 39.80 56.93 33.02L56.93 33.02Q56.27 33.02 55.72 32.87Q55.18 32.71 55.18 31.68L55.18 31.68Q55.18 30.23 57.30 30.23ZM61.29 52.33L62.75 66.44Q72.49 65.89 78.73 64.11Q84.97 62.32 87.72 60.23Q90.48 58.14 90.48 56.21L90.48 56.21Q90.48 53.66 86.84 52.15L86.84 52.15Q82.91 50.58 76.40 50.58Q69.89 50.58 61.29 52.33L61.29 52.33ZM68.38 33.20L68.38 33.20L66.86 33.20Q61.90 33.20 61.29 34.23L61.29 34.23L60.69 46.40Q66.14 46.40 73.95 43.79L73.95 43.79Q79.03 42.04 81.39 39.92L81.39 39.92Q82.60 38.83 82.60 37.68Q82.60 36.53 81.73 35.77Q80.85 35.01 79.49 34.53Q78.12 34.05 76.46 33.77Q74.79 33.50 73.22 33.38L73.22 33.38Q70.80 33.20 68.38 33.20Z%22 fill=%22%23fff%22></path></svg>"
        />
      </Head> */}
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
    </>
  );
}
