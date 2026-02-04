// Dati delle slide con testi corretti e migliorati
const slides = [
    // Paragrafo 0
    {
        type: 'text',
        title: '',
        text: `Per Fede Serafika <3
        (Branchiosaura 🦕)
Da questo momento non mi guardare e non mi parlare,
vai solo avanti,
a meno che tu non ne abbia proprio necessità...
Scusa se ho sbagliato qualche parola,
o per colpa della mia dislessia o perché nella mia testa suonava carina,
ma sappi che in realtà tutto ciò significa già molto per me.`,
        buttons: [{text: 'INIZIAMO!', action: 'next'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 1
    {
        type: 'text',
        title: '',
        text: `Hey Fede... come va?
Cosa ti aspetti?
Spero che ti piaccia e che ti divertirai.
Ho provato a fare una cosa diversa dal solito,
non scontata e originale credo ahaha
Disclaimer: le cose che leggerai non le usare contro di me.`,
        buttons: [{text: 'Prosegui', action: 'next'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 2
    {
        type: 'text',
        title: '',
        text: `Allora,
ormai è tanto che siamo "occupanti" ahaha
quindi voglio provare ad uscire allo scoperto.
Faccio così perché, anche se non sembra, a parole non sono molto bravo.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 3
    {
        type: 'text',
        title: '',
        text: `Mi chiamo Daniele, ho 18 anni,
vado ancora a scuola, una scuola che non mi piace.
Mi piace andare in palestra (con te) e poi non penso che io abbia altri hobby.`,
        buttons: [{text: 'Stai perdendo tempo?', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 4
    {
        type: 'text',
        title: '',
        text: `Ok sì, è vero è vero, provo ad essere serio...`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 5
    {
        type: 'text',
        title: '',
        text: `Sono una persona molto ironica, simpatica dai,
organizzata, che ha bisogno di ordine nella testa e che pensa a 50 strategie ogni volta.
Sto con la testa fra le nuvole, mi perdo tra i miei pensieri positivi/negativi,
ma non conosco molto bene ancora me stesso e le mie emozioni.
Penso a tratti di essere apatico, ma di questo ne abbiamo già parlato.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 6
    {
        type: 'text',
        title: '',
        text: `Anche se penso di sembrarlo da fuori, credo di apparire
come una persona molto sicura di sé, tranquilla, zen, chill...
ma quella è solo apparenza che mi piace far credere.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 7
    {
        type: 'text',
        title: '',
        text: `In realtà sono una di quelle persone che è "morta dentro"
(non letteralmente eh, non saprei come spiegarlo).
Sono molto ansioso per qualunque cosa io faccia,
ho molta paura di tutto in generale.
Non sono sicuro di me, mi sento molto fragile, in meno rispetto a tutti,
sono una persona insicurissima che non vuole sbagliare niente.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 8
    {
        type: 'text',
        title: '',
        text: `A volte lo so,
sono un po' stronzo, moscio,
freddo, coglione, non affettuoso, bastardo,
ecc...`,
        buttons: [{text: 'Beh dai è vero', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 9
    {
        type: 'text',
        title: '',
        text: `Però credo anche di essere cambiato
e migliorato sotto questo punto di vista dai...
Sono carino, affettuoso, gentile, anche se ancora un po' freddo,
però questo è un problema di noi Rossi sembrerebbe.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 10
    {
        type: 'text',
        title: '',
        text: `Anche se non sembra,
per molte cose sono empatico, o meglio,
capisco le persone credo.
E mi dispiace quando ci rimani male,
a volte per colpa mia, per colpa del mio umore
che cambia facilmente a seconda di determinati contesti,
e questo ormai lo sai bene ahahah`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 11
    {
        type: 'text',
        title: '',
        text: `Però se io faccio e dico una cosa, la faccio
perché ho paura di danneggiare gli altri e
non mi va che ci stiano male per colpa mia.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 12
    {
        type: 'text',
        title: '',
        text: `Spero che tu questo lo abbia capito più o meno,
e che se lo faccio, lo faccio perché voglio che tu stia bene con me
e che la mia negatività non ti influenzi.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 13
    {
        type: 'text',
        title: '',
        text: `Quello che faccio però non voglio che
ti faccia pensare a cose strane (intendo i tuoi soliti pensieri),
perché ti ripeto: se io non volessi stare con te,
in questo momento non staresti leggendo queste cose.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 14 - CON 2 IMMAGINI FLUTTUANTI (img1.png e img2.jpeg)
    {
        type: 'text',
        title: '',
        text: `Come credo che tu capisca me,
io credo, o anzi spero/voglio capire te, quindi per qualunque cosa
io ci sono.
Qualunque cosa dobbiamo parlarne e non tenercelo in testa,
perché mi sto affezionando molto.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: true, right: true},
        floatingImages: {left: 'img/img1.png', right: 'img/img2.jpeg'}
    },

    // Paragrafo 15
    {
        type: 'text',
        title: '',
        text: `So anche che hai problemi di fiducia,
ma quella piano piano la otterrò e non ti darò motivi
per dubitare di me,
perché per qualunque cosa è meglio parlarne.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 16 - CON 1 IMMAGINE FLUTTUANTE (img3.jpeg)
    {
        type: 'text',
        title: '',
        text: `Io e te siamo molto diversi:
io sono ghiaccio, tu sei sole,
io sono notte, tu sei giorno, ecc...
ma credo che ci capiamo.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: true, right: false},
        floatingImages: {left: 'img/img3.jpeg', right: ''}
    },

    // Paragrafo 17
    {
        type: 'text',
        title: '',
        text: `In confronto a te infatti io ho molta meno esperienza:
tu hai costruito il Colosseo,
io ho iniziato le medie da poco.
Ahahahah
Ma ti ringrazio perché mi aspetti,
mi capisci, non acceleri le cose e mi ascolti.
Spero che anche tu ti senta sempre ascoltata da me.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 18
    {
        type: 'text',
        title: '',
        text: `Credo di aver detto tutto quello che sentivo di dire.
Spero che così anche tu per iscritto mi abbia capito meglio.
Se sentissi di dover aggiungere altro ormai te lo direi a voce,
ma per ora non credo ahahah`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 19 - CON 2 IMMAGINI FLUTTUANTI (img4.jpeg e img5.jpeg)
    {
        type: 'text',
        title: '',
        text: `Spero di farti stare bene come tu fai stare bene me.
Ti apprezzo così come sei, per la tua sincerità,
simpatia, sguardo, risata, rumori della pancia, per la tua cucina,
intelligenza, culo, affettuosità, bellezza, stile, tette, fortuna,
ECC...`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: true, right: true},
        floatingImages: {left: 'img/img4.jpeg', right: 'img/img5.jpeg'}
    },

    // Paragrafo 20 - CON 2 IMMAGINI FLUTTUANTI (img6.jpeg e img2.jpeg)
    {
        type: 'text',
        title: '',
        text: `Quindi tutto questo perché volevo andare oltre.
Ormai è da tanti mesi, credo che stiamo bene e
che io non riuscirei ad ora a immaginarmi un giorno senza darti un semplice buongiorno.`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: true, right: true},
        floatingImages: {left: 'img/img6.jpeg', right: 'img/img2.jpeg'}
    },

    // Paragrafo 21 - NIENTE IMMAGINI FLUTTUANTI
    {
        type: 'text',
        title: '',
        text: `Quindi...
farò una cosa come alle elementari.
Prenditi il tempo che vuoi...`,
        buttons: [{text: 'Avanti', action: 'next'}, {text: 'Indietro', action: 'back'}],
        showFloating: {left: false, right: false}
    },

    // Paragrafo 22 - PROPOSTA con immagine g1.jpeg
    {
        type: 'proposal',
        image: 'img/g1.jpeg',
        title: '',
        text: `Vogliamo smettere di essere OCCUPANTI
e fidanzarci?`,
        buttons: [{text: 'SI', action: 'yes'}, {text: 'NO', action: 'no'}],
        proposalNumber: 0,
        showFloating: {left: false, right: false}
    },

    // Paragrafo 23 - Se ha votato SI alla prima
    {
        type: 'already_yes',
        title: '',
        text: `Ma come già sì? Cioè grazie, ma io avevo preparato un bel giochino per te.
Vota sempre no (finché puoi ahahah)`,
        buttons: [{text: 'Indietro', action: 'back_to_proposal'}],
        showFloating: {left: false, right: false}
    }
];

// 10 slide del giochino NO con immagini g2 - g11
const noGameSlides = [
    {text: 'Dai, sicura?', image: 'img/g2.jpeg'},
    {text: 'Ti prego, vota bene!', image: 'img/g3.jpeg'},
    {text: 'Ripensaci...', image: 'img/g4.jpeg'},
    {text: 'Fai la scelta giusta!', image: 'img/g5.jpeg'},
    {text: 'Mi metto a piangere!', image: 'img/g6.jpeg'},
    {text: 'Confermi al 100%?', image: 'img/g7.jpeg'},
    {text: 'Dai su!', image: 'img/g8.jpeg'},
    {text: 'Sei sicura?', image: 'img/g9.jpeg'},
    {text: 'Ultima possibilità!', image: 'img/g10.jpeg'},
    {text: 'Solo il SI ormai!', image: 'img/g11.jpeg'}
];

let currentSlide = 0;
let noGameIndex = 0;
let isInNoGame = false;

// Crea bolle animate nello sfondo
function createBubbles() {
    const background = document.getElementById('background');
    for (let i = 0; i < 22; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 85 + 45;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 13 + 13) + 's';
        bubble.style.animationDelay = Math.random() * 7 + 's';
        background.appendChild(bubble);
    }
}

// Crea girasoli stilizzati celeste decorativi
function createSunflowers() {
    const background = document.getElementById('background');
    const positions = [
        {top: '8%', left: '12%', delay: 0},
        {top: '75%', left: '8%', delay: 5},
        {top: '15%', left: '88%', delay: 10},
        {top: '82%', left: '85%', delay: 15},
        {top: '45%', left: '5%', delay: 20},
        {top: '50%', left: '92%', delay: 25}
    ];

    positions.forEach(pos => {
        const sunflower = document.createElement('div');
        sunflower.className = 'sunflower-deco';
        sunflower.style.top = pos.top;
        sunflower.style.left = pos.left;
        sunflower.style.animationDelay = pos.delay + 's';
        background.appendChild(sunflower);
    });
}

// Mostra slide corrente con transizione
function showSlide(index, skipTransition = false) {
    const slide = slides[index];
    const content = document.getElementById('slideContent');
    const floatingLeft = document.getElementById('floatingLeft');
    const floatingRight = document.getElementById('floatingRight');

    // Aggiungi classe di transizione
    if (!skipTransition) {
        content.classList.add('transitioning');
        setTimeout(() => {
            renderSlide(slide, content, floatingLeft, floatingRight);
            content.classList.remove('transitioning');
        }, 400);
    } else {
        renderSlide(slide, content, floatingLeft, floatingRight);
    }
}

// Renderizza il contenuto della slide
function renderSlide(slide, content, floatingLeft, floatingRight) {
    // Gestisci foto fluttuanti
    if (slide.showFloating.left) {
        floatingLeft.src = slide.floatingImages ? slide.floatingImages.left : 'img/img1.jpeg';
        floatingLeft.classList.add('active');
    } else {
        floatingLeft.classList.remove('active');
    }

    if (slide.showFloating.right) {
        floatingRight.src = slide.floatingImages ? slide.floatingImages.right : 'img/img2.jpeg';
        floatingRight.classList.add('active');
    } else {
        floatingRight.classList.remove('active');
    }

    // Crea contenuto
    let html = '';

    if (slide.type === 'proposal' || slide.image) {
        html += `<img src="${slide.image}" class="slide-image" alt="">`;
    }

    if (slide.title) {
        html += `<h2>${slide.title}</h2>`;
    }

    html += `<p>${slide.text}</p>`;
    html += `<div class="buttons">`;

    slide.buttons.forEach((btn) => {
        let btnClass = 'btn';
        if (btn.action === 'next' || btn.action === 'back_to_proposal') {
            btnClass += ' btn-next';
        } else if (btn.action === 'back') {
            btnClass += ' btn-back';
        } else if (btn.action === 'yes') {
            btnClass += ' btn-yes';
        } else if (btn.action === 'no') {
            btnClass += ' btn-no';
        }

        html += `<button class="${btnClass}" onclick="handleButton('${btn.action}')">${btn.text}</button>`;
    });

    html += `</div>`;
    content.innerHTML = html;
}

// Mostra slide del giochino NO con transizione
function showNoGameSlide(gameIndex) {
    const gameSlide = noGameSlides[gameIndex];
    const content = document.getElementById('slideContent');
    const floatingLeft = document.getElementById('floatingLeft');
    const floatingRight = document.getElementById('floatingRight');

    content.classList.add('transitioning');
    setTimeout(() => {
        floatingLeft.classList.remove('active');
        floatingRight.classList.remove('active');

        let html = `<img src="${gameSlide.image}" class="slide-image" alt="">`;
        html += `<p>${gameSlide.text}</p>`;
        html += `<div class="buttons">`;

        // Calcola scale dei bottoni
        const yesScale = 1 + (gameIndex + 1) * 0.16;
        const noScale = gameIndex < 9 ? Math.max(0.25, 1 - (gameIndex + 1) * 0.09) : 0;
        const noDisplay = gameIndex === 9 ? 'none' : 'inline-block';

        html += `<button class="btn btn-yes" onclick="handleButton('yes')" style="transform: scale(${yesScale})">SI</button>`;
        html += `<button class="btn btn-no" onclick="handleButton('no')" style="transform: scale(${noScale}); display: ${noDisplay}">NO</button>`;
        html += `</div>`;

        content.innerHTML = html;
        content.classList.remove('transitioning');
    }, 400);
}

// Gestisci click bottoni
function handleButton(action) {
    if (action === 'next') {
        currentSlide++;
        if (currentSlide < slides.length) {
            showSlide(currentSlide);
        }
    } else if (action === 'back') {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    } else if (action === 'back_to_proposal') {
        // Torna alla proposta iniziale (paragrafo 22)
        currentSlide = 22;
        isInNoGame = false;
        noGameIndex = 0;
        showSlide(currentSlide);
    } else if (action === 'yes') {
        if (!isInNoGame && currentSlide === 22) {
            // Ha votato SI alla prima proposta, vai al paragrafo 23
            currentSlide = 23;
            showSlide(currentSlide);
        } else {
            // Ha votato SI durante il giochino o dopo il paragrafo 23
            showHeartScreen();
        }
    } else if (action === 'no') {
        if (!isInNoGame) {
            // Inizia il giochino
            isInNoGame = true;
            noGameIndex = 0;
            showNoGameSlide(noGameIndex);
        } else {
            // Continua nel giochino
            if (noGameIndex < 9) {
                noGameIndex++;
                showNoGameSlide(noGameIndex);
            }
        }
    }
}

// Mostra schermata finale con transizione fluida
function showHeartScreen() {
    // Crea overlay di transizione
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'linear-gradient(135deg, #a8d8ea, #d4f1f9)';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.8s ease';
    document.body.appendChild(overlay);

    // Fade in dell'overlay
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 50);

    // Reindirizza dopo la transizione (LINK ONLINE)
    setTimeout(() => {
        window.location.href = 'https://rdandix.github.io/Finale/';
    }, 800);
}

// Inizializza
createBubbles();
createSunflowers();
showSlide(0, true);
