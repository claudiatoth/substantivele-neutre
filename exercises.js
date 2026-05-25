// ============================================
// EXERCIȚII - Genul Neutru în Germană (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs
// 5 tipuri DIFERITE: identifică terminație + spot-the-trap + SORT 8 col + CLICK-MATCH + cast
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: 🔍 Identifică TERMINAȚIA neutră (text input · 10 itemi)
// Adaptare directă după Exercițiul 1 din PDF Claudia
// ============================================
const ex1Data = [
    { id: 'a', word: 'Mädchen', correct: '-chen', accept: ['-chen', 'chen'] },
    { id: 'b', word: 'Museum', correct: '-um', accept: ['-um', 'um'] },
    { id: 'c', word: 'Christentum', correct: '-tum', accept: ['-tum', 'tum'] },
    { id: 'd', word: 'Ergebnis', correct: '-nis', accept: ['-nis', 'nis'] },
    { id: 'e', word: 'Dokument', correct: '-ment', accept: ['-ment', 'ment'] },
    { id: 'f', word: 'Tablett', correct: '-ett', accept: ['-ett', 'ett'] },
    { id: 'g', word: 'Thema', correct: '-ma', accept: ['-ma', 'ma'] },
    { id: 'h', word: 'Lesen', correct: 'infinitiv', accept: ['infinitiv', 'infinitiv substantivat', 'verb', 'infinitiv neutru'] },
    { id: 'i', word: 'Brötchen', correct: '-chen', accept: ['-chen', 'chen'] },
    { id: 'j', word: 'Fräulein', correct: '-lein', accept: ['-lein', 'lein'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔍 Identifică terminația neutră pentru fiecare cuvânt.</strong><br>
            Răspuns: scrie terminația cu cratimă (ex: <code>-chen</code>). La infinitive substantivate (das Lesen) scrie <code>infinitiv</code>.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">das ${item.word}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="terminația...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: 🚦 Articol corect der/die/das CU CAPCANE (multiple choice · 12 itemi)
// Adaptare directă după Exercițiul 2 din PDF Claudia
// ============================================
const ex2Data = [
    { id: 'a', noun: 'Mädchen', correct: 'das', note: '-chen ÎNTOTDEAUNA das (chiar dacă logic fem.)' },
    { id: 'b', noun: 'Museum', correct: 'das', note: '-um majoritar das' },
    { id: 'c', noun: 'Hotel', correct: 'das', note: 'hoteluri = das natural' },
    { id: 'd', noun: 'Ergebnis', correct: 'das', note: '-nis majoritar das' },
    { id: 'e', noun: 'Dokument', correct: 'das', note: '-ment ÎNTOTDEAUNA das' },
    { id: 'f', noun: 'Gold', correct: 'das', note: 'majoritatea metalelor = das' },
    { id: 'g', noun: 'Ballett', correct: 'das', note: '-ett ÎNTOTDEAUNA das' },
    { id: 'h', noun: 'Lesen', correct: 'das', note: 'infinitiv substantivat = das sigur' },
    { id: 'i', noun: 'Raum', correct: 'der', note: '🚨 EXCEPȚIE -um → MASCULIN (Raum-Baum-Traum)' },
    { id: 'j', noun: 'Stahl', correct: 'der', note: '🚨 EXCEPȚIE metal masculin (NU das)' },
    { id: 'k', noun: 'Erlaubnis', correct: 'die', note: '🚨 EXCEPȚIE -nis FEMININ (cvartet: Erlaubnis/Kenntnis/Finsternis/Wildnis)' },
    { id: 'l', noun: 'Irrtum', correct: 'der', note: '🚨 EXCEPȚIE -tum MASCULIN (Reichtum-Irrtum)' }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🚦 Spot the trap — alege articolul CORECT (der / die / das).</strong><br>
            Atenție: 8 sunt das clasice + 4 sunt CAPCANE care SPARG regula. Aplică algoritmul!
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group" style="flex:1;">
                    <label style="font-size:1.1rem;"><strong>____ ${item.noun}</strong></label>
                    <div class="mc-options">
                        <div class="mc-option"><input type="radio" name="ex2-${item.id}" value="der" id="ex2-${item.id}-der"><label for="ex2-${item.id}-der">der</label></div>
                        <div class="mc-option"><input type="radio" name="ex2-${item.id}" value="die" id="ex2-${item.id}-die"><label for="ex2-${item.id}-die">die</label></div>
                        <div class="mc-option"><input type="radio" name="ex2-${item.id}" value="das" id="ex2-${item.id}-das"><label for="ex2-${item.id}-das">das</label></div>
                    </div>
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const fb = document.getElementById(`ex2-f${item.id}`);
        const sel = document.querySelector(`input[name="ex2-${item.id}"]:checked`);
        const userAnswer = sel ? sel.value : '';
        const isCorrect = userAnswer === item.correct;
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct} ${item.noun} — ${item.note}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct} ${item.noun} — ${item.note}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: 🗂️ SORT 8 COLOANE — clasificare pe terminație (interactiv click)
// 24 cuvinte sortate pe 8 grupe (-chen, -lein, -ment, -ett, -ma, -um, -tum, -nis)
// ============================================
const ex3Tiles = [
    { id: 't1', word: 'Brötchen', cat: 'chen' },
    { id: 't2', word: 'Häuschen', cat: 'chen' },
    { id: 't3', word: 'Märchen', cat: 'chen' },
    { id: 't4', word: 'Vöglein', cat: 'lein' },
    { id: 't5', word: 'Büchlein', cat: 'lein' },
    { id: 't6', word: 'Tischlein', cat: 'lein' },
    { id: 't7', word: 'Element', cat: 'ment' },
    { id: 't8', word: 'Monument', cat: 'ment' },
    { id: 't9', word: 'Instrument', cat: 'ment' },
    { id: 't10', word: 'Skelett', cat: 'ett' },
    { id: 't11', word: 'Kabinett', cat: 'ett' },
    { id: 't12', word: 'Quartett', cat: 'ett' },
    { id: 't13', word: 'Drama', cat: 'ma' },
    { id: 't14', word: 'Klima', cat: 'ma' },
    { id: 't15', word: 'Schema', cat: 'ma' },
    { id: 't16', word: 'Datum', cat: 'um' },
    { id: 't17', word: 'Album', cat: 'um' },
    { id: 't18', word: 'Forum', cat: 'um' },
    { id: 't19', word: 'Wachstum', cat: 'tum' },
    { id: 't20', word: 'Eigentum', cat: 'tum' },
    { id: 't21', word: 'Brauchtum', cat: 'tum' },
    { id: 't22', word: 'Geheimnis', cat: 'nis' },
    { id: 't23', word: 'Hindernis', cat: 'nis' },
    { id: 't24', word: 'Verständnis', cat: 'nis' }
];
const ex3Categories = ['chen', 'lein', 'ment', 'ett', 'ma', 'um', 'tum', 'nis'];
let ex3State = { selected: null, placed: {}, correctCount: 0 };

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    ex3State = { selected: null, placed: {}, correctCount: 0 };
    const shuffled = [...ex3Tiles].sort(() => Math.random() - 0.5);
    let html = `
        <div class="exercise-instruction">
            <strong>🗂️ Sortează cele 24 de cuvinte în cele 8 coloane de terminații neutre.</strong><br>
            <em>Cum funcționează:</em> apasă pe un cuvânt din pool (jos), apoi pe coloana cu terminația potrivită (-chen, -lein, -ment, -ett, -ma, -um, -tum, -nis). Cuvântul plasat corect se colorează verde.
        </div>
        <div class="sort-pool" id="ex3-pool">
    `;
    shuffled.forEach(t => {
        html += `<div class="sort-tile" id="${t.id}" data-cat="${t.cat}" onclick="ex3SelectTile('${t.id}')">${t.word}</div>`;
    });
    html += `</div>
        <div class="sort-cols" style="grid-template-columns: repeat(4, 1fr);">`;
    ex3Categories.forEach(c => {
        html += `
            <div class="sort-col" onclick="ex3PlaceInCol('${c}')">
                <div class="sort-col-title">-${c}</div>
                <div class="sort-col-body" id="ex3-col-${c}"></div>
            </div>
        `;
    });
    html += `</div><div class="dm-status" id="ex3-status">Pași completați: 0 / ${ex3Tiles.length}</div>`;
    container.innerHTML = html;
}

function ex3SelectTile(id) {
    const tile = document.getElementById(id);
    if (!tile || tile.classList.contains('sort-placed')) return;
    document.querySelectorAll('#ex3-pool .sort-tile.sort-selected').forEach(t => t.classList.remove('sort-selected'));
    if (ex3State.selected === id) {
        ex3State.selected = null;
    } else {
        tile.classList.add('sort-selected');
        ex3State.selected = id;
    }
}

function ex3PlaceInCol(cat) {
    if (!ex3State.selected) return;
    const tile = document.getElementById(ex3State.selected);
    const tileData = ex3Tiles.find(t => t.id === ex3State.selected);
    if (!tileData) return;
    if (tileData.cat === cat) {
        const colBody = document.getElementById(`ex3-col-${cat}`);
        const placed = document.createElement('div');
        placed.className = 'sort-tile sort-placed';
        placed.textContent = tileData.word;
        colBody.appendChild(placed);
        tile.remove();
        ex3State.placed[tileData.id] = cat;
        ex3State.correctCount++;
        document.getElementById('ex3-status').textContent = `Pași completați: ${ex3State.correctCount} / ${ex3Tiles.length}`;
        if (ex3State.correctCount === ex3Tiles.length) {
            document.getElementById('ex3-status').textContent = `🎉 PERFECT! Toate ${ex3Tiles.length} cuvinte sortate corect!`;
            document.getElementById('ex3-status').style.background = '#d1fae5';
            document.getElementById('ex3-status').style.color = '#065f46';
        }
    } else {
        tile.classList.add('sort-wrong');
        setTimeout(() => tile.classList.remove('sort-wrong'), 600);
    }
    ex3State.selected = null;
    document.querySelectorAll('#ex3-pool .sort-tile.sort-selected').forEach(t => t.classList.remove('sort-selected'));
}

function checkEx3() {
    return { correct: ex3State.correctCount, total: ex3Tiles.length };
}

// ============================================
// EX 4: 🔗 CLICK-MATCH DE↔RO (12 perechi)
// ============================================
const ex4Pairs = [
    { de: 'das Mädchen', ro: 'fata' },
    { de: 'das Brötchen', ro: 'chifla' },
    { de: 'das Museum', ro: 'muzeul' },
    { de: 'das Hotel', ro: 'hotelul' },
    { de: 'das Lesen', ro: 'cititul' },
    { de: 'das Schwimmen', ro: 'înotatul' },
    { de: 'das Dokument', ro: 'documentul' },
    { de: 'das Ballett', ro: 'baletul' },
    { de: 'das Geheimnis', ro: 'secretul' },
    { de: 'das Eigentum', ro: 'proprietatea' },
    { de: 'das Thema', ro: 'tema' },
    { de: 'das Kalb', ro: 'vițelul' }
];
let ex4State = { selected: null, selectedCol: null, matched: 0 };

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    ex4State = { selected: null, selectedCol: null, matched: 0 };
    const shuffledDe = [...ex4Pairs].sort(() => Math.random() - 0.5);
    const shuffledRo = [...ex4Pairs].sort(() => Math.random() - 0.5);
    let html = `
        <div class="exercise-instruction">
            <strong>🔗 Click-match: leagă cuvântul german (stânga) de traducerea română (dreapta).</strong><br>
            Apasă pe o piesă din stânga, apoi pe pereche din dreapta. Perechile corecte rămân colorate verde.
        </div>
        <div class="dm-board">
            <div class="dm-col">
                <div class="dm-col-title">🇩🇪 Germană</div>
    `;
    shuffledDe.forEach((p, i) => {
        html += `<div class="dm-tile" data-text="${p.de}" data-col="de" onclick="ex4Click('de', '${p.de.replace(/'/g, '&#39;')}', this)">${p.de}</div>`;
    });
    html += `</div><div class="dm-col"><div class="dm-col-title">🇷🇴 Română</div>`;
    shuffledRo.forEach((p, i) => {
        html += `<div class="dm-tile" data-text="${p.ro}" data-col="ro" onclick="ex4Click('ro', '${p.ro.replace(/'/g, '&#39;')}', this)">${p.ro}</div>`;
    });
    html += `</div></div><div class="dm-status" id="ex4-status">Perechi corecte: 0 / ${ex4Pairs.length}</div>`;
    container.innerHTML = html;
}

function ex4Click(col, text, el) {
    if (el.classList.contains('dm-correct')) return;
    document.querySelectorAll('.dm-tile.dm-selected').forEach(t => { if (!t.classList.contains('dm-correct')) t.classList.remove('dm-selected'); });
    if (ex4State.selected && ex4State.selectedCol !== col) {
        const isCorrect = ex4Pairs.some(p => (col === 'de' ? p.de === text && p.ro === ex4State.selected : p.ro === text && p.de === ex4State.selected));
        if (isCorrect) {
            el.classList.add('dm-correct');
            document.querySelectorAll('.dm-tile').forEach(t => {
                if (t.dataset.text === ex4State.selected) t.classList.add('dm-correct');
            });
            ex4State.matched++;
            document.getElementById('ex4-status').textContent = `Perechi corecte: ${ex4State.matched} / ${ex4Pairs.length}`;
            if (ex4State.matched === ex4Pairs.length) {
                document.getElementById('ex4-status').textContent = `🎉 PERFECT! Toate ${ex4Pairs.length} perechi corecte!`;
                document.getElementById('ex4-status').style.background = '#d1fae5';
                document.getElementById('ex4-status').style.color = '#065f46';
            }
        } else {
            el.classList.add('dm-wrong');
            setTimeout(() => el.classList.remove('dm-wrong'), 600);
        }
        ex4State.selected = null;
        ex4State.selectedCol = null;
    } else {
        el.classList.add('dm-selected');
        ex4State.selected = text;
        ex4State.selectedCol = col;
    }
}

function checkEx4() {
    return { correct: ex4State.matched, total: ex4Pairs.length };
}

// ============================================
// EX 5: 🎭 Formare diminutive + infinitive substantivate cu CAST (text input · 10 itemi)
// Adaptare exercițiile 4 + 5 din PDF Claudia + cast Annettes Deutschkurs
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea liest ein interessantes ___ über deutsche Geschichte.', translation: 'Andreea citește o carte interesantă despre istoria germană.', correct: 'Buch', accept: ['buch'] },
    { id: 'b', sentence: 'Mihai kocht das ___ für das Restaurant.', translation: 'Mihai gătește mâncarea pentru restaurant.', correct: 'Essen', accept: ['essen'] },
    { id: 'c', sentence: 'Transformă verbul în infinitiv substantivat: tanzen → das ___', translation: 'a dansa → dansatul', correct: 'Tanzen', accept: ['tanzen'] },
    { id: 'd', sentence: 'Transformă verbul în infinitiv substantivat: schwimmen → das ___', translation: 'a înota → înotatul', correct: 'Schwimmen', accept: ['schwimmen'] },
    { id: 'e', sentence: 'Carolina fotografiert das kleine ___ am See.', translation: 'Carolina fotografiază căsuța mică de la lac.', correct: 'Häuschen', accept: ['häuschen', 'haeuschen'] },
    { id: 'f', sentence: 'Florian schenkt dem ___ ein Buch.', translation: 'Florian dă fetei o carte.', correct: 'Mädchen', accept: ['mädchen', 'maedchen'] },
    { id: 'g', sentence: 'Das ___ ist ein wichtiges Eigentum der Familie.', translation: 'Casa este o proprietate importantă a familiei.', correct: 'Haus', accept: ['haus'] },
    { id: 'h', sentence: 'Acar arbeitet im neuen ___ in der Stadtmitte.', translation: 'Acar lucrează în noul muzeu din centrul orașului.', correct: 'Museum', accept: ['museum'] },
    { id: 'i', sentence: 'Das ___ der Prüfung ist sehr gut!', translation: 'Rezultatul examenului este foarte bun!', correct: 'Ergebnis', accept: ['ergebnis'] },
    { id: 'j', sentence: 'Annette erklärt das ___ der heutigen Stunde: Possessivpronomen.', translation: 'Annette explică tema lecției de astăzi: posesivele.', correct: 'Thema', accept: ['thema'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎭 Aplicare cu castul Annettes Deutschkurs.</strong><br>
            Completează cu substantivul neutru potrivit (formă de bază — fără articol). Toate cuvintele sunt din vocabularul lecției.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="cuvântul...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
