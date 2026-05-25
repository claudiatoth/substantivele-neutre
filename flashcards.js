// ============================================
// FLASHCARDS - Genul Neutru în Germană (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · Material suplimentar
// 32 carduri · REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 5 terminații ÎNTOTDEAUNA neutre (10 carduri) ===
    { de: "das Mädchen", ro: "fata · -chen învinge logica de gen (capcană CLASICĂ)", audio: "audio/letters/maedchen.wav" },
    { de: "das Brötchen", ro: "chifla · -chen diminutiv (Brot + chen)", audio: "audio/letters/broetchen.wav" },
    { de: "das Häuschen", ro: "căsuța · -chen diminutiv (Haus + chen)", audio: "audio/letters/haeuschen.wav" },
    { de: "das Fräulein", ro: "domnișoara · -lein învinge logica (capcană feminin)", audio: "audio/letters/fraeulein.wav" },
    { de: "das Vöglein", ro: "păsărica · -lein diminutiv literar", audio: "audio/letters/voeglein.wav" },
    { de: "das Dokument", ro: "documentul · -ment SIGUR neutru", audio: "audio/letters/dokument.wav" },
    { de: "das Argument", ro: "argumentul · -ment SIGUR neutru", audio: "audio/letters/argument.wav" },
    { de: "das Ballett", ro: "baletul · -ett SIGUR neutru", audio: "audio/letters/ballett.wav" },
    { de: "das Thema", ro: "tema · -ma SIGUR neutru (atenție: -ă în RO ne pare feminin)", audio: "audio/letters/thema.wav" },
    { de: "das Drama", ro: "drama · -ma SIGUR neutru", audio: "audio/letters/drama.wav" },

    // === 3 terminații MAJORITATEA neutre cu EXCEPȚII (7 carduri) ===
    { de: "das Museum", ro: "muzeul · -um majoritar neutru", audio: "audio/letters/museum.wav" },
    { de: "das Studium", ro: "studiul · -um majoritar neutru", audio: "audio/letters/studium.wav" },
    { de: "das Christentum", ro: "creștinismul · -tum majoritar neutru", audio: "audio/letters/christentum.wav" },
    { de: "das Ergebnis", ro: "rezultatul · -nis majoritar neutru", audio: "audio/letters/ergebnis.wav" },
    { de: "das Geheimnis", ro: "secretul · -nis majoritar neutru", audio: "audio/letters/geheimnis.wav" },
    { de: "der Raum", ro: "spațiul / camera · -um EXCEPȚIE MASCULIN (rimă: Raum-Baum-Traum)", audio: "audio/letters/raum.wav" },
    { de: "die Erlaubnis", ro: "permisiunea · -nis EXCEPȚIE FEMININ (cvartet: Erlaubnis-Kenntnis-Finsternis-Wildnis)", audio: "audio/letters/erlaubnis.wav" },

    // === Infinitive substantivate (5 carduri) ===
    { de: "das Lesen", ro: "cititul · infinitiv lesen + das + literă mare", audio: "audio/letters/das-lesen.wav" },
    { de: "das Schreiben", ro: "scrisul · infinitiv substantivat sigur neutru", audio: "audio/letters/das-schreiben.wav" },
    { de: "das Tanzen", ro: "dansatul · infinitiv substantivat", audio: "audio/letters/das-tanzen.wav" },
    { de: "das Schwimmen", ro: "înotatul · infinitiv substantivat", audio: "audio/letters/das-schwimmen.wav" },
    { de: "das Reisen", ro: "călătoritul · infinitiv substantivat", audio: "audio/letters/das-reisen.wav" },

    // === Categorii semantice neutre (6 carduri) ===
    { de: "das Hotel", ro: "hotelul · hoteluri/cafenele/restaurante = das natural", audio: "audio/letters/hotel.wav" },
    { de: "das Gold", ro: "aurul · majoritatea metalelor = das natural", audio: "audio/letters/gold.wav" },
    { de: "der Stahl", ro: "oțelul · EXCEPȚIE MASCULIN (NU das)", audio: "audio/letters/stahl.wav" },
    { de: "das Kalb", ro: "vițelul · pui de animale = das natural", audio: "audio/letters/kalb.wav" },
    { de: "das Lamm", ro: "mielul · pui de animale = das natural", audio: "audio/letters/lamm.wav" },
    { de: "das Deutschland", ro: "Germania · majoritatea țărilor = das natural", audio: "audio/letters/deutschland.wav" },

    // === Cuvinte cu cast Annettes Deutschkurs (4 carduri) ===
    { de: "Andreea liest das Buch.", ro: "Andreea citește cartea. · das Buch — neutru clasic", audio: "audio/letters/andreea-buch.wav" },
    { de: "Mihai kocht das Essen.", ro: "Mihai gătește mâncarea. · das Essen — infinitiv substantivat", audio: "audio/letters/mihai-essen.wav" },
    { de: "Carolina spielt mit dem Kind.", ro: "Carolina se joacă cu copilul. · das Kind → DATIV dem Kind", audio: "audio/letters/carolina-kind.wav" },
    { de: "Florian schenkt dem Mädchen das Geschenk.", ro: "Florian dă fetei cadoul. · das Mädchen + das Geschenk (ambele neutre)", audio: "audio/letters/florian-maedchen.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint">Click oriunde pentru a vedea traducerea</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" id="prev-btn" onclick="prevCard()">← Anterior</button>
            <button class="flashcard-btn" id="next-btn" onclick="nextCard()">Următor →</button>
        </div>
    `;
    showCard(0);
}

function showCard(index) {
    currentCardIndex = index;
    const card = flashcardsData[index];
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    document.getElementById('card-num').textContent = index + 1;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === flashcardsData.length - 1;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) showCard(currentCardIndex + 1);
}

function prevCard() {
    if (currentCardIndex > 0) showCard(currentCardIndex - 1);
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(() => {});
}

buildFlashcards();
