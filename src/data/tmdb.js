// tmdb.js
// This file handles all TMDB API calls.
// By keeping API logic here, none of our .astro files need to know
// how TMDB works — they just call these functions and get data back.

const API_KEY = import.meta.env.TMDB_API_KEY;

// Base URL for all TMDB API requests
const BASE_URL = 'https://api.themoviedb.org/3';

// TMDB stores images separately — this is the base URL for posters
// "w500" means we want the 500px wide version
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// No headers needed with API key — just append it to the URL
const options = {
  headers: {
    'Content-Type': 'application/json',
  }
};

// ---- FETCH A SINGLE TV SHOW BY TMDB ID ----
// Usage: await fetchShow
export async function fetchShow(id) {
  // api_key is passed directly in the URL as a query parameter
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`, options);
  const data = await res.json();

  // TMDB returns { success: false, status_message: "..." } on errors
  if (!res.ok || data.success === false) {
    console.error(`Failed to fetch show ${id}:`, data.status_message ?? res.status);
    return null;
  }

  // Map TMDB's field names to match our content.js shape
  // so the rest of the app doesn't need to know about TMDB's structure
  return {
    title: data.name,
    slug: data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), // "Kissable Lips" → "kissable-lips"
    type: 'Series',
    year: new Date(data.first_air_date).getFullYear(),
    country: getCountryName(data.origin_country?.[0]) ?? 'Unknown',
    platform: data.networks?.[0]?.name ?? 'Unknown',
    status: data.status === 'Ended' ? 'Ended' : 'Ongoing',
    genre: data.genres?.map(g => g.name) ?? [],
    image: data.poster_path ? `${IMAGE_BASE}${data.poster_path}` : null,
    description: data.overview,
    tmdbId: id,
    source: 'tmdb',
  };
}

// ---- FETCH A SINGLE MOVIE BY TMDB ID ----
// Usage: await fetchMovie
export async function fetchMovie(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, options);
  const data = await res.json();

  // TMDB returns { success: false, status_message: "..." } on errors
  if (!res.ok || data.success === false) {
    console.error(`Failed to fetch movie ${id}:`, data.status_message ?? res.status);
    return null;
  }

  return {
    title: data.title,
    slug: data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    type: 'Movie',
    year: new Date(data.release_date).getFullYear(),
    country: getCountryName(data.production_countries?.[0]?.iso_3166_1) ?? 'Unknown',
    platform: 'Unknown',
    status: 'Ended',
    genre: data.genres?.map(g => g.name) ?? [],
    image: data.poster_path ? `${IMAGE_BASE}${data.poster_path}` : null,
    description: data.overview,
    tmdbId: id,
    source: 'tmdb',
  };
}

// ---- FETCH MULTIPLE SHOWS AT ONCE ----
// Pass an array of TMDB IDs, get back an array of formatted show objects
// Usage: await fetchShows([282471, 12345, 67890])
export async function fetchShows(ids) {
  // Promise.all runs all the fetches at the same time instead of one by one
  // This is much faster with many items
  const results = await Promise.all(ids.map(id => fetchShow(id)));
  return results.filter(Boolean); // filters out any null results from failed fetches
}

// ---- FETCH MULTIPLE MOVIES AT ONCE ----
export async function fetchMovies(ids) {
  const results = await Promise.all(ids.map(id => fetchMovie(id)));
  return results.filter(Boolean); // filters out any null results from failed fetches
}

// Maps ISO country codes to full names
// Add more as you add content from new countries
const COUNTRY_NAMES = {
  TH: 'Thailand',
  KR: 'South Korea',
  FR: 'France',
  US: 'United States',
  GB: 'United Kingdom',
  JP: 'Japan',
  CN: 'China',
  TW: 'Taiwan',
  PH: 'Philippines',
};

// Helper function — converts "TH" to "Thailand"
// Falls back to the raw code if we don't have it in our lookup
function getCountryName(code) {
  return COUNTRY_NAMES[code] ?? code;
}