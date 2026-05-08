import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MovieRow, type Movie } from "@/components/site/MovieRow";
import { Categories } from "@/components/site/Categories";
import { WatchAnywhere } from "@/components/site/WatchAnywhere";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";
import p1 from "@/assets/poster1.jpg";
import p2 from "@/assets/poster2.jpg";
import p3 from "@/assets/poster3.jpg";
import p4 from "@/assets/poster4.jpg";
import p5 from "@/assets/poster5.jpg";
import p6 from "@/assets/poster6.jpg";
import p7 from "@/assets/poster7.jpg";
import p8 from "@/assets/poster8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière — Premium Cinema, Streamed." },
      {
        name: "description",
        content:
          "Stream award-winning originals, blockbuster films and curated documentaries in 4K HDR with Dolby Atmos. Watch anywhere on Lumière.",
      },
      { property: "og:title", content: "Lumière — Premium Cinema, Streamed." },
      {
        property: "og:description",
        content: "Where stories come alive. Stream extraordinary cinema, anywhere.",
      },
    ],
  }),
  component: Index,
});

const trending: Movie[] = [
  { title: "The Crimson Veil", poster: p1, year: 2025, rating: "TV-MA", duration: "8 ep", genre: "Drama · Thriller" },
  { title: "Dragonfall", poster: p2, year: 2024, rating: "PG-13", duration: "2h 14m", genre: "Fantasy · Epic" },
  { title: "Neon Detective", poster: p3, year: 2025, rating: "R", duration: "1h 58m", genre: "Noir · Mystery" },
  { title: "Edge of Orion", poster: p4, year: 2024, rating: "PG-13", duration: "2h 31m", genre: "Sci-Fi" },
  { title: "Blossom & Steel", poster: p5, year: 2025, rating: "TV-MA", duration: "10 ep", genre: "Action · Historical" },
  { title: "The Hollow", poster: p6, year: 2024, rating: "R", duration: "1h 47m", genre: "Horror" },
  { title: "Velocity", poster: p7, year: 2025, rating: "PG-13", duration: "1h 52m", genre: "Action" },
  { title: "Last Light", poster: p8, year: 2024, rating: "PG", duration: "2h 05m", genre: "Romance · Drama" },
];

const newReleases: Movie[] = [
  { title: "Edge of Orion", poster: p4, year: 2024, rating: "PG-13", duration: "2h 31m", genre: "Sci-Fi" },
  { title: "The Hollow", poster: p6, year: 2024, rating: "R", duration: "1h 47m", genre: "Horror" },
  { title: "Velocity", poster: p7, year: 2025, rating: "PG-13", duration: "1h 52m", genre: "Action" },
  { title: "Blossom & Steel", poster: p5, year: 2025, rating: "TV-MA", duration: "10 ep", genre: "Action" },
  { title: "Last Light", poster: p8, year: 2024, rating: "PG", duration: "2h 05m", genre: "Romance" },
  { title: "Dragonfall", poster: p2, year: 2024, rating: "PG-13", duration: "2h 14m", genre: "Fantasy" },
  { title: "Neon Detective", poster: p3, year: 2025, rating: "R", duration: "1h 58m", genre: "Noir" },
  { title: "The Crimson Veil", poster: p1, year: 2025, rating: "TV-MA", duration: "8 ep", genre: "Thriller" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <div id="movies">
          <MovieRow title="Trending This Week" movies={trending} />
        </div>
        <div id="series">
          <MovieRow title="New on Lumière" movies={newReleases} />
        </div>
        <Categories />
        <WatchAnywhere />
        <div id="my-list">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}