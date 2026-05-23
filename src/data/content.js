// content.js
// Two separate lists:
// 1. tmdbSeriesIds / tmdbMovieIds — IDs of content we pull from TMDB automatically
// 2. manualContent — anything not on TMDB (YouTube series, music videos, etc.)

// ---- TMDB IDS ----
// Add the TMDB ID for any series or movie you want to pull automatically.
// Find the ID in the URL on themoviedb.org:
// themoviedb.org/tv/282471 → ID is 282471
// themoviedb.org/movie/12345 → ID is 12345

export const tmdbSeriesIds = [
  253710, // The Secret of Us
  282471, // ClaireBell
  155513, // GAP The Series
  225171, // Pluribus
];

export const tmdbMovieIds = [
  531428, // Portrait of a Lady on Fire
  254936, // Girltrash: All Night Long
  517582, // Dirty Computer
];

// ---- MANUAL CONTENT ----
// Anything not on TMDB goes here — same shape as before.
// Also use this to override TMDB data if needed (e.g. a better description).

export const manualContent = [

    {
    title: "Girls Like Girls [Official Music Video]",
    slug: "girls-like-girls",
    type: "Music Video",
    year: 2015,
    country: "United States",
    platform: "YouTube",
    genre: ["Music"],
    image: "https://static.tumblr.com/0579909e9ce987cb865636bcb8963156/qkam9ld/s2Xo9i3hu/tumblr_static_tumblr_static_6yt3ir62yo00088wgc4wwsk8o_focused_v3.png",
    description: "Official music video for Hayley Kiyoko's 'Girls Like Girls'",
    source: "manual",
  }
];