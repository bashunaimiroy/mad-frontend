import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="about__heading">
          KickDrum | Katalogue
        </h1>

        <div className="about__section"><h2 className="about__subheading">
          Our Mission
        </h2>

          <p className="about__paragraph">
            To make <em>listening local</em> simple and compelling
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
          Our Message
        </h2>

          <p className="about__paragraph">
            Montreal is home to a vibrant and dynamic music scene. This is not because of countless international festivals and touring acts, but the thousands of talented, underground, local artists who call it home.
        </p>

          <p className="about__paragraph">
            Independent venues also contribute significantly to this atmosphere, as they provide accessible opportunities for artists to grow and showcase their work. Music performed at spaces such as Casa del Popolo and l’Escogriffe, not the Bell Centre or MTelus, are what makes Montréal special.
        </p>

          <p className="about__paragraph">
            However, as a consequence of climbing rental prices, an increasing number of these vital local venues are forced to move or shut down (i.e. Divan Orange and Le Cagibi). Artists that have lived in and built up the cultural capital of neighbourhoods such as the Mile End are forced out to make room for more commercial properties and international brands.
        </p>

          <p className="about__paragraph">
            In this environment it’s more important than ever to celebrate and support local artists… that is unless you actually want our city to resemble Toronto?
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
          Our Inspiration
        </h2>

          <p className="about__paragraph">
            <em>It shouldn’t be hard to find local artists you’ll love</em>
          </p>

          <p className="about__paragraph">
            Major streaming platforms such as Apple Music and Spotify don’t give listeners the option to browse artists by location, and only offer limited playlist options associated with certain cities. That means if you want to listen local, you ’ll have to ask around, google away, sift through niche media, or dig through local event listings. It should be easy to discover music being created in your own backyard!
        </p>

          <p className="about__paragraph">
            So, we’ve done all the hard work for you and have compiled a growing list of over 1,000 local artists and bands into one place.
        </p>

          <p className="about__paragraph">
            Discover music you’ll love through browsing, listening to our curated playlists, searching through a variety of different genre tags, or by checking out our local concert listings!
        </p></div>



        <div className="about__section"><h2 className="about__subheading">
          Why Listening Local Matters
        </h2>

          <p className="about__paragraph">
            The many benefits associated with buying local such as transparency and fair wage labour are widely celebrated. Whether buying groceries or clothing, people have become increasingly concerned with the origin of a product and who produced it. When it comes to music, this mindset has seemingly lagged behind, despite the fact that listening local is buying local. Here are some great reasons to support local music:
        </p>

          <p className="about__paragraph">
            <ul className="about__list">
              <li>Supporting local artists means your money remains in the local economy and creates opportunities for the local artistic community as a whole: venues, labels, festivals, event producers and promoters, booking agents, and more!</li>
              <li>Catching a concert at a small-scale local venue is one of the best ways you can support the continued existence of a vibrant music scene</li>
              <li>You’ll have more frequent opportunities to see a local artist perform live and experience meaningful interactions</li>
              <li>Witnessing an artist develop over time is a meaningful experience</li>
              <li>It’s often much cheaper to see a locally based artist than a touring one</li>
              <li>You may find yourself with a newfound appreciation for your community</li>
            </ul>
          </p></div>

        <div className="about__section"><h2 className="about__subheading">
          Submissions</h2>

          <p className="about__paragraph">
            If you’re an artist or band based in Montréal, but can’t find yourself on our database, head to the <Link to="/submit">submission page</Link>! We’d love to add you.
        </p>

          <p className="about__paragraph">
            Also, if you spot any broken links or false, outdated or missing information we’d really appreciate you <a href="mailto:events@kickdrum.ca">sending us a message</a>!
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
          About KickDrum
        </h2>

          <p className="about__paragraph">
            KickDrum is a relationship-oriented, non-profit event producer and promoter that cares deeply about supporting local music communities.
        </p>

          <p className="about__paragraph">
            We've worked equitably with over 250 artists/bands and have organized over 160 events since since 2015.
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
          Contact Us
        </h2>

          <p className="about__paragraph">
            For all inquiries e-mail us at <a href="mailto:events@kickdrum.ca">events@kickdrum.ca</a> or send us a direct message on <a href="https://www.facebook.com/kickdrumMTL">Facebook</a>!
        </p>

          <p className="about__paragraph">
            Follow us on our social media accounts below
</p>

          <p className="social-media-url"><a href="https://www.facebook.com/kickdrumMTL">Facebook</a></p>
          <p className="social-media-url"><a href="https://instagram.com/kickdrummtl/">Instagram</a></p>
          <p className="social-media-url"><a href="https://twitter.com/KickDrumMtl">Twitter</a></p>
          <p className="social-media-url"><a href="https://www.youtube.com/channel/UCs_OZ1ylUehBu7zEbiAm-oA">Youtube</a></p>
          <p className="social-media-url"><a href="http://spoti.fi/2H3XdzC">Spotify</a></p>
          <p className="social-media-url"><a href="https://soundcloud.com/kickdrummtl">Soundcloud</a></p>
          <p className="social-media-url"><a href="https://playmoss.com/en/kickdrummtl">Playmoss</a></p>
        </div>

      </div>
    );
  }
}

export default About;