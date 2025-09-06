// Base prices (per 1k). 
// Rule: TikTok Views +₨1 ; Baaki sab services +₨2
const RAW = [
  { id:"tt-likes",   name:"TikTok Likes",   platform:"TikTok",   base: 20 },
  { id:"tt-views",   name:"TikTok Views",   platform:"TikTok",   base: 18 }, // +1 → 19
  { id:"tt-follow",  name:"TikTok Followers", platform:"TikTok", base: 40 },
  { id:"ig-follow",  name:"Instagram Followers", platform:"Instagram", base: 60 },
  { id:"ig-likes",   name:"Instagram Likes", platform:"Instagram", base: 30 },
  { id:"yt-views",   name:"YouTube Views",  platform:"YouTube",  base: 45 },
  { id:"yt-subs",    name:"YouTube Subscribers", platform:"YouTube", base: 120 },
  { id:"fb-likes",   name:"Facebook Page Likes", platform:"Facebook", base: 35 }
];

// Final prices after +1 / +2 rule
const SERVICES = RAW.map(s=>{
  let price = s.base;
  if (s.id === "tt-views") price += 1; // TikTok views rule
  else price += 2;                     // sab par +2
  return { ...s, price };
});
