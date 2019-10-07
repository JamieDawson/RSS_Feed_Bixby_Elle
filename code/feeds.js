// Add RSS feeds below
// Url: Link to RSS feed xml (url must start with 'https://')
// Text: What users see in feed selection list
// Tags: What the user can say to automatically call certain feeds
module.exports = module.exports = [
  {
    url: 'https://www.elle.com/rss/all.xml/',
    urlText: 'Click here to see the full story on elle.com',
    text: 'Elle',
    tags: ['elle', "l", "ell", "L", "el"]
  },
  {
    url: 'https://www.wmagazine.com/feed/rss',
    urlText: 'Click here to see the full story on wmagazine.com',
    text: 'WMagazine',
    tags: ['wmagazine', 'w magazine', "W Magazine"]
  },
  {
    url: 'https://www.popsugar.com/fashion/feed',
    urlText: 'Click here to see the full story on wmagazine.com',
    text: 'PopSugar',
    tags: ['popsugar', 'pop sugar', "PopSugar"]
  },
]