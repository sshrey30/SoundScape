const music = new Audio('songs/b10.mp3');
// music.play();

const songs = [
    {
        id: "b1",
        songName: `Why This Kolaveri Di
        <div class="subtitle"> Anirudh Ravichander, Dhanush</div>`,
        poster: "img/b1.jpg"
    },

    {
        id: "b2",
        songName: `DJ Wale Babu
        <div class="subtitle">Badshah, Aastha Gill, Nilesh P</div>`,
        poster: "img/b2.jpg"
    },

    {
        id: "b3",
        songName: `Bulleya
        <div class="subtitle">Pritam Chakraborty</div>`,
        poster: "img/b3.jpg"
    },

    {
        id: "b4",
        songName: `Channa Mereya
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/b4.jpg"
    },

    {
        id: "b5",
        songName: `Chikni Chameli
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/b5.jpg"
    },

    {
        id: "b6",
        songName: `Gerua
        <div class="subtitle">Pritam, Arijit Singh, Antara Mitra</div>`,
        poster: "img/b6.jpg"
    },

    {
        id: "b9",
        songName: `Hawayein
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/b9.jpg"
    },
    
    {
        id: "b10",
        songName: `What Jhumka?
        <div class="subtitle">Pritam, Arijit Singh, Jonita Gandhi, Ranveer Singh, Amitabh Bhattacharya</div>`,
        poster: "img/b10.jpg"
    },

    {
        id: "b11",
        songName: `Kamariya
        <div class="subtitle"> Darshan Raval, DJ Chetas</div>`,
        poster: "img/b11.jpg"
    },

    {
        id: "b12",
        songName: `Kar Gayi Chull
        <div class="subtitle">Neha Kakkar, Badshah, Amaal Mallik, Sukriti Kakar, Fazilpuria</div>`,
        poster: "img/b12.jpg"
    },

    {
        id: "b15",
        songName: `Raataan Lambiyan
        <div class="subtitle">Asees Kaur, Jubin Nautiyal, and Tanishk Bagchi</div>`,
        poster: "img/b15.jpg"
    },

    {
        id: "b16",
        songName: `Ranjha
        <div class="subtitle">B Praak, Jasleen Royal, Anvita Dutt Guptan, Romy</div>`,
        poster: "img/b15.jpg"
    },

    {
        id: "b17",
        songName: `Shayad - Love Aaj Kal
        <div class="subtitle">Arijit Singh, Pritam Chakraborty, Madhubanti Bagchi, Kartik, Sara</div>`,
        poster: "img/b17.jpg"
    },

    {
        id: "b18",
        songName: `Shaabaashiyaan
        <div class="subtitle">Abhijeet Srivastava, Anand Bhaskar, Shilpa Rao, Akshay, Vidya</div>`,
        poster: "img/b18.jpg"
    },

    {
        id: "b19",
        songName: `The Breakup Song
        <div class="subtitle">Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz</div>`,
        poster: "img/b19.jpg"
    },

    {
        id: "b20",
        songName: `Dil Jhoom
        <div class="subtitle">Arijit Singh, Shreya Ghoshal</div>`,
        poster: "img/b20.jpg"
    },

    {
        id: "b21",
        songName: `Chaleya
        <div class="subtitle">Arijit Singh, Shilpa Rao</div>`,
        poster: "img/b21.jpg"
    },

    {
        id: "b22",
        songName: `Dil Mein Chhupa Loonga
        <div class="subtitle">Tulsi Kumar</div>`,
        poster: "img/b22.jpg"
    },

    {
        id: "b23",
        songName: `Zihaal e Miskin
        <div class="subtitle">Vishal Mishra, Shreya Ghoshal</div>`,
        poster: "img/b23.jpg"
    },

    {
        id: "b24",
        songName: `Guli Mata
        <div class="subtitle">Darshan Raval</div>`,
        poster: "img/b24.jpg"
    },

    {
        id: "b25",
        songName: `Jitni Dafa
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/b25.jpg"
    },

    {
        id: "b26",
        songName: ` Phir Bhi Tumko Chaahunga
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/b26.jpg"
    },

    {
        id: "b27",
        songName: `Dil Hai Nahi
        <div class="subtitle">Altamash Faridi</div>`,
        poster: "img/b27.jpg"
    },

    {
        id: "b28",
        songName: `Naacho Naacho
        <div class="subtitle">Vishal Mishra, Arijit Singh</div>`,
        poster: "img/b28.jpg"
    },

    {
        id: "b29",
        songName: `Kesariya
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/b29.jpg"
    },

    {
        id: "b30",
        songName: `Saami Saami
        <div class="subtitle">Arijit Singh, Sunidhi Chauhan</div>`,
        poster: "img/b30.jpg"
    },

    {
        id: "h1",
        songName: `With You
        <div class="subtitle">AP Dhillon</div>`,
        poster: "img/h1.jpeg"
    },

    {
        id: "h2",
        songName: `Kuley Kuley
        <div class="subtitle">Yo Yo Honey Singh, Apache Indian, Gill Machhrai, Rony Ajnali</div>`,
        poster: "img/h2.jpeg"
    },

    {
        id: "h3",
        songName: `Dil Diyan Gallan
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/h3.jpeg"
    },

    {
        id: "h4",
        songName: `Pasoori
        <div class="subtitle">Ali Sethi, Shae Gill</div>`,
        poster: "img/h4.jpeg"
    },

    {
        id: "h5",
        songName: `Obsessed
        <div class="subtitle">Riar Saab, Abhijay Sharma</div>`,
        poster: "img/h5.jpeg"
    },
]

// Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

// });


//Download




//Searching
let search_results = document.getElementsByClassName('search-results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(id);

    let card = document.createElement('a');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="search">
                                ${songName}
                            </div>`;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=> {
    let input_value = input.value.toLowerCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('search')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toLowerCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.mp3`;
        
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        // makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let rotd_left = document.getElementById('rotd_left');
let rotd_right = document.getElementById('rotd_right');
let rpop = document.getElementsByClassName('rpop')[0];

rotd_right.addEventListener('click', () => {
    rpop.scrollLeft += 600;
});
rotd_left.addEventListener('click', () => {
    rpop.scrollLeft -= 600;
});

let psongs_left = document.getElementById('psongs_left');
let psongs_right = document.getElementById('psongs_right');
let popsongs = document.getElementsByClassName('popsongs')[0];

psongs_right.addEventListener('click', () => {
    popsongs.scrollLeft += 600;
});

psongs_left.addEventListener('click',() => {
    popsongs.scrollLeft -= 600;
});






var data= {
    chatinit:{
        title: ["Hello mate 👋🏻","I am SoundScape's Bot 🤝","What's your mood today 🤔?", "Tell me your mood and i'll love to recommend you some beautiful songs 🎶!"],
        options: ["Happy 😃", "Sad 😔", "Energetic 🤩", "Relaxing 😌", "Romantic 🥰"]
    },
    happy: {
        title:["It's a joy to see you so happy. Keep that smile shining! 😊\n\nYou can listen to these songs and enjoy your moment."],
        options:['Channa Mereya','Hawayein','What Jhumka?'],
        url : {
            more:"playlist.html",
            link:["playlist.html","playlist.html","playlist.html"]
        }
    },
    
    sad: {
        title:["Music has the power to heal the soul. Play these songs and let the melody comfort you. 🎶😔"],
        options:['The Breakup Song','Dil Hai Nahi','Zihaal e Miskin'],
        url : {
            more:"playlist.html",
            link:["playlist.html","playlist.html","playlist.html"]
        }
    },

    energetic: {
        title:["Turn up the volume and let the music fuel your boundless energy! 🎵💥"],
        options:['Kamariya','Raataan Lambiyan','Naacho Naacho'],
        url : {
            more:"playlist.html",
            link:["playlist.html","playlist.html","playlist.html"]
        }
    },

    relaxing: {
        title:["Take a deep breath, unwind, and let the soothing melodies carry you to a place of perfect relaxation. 🎵🌅"],
        options:['Dil Jhoom','Chaleya','Dil Mein Chhupa Loonga'],
        url : {
            more:"playlist.html",
            link:["playlist.html","playlist.html","playlist.html"]
        }
    },

    romantic: {
        title:["Let the music serenade your romantic heart, setting the perfect mood for love and passion. 🎵❤️‍🔥"],
        options:['Gerua','Shayad','Ranjha'],
        url : {
            more:"playlist.html",
            link:["playlist.html","playlist.html","playlist.html"]
        }
    },

}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.querySelector('.main-chatbot').style.position = "absolute"
        document.querySelector('.main-chatbot').style.bottom = "90px"
        document.querySelector('.main-chatbot').style.right = "10px"
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'Click on them and enjoy listening! 😎</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}