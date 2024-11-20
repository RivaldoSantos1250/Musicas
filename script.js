// Lista de músicas
const musicList = [
    { name: "Música da Agencia Fortnite remixada", src: "02.mp3" },
    { name: "Música da Agencia Remaster", src: "01.mp3" },
    { name: "Música do CS 1.6. DA VONTADE DE CHORAR", src: "cs.mp3" },
    { name: "Música do cs com a melodia boa. EPICO DA VONTADE DE CHORAR", src: "cs2.mp3" },
    { name: "5 Duelista", src: "5duelista.mp3" },
    { name: "5 Duelista Remaster", src: "5duelistaremaster.mp3" },
    { name: "Dua Lipa ", src: "dualipa.mp3" },
    { name: "Dua Lipa Remaster", src: "dualiparemaster.mp3" },
    { name: "Super Power", src: "superpower.mp3" },
    { name: "Super Power Remaster", src: "superpowerremaster.mp3" },
    { name: "Song 3", src: "music/song3.mp3" },
    { name: "Song 3", src: "music/song3.mp3" },
    
  ];
  
  // Referências aos elementos
  const ul = document.getElementById("music-list");
  const audioPlayer = document.getElementById("audio-player");
  
  // Adiciona as músicas à lista
  musicList.forEach((music, index) => {
    const li = document.createElement("li");
    li.textContent = music.name;
    li.addEventListener("click", () => {
      audioPlayer.src = music.src;
      audioPlayer.play();
    });
    ul.appendChild(li);
  });
  