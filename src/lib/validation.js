const linkChecker = (band)=> [
    { name: "music", url: band.music_link },
    { name: "spotify", url: band.spotify_url },
    { name: "apple", url: band.apple_music_url },
    { name: "facebook", url: band.facebook_url },
    { name: "youtube", url: band.youtube_url },
    { name: "instagram", url: band.instagram_url },
    { name: "twitter", url: band.twitter_url }
  ].filter((val) => Boolean(val.url))
  
const emailChecker = (band)=> [
    { name: "Band", address: band.band_email },
    { name: "Management", address: band.management_email },
    { name: "Booking", address: band.booking_email },
    { name: "PR", address: band.pr_email }
  ].filter((val) => Boolean(val.address))

export {linkChecker,emailChecker}