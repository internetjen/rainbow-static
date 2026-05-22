// content.js
// Two separate lists:
// 1. tmdbShows / tmdbMovies — IDs of content we pull from TMDB automatically
// 2. manualContent — anything not on TMDB (YouTube series, music videos, etc.)

// ---- TMDB IDS ----
// Add the TMDB ID for any show or movie you want to pull automatically.
// Find the ID in the URL on themoviedb.org:
// themoviedb.org/tv/282471 → ID is 282471
// themoviedb.org/movie/12345 → ID is 12345

export const tmdbShowIds = [
  253710, // The Secret of Us
  282471, // Clairebell
  155513, //GAP The Series
];

export const tmdbMovieIds = [
  531428, // Portrait of a Lady on Fire
  254936, // Girltrash: All Night Long
];

// ---- MANUAL CONTENT ----
// Anything not on TMDB goes here — same shape as before.
// Also use this to override TMDB data if needed (e.g. a better description).

export const manualContent = [
  {
    title: "Kissable Lips",
    slug: "kissable-lips",
    type: "Series",
    year: 2023,
    country: "Thailand",
    platform: "YouTube",
    status: "Ended",
    genre: ["Romance", "Drama"],
    image: "https://placehold.co/300x450?text=Kissable+Lips",
    description: "A Thai GL series about two women navigating love and identity.",
    source: "manual", // marks this as manually added
  },
  {
    title: "Girl's Prisoner",
    slug: "girls-prisoner",
    type: "Series",
    year: 2023,
    country: "Thailand",
    platform: "YouTube",
    status: "Ended",
    genre: ["Drama"],
    image: "https://placehold.co/300x450?text=Girl%27s+Prisoner",
    description: "A Thai GL series with a dramatic and emotional storyline.",
    source: "manual",
  }
];