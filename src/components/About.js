import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class About extends Component {
  constructor(){
    super()
    this.state = {
      language: "en"
    }
  }
  changeLanguage = (langCode) => {
    this.setState( {language:langCode} )
  }
  render() {
    return this.state.language === "en" ? 
      <div className="about">       
        <div className="about__section about__section--center">
          <span className="about__language-link" onClick={()=>this.changeLanguage("en")} >en</span> / <span className="about__language-link" onClick={()=>this.changeLanguage("fr")} >fr</span>
        </div>

        <div className="about__section">
          <h2 className="about__subheading">
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
            Also, if you spot any broken links or false, outdated or missing information we’d really appreciate you <a href="mailto:katalogue@kickdrum.ca">sending us a message</a>!
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
            For all inquiries e-mail us at <a href="mailto:katalogue@kickdrum.ca">katalogue@kickdrum.ca</a> or send us a direct message on <a href="https://www.facebook.com/kickdrumMTL">Facebook</a>!
        </p>

    
        </div>

      </div>

      :

      <div className="about">       
        <div className="about__section about__section--center">
          <span className="about__language-link" onClick={()=>this.changeLanguage("fr")} >fr</span> / <span className="about__language-link" onClick={()=>this.changeLanguage("en")} >en</span>
        </div>

        <div className="about__section">
          <h2 className="about__subheading">
          Notre mission
          </h2>

          <p className="about__paragraph">
          Qu’<em>écouter localement</em> devienne simple et passionnant.  
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
        Notre message
        </h2>

          <p className="about__paragraph">
          Montréal abrite une scène musicale vibrante et dynamique.  Ceci n’est pas dû aux nombreux festivals et tournées internationaux, mais plutôt aux artistes locaux talentueux et « underground » qui y habitent.   
        </p>

          <p className="about__paragraph">
          Les salles indépendantes contribuent énormément à l’atmosphère musicale de Montréal, car elles offrent à nos artistes des opportunités accessibles pour se faire connaitre et se développer.  C’est la musique jouée dans les espaces comme la Casa del Popolo et l’Escogriffe, et non au Centre Bell ou MTelus, qui rend Montréal unique.  
        </p>

          <p className="about__paragraph">
          Cependant, dû aux hausses des prix de locations, plusieurs de ses salles indépendantes sont obligés de fermer ou de se déplacer (e.g. Divan Orange et le Cagibi. Les artistes ayant vécus et contribués à la construction la notre capitale culturelle de quartiers comme le Mile End sont obligés de donner place aux propriétés commerciales et marques internationales.  
        </p>

          <p className="about__paragraph">
          Dans un environnement comme le notre, célébrer et supporter nos artistes locaux est d’une importance majeure... à moins que vous vouliez vivre dans une ville comme Toronto?
          </p></div>

        <div className="about__section"><h2 className="about__subheading">
        Notre inspiration
        </h2>

          <p className="about__paragraph">
            <em>Trouver des artistes locaux que vous aimez ne devrait pas être difficile.</em>
          </p>

          <p className="about__paragraph">
          Les principales plateformes de diffusion telle que Spotify et Apple Music ne permettent pas aux auditeurs de parcourir les artistes par localisation, et ne permettent que quelques options de playlists associées à certaines villes.  Ceci veut dire que si vous désirez écouter de la musique locale, vous devez chercher indirectement – sur google, les médias de niche, bouche à oreille, ou les listes d’évènements locaux.  Découvrir de la musique créée dans ta propre arrière-cour ne devrait pas être si difficile!  
        </p>

          <p className="about__paragraph">
          Donc, nous avons travaillé fort pour vous en compilant une liste croissante de plus de 1,000 artistes et groupes de musique locaux à un endroit!  
        </p>

          <p className="about__paragraph">
          Découvrez de la musique que vous aimerez en naviguant, en écoutant nos listes de lecture organisées, en recherchant à travers une grande variété d’étiquettes de genres différentes, ou en consultant nos listes de concerts locaux! 

        </p></div>



        <div className="about__section"><h2 className="about__subheading">
        Pourquoi est-ce important d’écouter local
        </h2>

          <p className="about__paragraph">
          Les avantages de l’achat local tel que la transparence et l’équité salarial sont reconnus et célébrés.  Que ce soit l’achat de vêtements ou de l’épicerie, les gens se préoccupent de plus en plus e l’origine et le processus de production du produit.  Par contre, cette préoccupation semble absente quand il s’agit de musique, malgré le fait que l’écoute locale implique l’achat local.  Voici quelques bonnes raisons d’écouter de la musique locale: 
        </p>

          <p className="about__paragraph">
            <ul className="about__list">
              <li>Soutenir des artistes locaux signifie que votre argent demeurera dans l’économie locale et créera donc, dans l’ensemble, des opportunités pour la communauté artistique locale: des sites, labels, festivals, producteurs et promoteur d’évènements, agents, et plus encore! </li>
              <li>Assister à un concert dans un site local à petite échelle est la meilleure façon d’assurer l’existence de notre vibrante scène musicale!
</li>
              <li>Vous aurez plus d’opportunités d’assister à une performance d’un artiste local et de vivre des interactions significatives.  </li>
              <li>Observer le développement d’un artiste au fil du temps est une expérience unique et enrichissante. </li>
              <li>Voir la performance d’un artiste local est souvent moins couteux que celui d’artiste en tournée. </li>
              <li>Vous pourriez découvrir avec une nouvelle appréciation pour votre communauté.  </li>
            </ul>
          </p></div>

        <div className="about__section"><h2 className="about__subheading">
        Soumissions
</h2>

          <p className="about__paragraph">
          Si vous êtes un artiste ou groupe de musique basé à Montréal et n’êtes pas sur notre base de donnée, dirigez-vous vers notre page de soumission!  Il nous fera plaisir de vous ajouter! 
        </p>

          <p className="about__paragraph">
          Aussi, si vous notez des liens brisés ou des informations fausses, manquantes ou périmées, nous apprécierons énormément que vous <a href="mailto:katalogue@kickdrum.ca">nous envoyiez un message!</a>
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
        À propos de KickDrum
        </h2>

          <p className="about__paragraph">
          KickDrum est un organisme à but non lucrative qui produit et fait la promotion d’évènements musicaux.  C’est un organisme axé sur la formation de relations durables et à soutenir les communautés musicales locales.         
          </p>

          <p className="about__paragraph">
          Depuis 2015, nous avons travaillé équitablement avec plus de 250 artistes/groupes et organisé plus de 160 évènements.  
        </p></div>

        <div className="about__section"><h2 className="about__subheading">
        Contactez-nous 
        </h2>

          <p className="about__paragraph">
          Pour toutes questions svp écrivez-nous à <a href="mailto:katalogue@kickdrum.ca">katalogue@kickdrum.ca</a> ou envoyez-nous un message directement sur <a href="https://www.facebook.com/kickdrumMTL">Facebook</a>!              
        </p>

         
        </div>

      </div>
    
    

      
    
  }
}

export default About;