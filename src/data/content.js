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
  218672, // Show Me Love
  238754, // The Loyal Pin
  257788, // Affair
  286069, // 4 Elements: The Air
  287114, // 4 Elements: The Water
  287115, // 4 Elements: The Earth
  285992, // 4 Elements: The Fire
  284488, // Harmony Secret
  3475, // The L Word
  89630, // The L Word: Generation Q
107005, // A League of Their Own
99610, // Feel Good
77031, // Vida
96718, // Genera+ion
79732, // She-Ra and the Princesses of Power
111616, // First Kill
210026, // Stupid Wife
14248, // Orange Is the New Black
69630, // The Bold Type
134373, // The Sex Lives of College Girls
66939, // Gypsy
89901, // Dickinson
91977, // Motherland: Fort Salem
95170, // Betty
76438, // Everything Sucks!
65988, // Wynona Earp
82424, // SKAM España 
90282, // The Morning Show
113367, // The Wilds
134949, // Rebelde
138089, // Harlem
61664, // Sense8
71578, // Atypical
67466, // Marvel's Runaways
69017, // One Day at a Time
90766, // Teenage Bounty Hunters
85552, // Euphoria
94605, // Arcane
80350, // New Amsterdam
81879, // Mrs. Fletcher
67780, // Easy
95, // Buffy the Vampire Slayer
56296, // Orphan Black
72750, // Killing Eve
46880, // The Fosters
81357, // Dead to Me
62688, // Supergirl
76669, // Elite
84584, // Dollface
61418, // Jane The Virgin
117581, // Ginny & Georgia
1948, // Degrassi: The Next Generation
65152, // Degrassi: Next Class
2081, // South of Nowhere
158154, // Heartbreak High
109958, // The Haunting of Bly Manor
72844, // The Haunting of Hill House
48866, // The 100
];

export const tmdbMovieIds = [
  531428, // Portrait of a Lady on Fire
  426613, // The Miseducation of Cameron Post
  254936, // Girltrash: All Night Long
  517582, // Dirty Computer
  419743, // Disobedience
  814776, // Bottoms
  860159, // Crush
  948549, // Love Lies Bleeding
  957304, // Drive-Away Dolls
  505600, // Booksmart
  597219, // The Half of It
  520172, // Happiest Season
  506281, // The World to Come
  540, // D.E.B.S.
  1544, // Imagine Me & You
  20770, // But I'm a Cheerleader
  258480, // Carol
  19316, // Saving Face
  14533, // Gia
  9303, // Bound
  31216, // I Can't Think Straight
  71325, // Kyss Mig
  27586, // The Runaways
  73939, // Pariah
  294, // Desert Hearts
  18212, // Better Than Chocolate
  107257, // A Perfect Ending
  11634, // Show Me Love
  56743, // Elena Undone
  44479, // The Watermelon Woman
  29371, // The Incredibly True Adventure of Two Girls in Love
454889, // Princess Cyd
19344, // Loving Annabelle
60421, // Circumstance
591275, // Fear Street: 1966
591274, // Fear Street: 1978
591273, // Fear Street: 1994
20139, // The Children's Hour
10818, // Water Lilies
28211, // Chloe
447034, // Vita & Virginia
9709, // My Summer of Love
17612, // Lost and Delirious
31031, // The World Unseen
210908, // All Cheerleaders Die
35052, // Cracks
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