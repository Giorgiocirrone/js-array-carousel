/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato. 
Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. 
Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto 
insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, 
deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete 
liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente 
all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere 
un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe 
aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare 
alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */


//Preparazione 

//posso prendere anche il sorgente delle immagini 


const sources = ['image/img/01.webp', 'image/img/02.webp', 'image/img/03.webp', 'image/img/04.webp', 'image/img/05.webp'];






// Prendiamo gli elementi che ci interessano  dal DOM 

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
// la prendo perchè ci devo iniettare dentro le immagini 
const carosellogallery = document.querySelector('.gallery');
const thumbgallery = document.getElementById('thumdnails');


//adesso genero le immagini girando sull vettore 
/*
for (let i = 0; i < sources.length; i++) {

    const src = sources[i];//scorro in questo modo la mia immagine sarà governata da questo indice 
    const image = document.createElement('img');//ricordti nodo.src
    image.src = src;
    image.alt = `landscape-${i + 1}`;
    carosellogallery.appendChild(image);
}

*/

//template literal 

//variabile di appoggio 
let imgs = '';
for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt = "landscape-${i + 1}" src = "${sources[i]}">`
    //in italiano si dice src prendi l'elemento corrente dell'array sorgente


}
//metto tutto in pagina 

carosellogallery.innerHTML = imgs;
thumbgallery.innerHTML = imgs;




//prendo tutte le immagini con un selettore css e mi prende tutti gli elementi che corrispondono a quel selettore css 
//vale anche per le miniature 
const images = document.querySelectorAll('#carosello img');
const thumbs = document.querySelectorAll('#thumdnails img');

// io ho una lista di nodi che pur non essendo un array posso gestirle come tali , ovvero una collection di nodi 

//mi trovo tutto l'elemento infatti 

/* cosa fighissima se fai console.log ti spunta node liste spaziale che  figo  */


//rendiamo visibile la prima immagine 
//images[0].classList.add('active');

//bisogna far gestire tutto in funzione dell'indice dento image 


let currentActiveIndex = 0; //let perchè deve cambiare 

images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');

//eventi dinamici 

//reagiamo al next 

nextButton.addEventListener('click', function () {

    //blocchiamo se siamo alla fine 
    //if (currentActiveIndex === images.length - 1) return;
    //se voglio fare il giro 




    //la prima cosa che deve accadere è togliere la classe active all'immagine avente classe active 

    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');
    //incremento l'indice di currnetActiveIndex

    //incremento dell'indice 
    currentActiveIndex++;


    //controllo indice per fare il giro 

    if (currentActiveIndex === images.length) {
        //vuole di re che sono fuori 
        currentActiveIndex = 0;

    }

    //mettere la classe active all'immagine successiva

    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');



});


//tutto deve  ruotare attorno alla variabile indice infatti nel prev viene fatta la stessa operazione ma la contrario 










//reagiamo al prev

prevButton.addEventListener('click', function () {

    //blocchiamo se siamo all'inizio 

    // if (!currentActiveIndex) return; //soluzione 1 che blocco 




    //la prima cosa che deve accadere è togliere la classe active all'immagine avente classe active 

    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');
    //incremento l'indice di currnetActiveIndex

    //Decremento dell'indice 
    currentActiveIndex--;
    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }


    //mettere la classe active all'immagine precente

    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');


});

//current acrtive va dichiatato fuori così lo possono vedere i bottoni
//così facendo si fa riferimento ad una 'verità soltanto'


//inoltre è un informazione centrale


//bisogna sistemare il currentindex in modo tale che il suo incremento arrivi fino ad un certo limite
//una volta che arriva a 5  ritorna indietro, bloccare , oppure levare la freccia appena si arriva alla fine



//miniature impostazione sono delle riproduzioni delle immagini in miniatura



//facciamo funzionare tutto con js per via della classe active

/*

facciamo generare tutto js=> hai generato delle immagini con lo stesso landscape



*/


//feedback visivo 


//devono reagire al click adesso abbiamo più bottoni generati dinamicamente 
//sono in una lista di nodi 
//prendo ciascuno di loro e gli metto un evento listener 




//evento dinamico aggiunto 

for (let i = 0; i < thumbs.length; i++) {

    //quando sono un array giro per tutti gli elementi
    const thumbnail = thumbs[i]; //prendo elemento di volta in volta in una costane per semplicità
    thumbnail.addEventListener('click', function () {
        //cosa faccio al click 
        images[currentActiveIndex].classList.remove('active');
        thumbs[currentActiveIndex].classList.remove('active');



        //setto l'indice currentaActive 


        currentActiveIndex = i;

        //devono diventare attive qualle con il relativo indice 
        images[currentActiveIndex].classList.add('active');
        thumbs[currentActiveIndex].classList.add('active');



    })
};