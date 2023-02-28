var musicas = [
    {titulo:'Instant Crush (Feat.Julian Casablanca)', artista:'Daft Punk, Julian Casablancas', src:'musicas/daft-punk-instant-crush-feat-julian-casablancas.mp3', img:'./Imagem/Daftpunk.jpg'},
    {titulo:'not me mix', artista:'im gone', src:'musicas/not-me-mix.mp3', img:'./imagem/Notmix.jpg'},
    {titulo:'Kosandra', artista:'Miyagi & Andy Panda', src:'musicas/Kosandra.mp3', img:'./imagem/Kosandraimg.jpg'},
    {titulo:'The adults Are talking', artista:'The strokes', src:'musicas/The-Strokes-The-Adults-Are-Talking-_Official-Video_.mp3', img:'./Imagem/Thestrokes.jpg'},
    {titulo:'Just the Two of Us', artista:'Grover Washington Jr.', src:'musicas/The-Two-Of-Us.mp3', img:'./imagem/maxt.jpg'},
    {titulo:'я люблю тебя давно', artista:'Rauf & Faik', src:'musicas/Rauf-_-Faik-я-люблю-тебя-давно-_Official-Audio_.mp3', img:'./imagem/kaisen.jpg'},
    {titulo:'я люблю тебя', artista:'Rauf & Faik', src:'musicas/я-люблю-тебя.mp3', img:'./imagem/Juntos.jpg'},
    {titulo:'Наверно ты меня не помнишь', artista:'JONY, HammAli', src:'musicas/JONY_-HammAli-клипа.mp3', img:'./imagem/Jony.jpg'}
]  
 
 var musica = document.querySelector('audio');
 var indexMusica = 0;

 var duracaoMusica = document.querySelector('.fim');

 var imagem = document.querySelector('img');
 var nomeMusica = document.querySelector('.descricao h2');
 var nomeArtista = document.querySelector('.descricao i');

 //duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
 renderizarMusica(indexMusica);
 

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', Atualizarbarra);

document.querySelector('.anterior').addEventListener('click', () => {   
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 8;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 8){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration)); 
    });
    
}

function tocarMusica() {
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}

function Atualizarbarra() {
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    var tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    var campoMinutos = Math.floor(segundos/60);
    var campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos;
}