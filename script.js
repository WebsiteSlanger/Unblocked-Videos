const videos = [
  {
    title: "i made a GPU at home",
    videoId: "HRfbQJ6FdF0",
    thumbnail: "https://i.ytimg.com/vi/HRfbQJ6FdF0/hq720.jpg"
  },
  {
    title: "this malware hides in a WALLPAPER",
    videoId: "LwKOS10lblk",
    thumbnail: "https://i.ytimg.com/vi/LwKOS10lblk/hq720.jpg"
  },
  {
    title: "I Made a Fake Admin Panel to Troll Roblox Players",
    videoId: "MWI5IBQFmXk",
    thumbnail: "https://img.youtube.com/vi/MWI5IBQFmXk/sddefault.jpg"
  },
  {
    title: "*NEW* Black Flash Power Is OVERPOWERED in INK GAME (Roblox)",
    videoId: "gUKPBHLC97Y",
    thumbnail: "https://img.youtube.com/vi/gUKPBHLC97Y/sddefault.jpg"
  },
  {
    title: "The Roblox Spawnism Drama Got WORSE..",
    videoId: "QdT0LIgIyMM",
    thumbnail: "https://img.youtube.com/vi/QdT0LIgIyMM/sddefault.jpg"
  },
  {
    title: "What Character Can Defeat 1,000 CRABS in The Strongest Battlegrounds?",
    videoId: "8pvP02NBIM4",
    thumbnail: "https://img.youtube.com/vi/8pvP02NBIM4/sddefault.jpg"
  },
  {
    title: "The Broken Script Just Got UPDATED And It's INSANE...",
    videoId: "uxPO4mIuUAw",
    thumbnail: "https://img.youtube.com/vi/uxPO4mIuUAw/sddefault.jpg"
  },
  {
    title: "CHINESE HORROR GAMES ARE AMAZING. | Dread Flats (Full Game)",
    videoId: "Jtm3IOp4yj4",
    thumbnail: "https://img.youtube.com/vi/Jtm3IOp4yj4/hqdefault.jpg"
  },
  {
    title: "THIS NEW SPONGEBOB HORROR GAME IS ABSOLUTE INSANITY.",
    videoId: "-6QR7UwOHy4",
    thumbnail: "https://img.youtube.com/vi/-6QR7UwOHy4/hqdefault.jpg"
  },
  {
    title: "WORKING THE NIGHT SHIFT AS A PARK RANGER. | Last Report (Full Game)",
    videoId: "fpOE2JT5Lxs",
    thumbnail: "https://img.youtube.com/vi/fpOE2JT5Lxs/hqdefault.jpg"
  },
  {
    title: "The CLASSROOMS updated & added a HORRIFIC ENTITY. (KIDROOMS Update)",
    videoId: "30-KnawRoHQ",
    thumbnail: "https://img.youtube.com/vi/30-KnawRoHQ/hqdefault.jpg"
  }
];

const videoGrid = document.getElementById('videoGrid');
const mainVideo = document.getElementById('mainVideo');
const mainTitle = document.getElementById('mainTitle');
const searchInput = document.getElementById('searchInput');

function loadVideos(list) {
  videoGrid.innerHTML = "";
  list.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <div class="info">
        <div class="title">${video.title}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      mainVideo.src = `https://www.youtube.com/embed/${video.videoId}`;
      mainTitle.textContent = video.title;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    videoGrid.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
  loadVideos(filtered);
});

loadVideos(videos);
