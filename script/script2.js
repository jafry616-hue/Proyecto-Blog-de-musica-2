const artists = [
  {
    id: 1,
    name: "Bad Bunny",
    genre: "Reggaetón",
    country: "Puerto Rico",
    monthlyListeners: "82M",
    topSong: "DtMF",
    album: "Un Verano Sin Ti",
    year: "2022",
    bio: "El artista latino más escuchado del mundo y una revolución global del reggaetón.",
    img: "https://media.gettyimages.com/id/2259508025/es/foto/los-angeles-california-bad-bunny-poses-with-the-album-of-the-year-best-m%C3%BAsica-urbana-album-and.jpg?s=612x612&w=gi&k=20&c=YyiuyRRwbwMLKWiToNJ-l5j0pWSn82dB-wmz6ow9SZ4=",
    banner: "https://i.pinimg.com/originals/b6/d8/ef/b6d8efd604371cb517f04a6fa27ae079.jpg"
  },

  {
    id: 2,
    name: "Daddy Yankee",
    genre: "Reggaetón",
    country: "Puerto Rico",
    monthlyListeners: "45M",
    topSong: "Gasolina",
    album: "Barrio Fino",
    year: "2004",
    bio: "El Big Boss. Responsable de llevar el reggaetón al mundo entero.",
    img: "https://yt3.googleusercontent.com/jV_3iNb4YlKOkEQGSuB-jPEyAWeA-ur46V_ffZyMjUeh4bSe23p0N0HeaUvxraCMbPjGQVI79A=s900-c-k-c0x00ffffff-no-rj",
    banner: "https://www.rollingstone.com/wp-content/uploads/2022/09/RollingStone_DaddyYankee-7.jpg"
  },

  {
    id: 3,
    name: "Karol G",
    genre: "Reggaetón",
    country: "Colombia",
    monthlyListeners: "58M",
    topSong: "PROVENZA",
    album: "Mañana Será Bonito",
    year: "2023",
    bio: "La Bichota. Una de las artistas latinas más grandes del planeta.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDpR_PxASg-T2vgZwaNtT6zw6Ir4kvqyAOg&s",
    banner: "https://m.media-amazon.com/images/I/61LrWFp1ChL._AC_UF894,1000_QL80_.jpg"
  },

  {
    id: 4,
    name: "Peso Pluma",
    genre: "Corridos",
    country: "México",
    monthlyListeners: "50M",
    topSong: "Ella Baila Sola",
    album: "Génesis",
    year: "2023",
    bio: "Fenómeno global de los corridos tumbados.",
    img: "https://elcomercio.pe/resizer/v2/ZDXOQEW63ZFCVNRPAZ7M4HVQTQ.jpg?auth=11070c9e7fe3d169e8cf3505c648bd01c7717ffb825f8ff2e62fb340ad76642e&width=1200&height=699&quality=75&smart=true",
    banner: "https://www.gsocomplex.com/assets/img/PesoBanner-baee4620ef.jpg"
  },

  {
    id: 5,
    name: "Romeo Santos",
    genre: "Bachata",
    country: "República Dominicana",
    monthlyListeners: "32M",
    topSong: "Propuesta Indecente",
    album: "Fórmula Vol. 2",
    year: "2014",
    bio: "El Rey de la Bachata moderna.",
    img: "https://i.scdn.co/image/ab6761610000e5eb0d2f605c23090747230416db",
    banner: "https://www.romeo-santos.com/dist/img/header.jpg"
  },

  {
    id: 6,
    name: "Marc Anthony",
    genre: "Salsa",
    country: "Estados Unidos",
    monthlyListeners: "28M",
    topSong: "Vivir Mi Vida",
    album: "3.0",
    year: "2013",
    bio: "Leyenda de la salsa y música latina.",
    img: "https://cdn-p.smehost.net/sites/880fecb530514104ab6e5e8cc7b7927a/wp-content/uploads/2025/12/Marcanthony.jpg",
    banner: "https://snipeproductions.com/wp-content/uploads/2024/12/BANNER-MARC-ANTHONY-PICTURE-5.jpg"
  },

  {
  id: 7,
  name: "Vicente Fernández",
  genre: "Banda/Ranchera",
  country: "México",
  monthlyListeners: "18M",
  topSong: "Estos Celos",
  album: "Para Siempre",
  year: "2007",
  bio: "Ícono de la música ranchera y regional mexicana.",
  img: "https://cdn-p.smehost.net/sites/e20a57bbfd89420f9c28766e9d3c57c2/wp-content/uploads/2016/11/Foto-2.jpg",
  banner: "https://vicentefernandez.mx/wp-content/themes/vicentefernandez-v2/assets/img/bg/mobile-header.jpg"
},
{
  id: 8,
  name: "Banda MS",
  genre: "Banda",
  country: "México",
  monthlyListeners: "24M",
  topSong: "El Color de Tus Ojos",
  album: "La Mejor Versión de Mí",
  year: "2017",
  bio: "Una de las agrupaciones más populares del regional mexicano.",
  img: "https://www.soygrupero.com.mx/wp-content/uploads/2020/08/banda-ms-primer-concierto-streaming.jpg",
  banner: "https://www.jambase.com/wp-content/uploads/2019/10/banda-ms-ticketmaster-ram.jpg"
},
{
 name: "Calibre 50",
  genre: "Banda",
  country: "México",
  monthlyListeners: "13M",
  topSong: "Siempre Te Voy A Querer",
  album: "Simplemente Gracias",
  year: "2021",
  bio: "Agrupación destacada del regional mexicano con estilo norteño banda.",
  img: "https://i1.sndcdn.com/artworks-000083550218-ijp6q4-t500x500.jpg",
  banner: "https://sunrisemarketplace.com/wp-content/uploads/2017/09/SMP-guns-banner.jpg"
},

{
  id: 10,
  name: "Julión Álvarez",
  genre: "Banda",
  country: "México",
  monthlyListeners: "20M",
  topSong: "Te Hubieras Ido Antes",
  album: "Ni Diablo Ni Santo",
  year: "2017",
  bio: "Cantante reconocido por su estilo norteño banda y gran voz.",
  img: "https://www.saps.com.mx/wp-content/uploads/2026/02/Julion-Alvarez-y-su-Norteno-Banda-triunfa-con-doble-galardon-en-Premio-Lo-Nuestro-2026-1024x576.jpg",
  banner: "https://arrobandogruperos.com/wp-content/uploads/2026/01/Captura-de-Pantalla-2026-01-14-a-las-21.00.04.png"
},
{
  id: 11,
  name: "El Recodo",
  genre: "Banda",
  country: "México",
  monthlyListeners: "16M",
  topSong: "Y Llegaste Tú",
  album: "Ayer y Hoy",
  year: "2019",
  bio: "La Madre de Todas las Bandas, histórica agrupación mexicana.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3uCI5I4_7g0OncOxXSKU7y_bqjWmV6L1oA&s",
  banner: "https://www.nederlanderconcerts.com/assets/img/BandaElRecodo-Peacock-Press-1440x735-a741e74390.jpg"
},
{
  id: 12,
  name: "Christian Nodal",
  genre: "Banda",
  country: "México",
  monthlyListeners: "30M",
  topSong: "Adiós Amor",
  album: "Me Dejé Llevar",
  year: "2017",
  bio: "Artista moderno del regional mexicano con enorme éxito internacional.",
  img: "https://www.billboard.com/wp-content/uploads/2023/02/christian-nodal-pr-cr-JG-Music-Sony-Music-2023-billboard-1548.jpg",
  banner: "https://www.boletosexpress.com/events/661/66198.jpg"
},
{
  id: 14,
  name: "J Balvin",
  genre: "Reguetón",
  country: "Colombia",
  monthlyListeners: "55M",
  topSong: "Mi Gente",
  album: "Vibras",
  year: "2018",
  bio: "Pionero del reguetón colombiano con éxito global.",
  img: "https://static.independentespanol.com/2026/03/06/23/MUNDIAL-J_BALVIN_84197.jpg",
  banner: "https://www.clipartmax.com/png/middle/448-4485564_win-a-limited-edition-signed-j-balvin-merch-bundle-logo-de-j.png"
},
{
  id: 16,
  name: "Omar Courtz",
  genre: "Reguetón",
  country: "Puerto Rico",
  monthlyListeners: "12M",
  topSong: "En Su Nota",
  album: "Primera Musa",
  year: "2023",
  bio: "Artista emergente del género urbano con estilo fresco dentro del reguetón y trap latino.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73cLcnccYYqYogiqqlQfY7Jqx8RGhd7a8SQ&s",
  banner: "https://i1.sndcdn.com/visuals-000314412792-Jo5OFR-t1240x260.jpg"
}
  
];


// ========================================
// ELEMENTOS DOM
// ========================================

const artistContainer = document.getElementById("artist-list-container");
const artistDetail = document.getElementById("artist-detail");
const welcomeMsg = document.getElementById("welcome-msg");
const searchInput = document.getElementById("artist-search");
const genreButtons = document.querySelectorAll(".pill");


// ========================================
// RENDER SIDEBAR ARTISTS
// ========================================

function renderArtists(data) {

  artistContainer.innerHTML = "";

  data.forEach((artist) => {

    const card = document.createElement("div");
    card.className = "spotify-card";

    card.innerHTML = `
      <div class="spotify-card-img">
        <img src="${artist.img}" alt="${artist.name}">
      </div>

      <div class="spotify-card-info">
        <h4>${artist.name}</h4>

        <div class="spotify-meta">
          <span>${artist.genre}</span>
          <span>•</span>
          <span>${artist.monthlyListeners}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      renderArtistDetail(artist);
    });

    artistContainer.appendChild(card);
  });
}


// ========================================
// RENDER MAIN VIEW
// ========================================

function renderArtistDetail(artist) {

  welcomeMsg.style.display = "none";
  artistDetail.style.display = "block";

  artistDetail.innerHTML = `

    <div class="hero-banner">

      <img src="${artist.banner}" class="banner-img">

      <div class="overlay"></div>

      <div class="hero-content">

        <div class="verified">
          <i class="fas fa-check-circle"></i>
          <span>Artista Verificado</span>
        </div>

        <h1>${artist.name}</h1>

        <div class="hero-stats">
          <span>${artist.monthlyListeners} oyentes mensuales</span>
        </div>

      </div>
    </div>

    <div class="artist-main-content">

      <div class="artist-top-section">

        <img src="${artist.img}" class="artist-profile">

        <div class="artist-data">

          <button class="play-btn">
            <i class="fas fa-play"></i>
          </button>

          <div class="artist-extra">
            <p><strong>Género:</strong> ${artist.genre}</p>
            <p><strong>País:</strong> ${artist.country}</p>
            <p><strong>Álbum Más Escuchado:</strong> ${artist.album}</p>
            <p><strong>Canción Más Popular:</strong> ${artist.topSong}</p>
            <p><strong>Lanzamiento:</strong> ${artist.year}</p>
          </div>

        </div>

      </div>

      <div class="about-section">

        <h2>Acerca del artista</h2>

        <p>${artist.bio}</p>

      </div>

      <div class="popular-section">

        <h2>Popular</h2>

        <div class="track-item">
          <span class="track-number">1</span>

          <div class="track-info">
            <h4>${artist.topSong}</h4>
            <p>${artist.album}</p>
          </div>

          <span class="track-plays">${artist.monthlyListeners}</span>
        </div>

      </div>

    </div>
  `;
}


// ========================================
// FILTROS GÉNERO
// ========================================

genreButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    document
      .querySelector(".pill.active")
      .classList.remove("active");

    btn.classList.add("active");

    const genre = btn.dataset.genre;

    if (genre === "all") {
      renderArtists(artists);
      return;
    }

    const filtered = artists.filter(
      artist => artist.genre === genre
    );

    renderArtists(filtered);
  });
});


// ========================================
// SEARCH
// ========================================

searchInput.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase();

  const filtered = artists.filter((artist) => {

    return (
      artist.name.toLowerCase().includes(value) ||
      artist.genre.toLowerCase().includes(value)
    );

  });

  renderArtists(filtered);
});


// ========================================
// INIT
// ========================================

renderArtists(artists);