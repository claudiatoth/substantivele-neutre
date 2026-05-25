// ============================================
// VERB-KONJUGATION - Genul Neutru (refactor mai 2026)
// Claudia Toth · 4 verbe care PRODUC infinitive substantivate (das ...)
// Toate verificate PONS · Präteritum → RO IMPERFECT
// ============================================

const verbsData = [
    {
        inf: 'lesen', ro: 'a citi', typ: 'tare / neregulat', aux: 'haben', part: 'gelesen',
        praes: [['ich','lese','citesc'],['du','liest','citești'],['er/sie/es','liest','citește'],['wir','lesen','citim'],['ihr','lest','citiți'],['sie/Sie','lesen','citesc']],
        praet: [['ich','las','citeam'],['du','last','citeai'],['er/sie/es','las','citea'],['wir','lasen','citeam'],['ihr','last','citeați'],['sie/Sie','lasen','citeau']],
        perf: [['ich','habe gelesen','am citit'],['du','hast gelesen','ai citit'],['er/sie/es','hat gelesen','a citit'],['wir','haben gelesen','am citit'],['ihr','habt gelesen','ați citit'],['sie/Sie','haben gelesen','au citit']],
        note: '🚨 Verb TARE — Vokalwechsel la pers. 2/3 sg (e → ie: du liest, er liest). Präteritum las (NU lesete!). Partizip gelesen (NU gelest!). Infinitivul substantivat: <strong>das Lesen</strong> (cititul) — sigur neutru.'
    },
    {
        inf: 'schreiben', ro: 'a scrie', typ: 'tare / neregulat', aux: 'haben', part: 'geschrieben',
        praes: [['ich','schreibe','scriu'],['du','schreibst','scrii'],['er/sie/es','schreibt','scrie'],['wir','schreiben','scriem'],['ihr','schreibt','scrieți'],['sie/Sie','schreiben','scriu']],
        praet: [['ich','schrieb','scriam'],['du','schriebst','scriai'],['er/sie/es','schrieb','scria'],['wir','schrieben','scriam'],['ihr','schriebt','scrieați'],['sie/Sie','schrieben','scriau']],
        perf: [['ich','habe geschrieben','am scris'],['du','hast geschrieben','ai scris'],['er/sie/es','hat geschrieben','a scris'],['wir','haben geschrieben','am scris'],['ihr','habt geschrieben','ați scris'],['sie/Sie','haben geschrieben','au scris']],
        note: '🚨 Verb TARE — Präsens REGULAT, dar Präteritum/Partizip schimbă vocala (ei → ie). schrieb / geschrieben (NU schreibte/geschreibt!). Infinitivul substantivat: <strong>das Schreiben</strong> (scrisul / scrisoarea — dublu sens!).',
        same: 'bleiben → blieb → ist geblieben (SEIN!) · steigen → stieg → ist gestiegen (SEIN!) — verbele cu ei-ie-ie sunt un tipar productiv. Atenție însă: schreiben e cu HABEN, dar bleiben/steigen cu SEIN.'
    },
    {
        inf: 'tanzen', ro: 'a dansa', typ: 'regulat', aux: 'haben', part: 'getanzt',
        praes: [['ich','tanze','dansez'],['du','tanzt','dansezi'],['er/sie/es','tanzt','dansează'],['wir','tanzen','dansăm'],['ihr','tanzt','dansați'],['sie/Sie','tanzen','dansează']],
        praet: [['ich','tanzte','dansam'],['du','tanztest','dansai'],['er/sie/es','tanzte','dansa'],['wir','tanzten','dansam'],['ihr','tanztet','dansați'],['sie/Sie','tanzten','dansau']],
        perf: [['ich','habe getanzt','am dansat'],['du','hast getanzt','ai dansat'],['er/sie/es','hat getanzt','a dansat'],['wir','haben getanzt','am dansat'],['ihr','habt getanzt','ați dansat'],['sie/Sie','haben getanzt','au dansat']],
        note: 'Verb REGULAT standard. Pers. 2 sg „du tanzt" (NU tanzst — z absoarbe s). Infinitivul substantivat: <strong>das Tanzen</strong> (dansatul) — sigur neutru.',
        same: 'Același tipar regulat (se conjugă identic ca tanzen): <em>lernen → das Lernen</em> · <em>kochen → das Kochen</em> · <em>spielen → das Spielen</em> · <em>singen → das Singen</em> · <em>arbeiten → das Arbeiten</em> · <em>machen → das Machen</em>. Toate produc infinitive substantivate NEUTRE.'
    },
    {
        inf: 'reisen', ro: 'a călători', typ: 'regulat', aux: 'sein', part: 'gereist',
        praes: [['ich','reise','călătoresc'],['du','reist','călătorești'],['er/sie/es','reist','călătorește'],['wir','reisen','călătorim'],['ihr','reist','călătoriți'],['sie/Sie','reisen','călătoresc']],
        praet: [['ich','reiste','călătoream'],['du','reistest','călătoreai'],['er/sie/es','reiste','călătorea'],['wir','reisten','călătoream'],['ihr','reistet','călătoreați'],['sie/Sie','reisten','călătoreau']],
        perf: [['ich','bin gereist','am călătorit'],['du','bist gereist','ai călătorit'],['er/sie/es','ist gereist','a călătorit'],['wir','sind gereist','am călătorit'],['ihr','seid gereist','ați călătorit'],['sie/Sie','sind gereist','au călătorit']],
        note: '🚨 CAPCANA SEIN! Deși *reisen* e verb REGULAT la formă (reiste/gereist), Perfekt cu <strong>SEIN</strong> pentru că exprimă MIȘCARE / SCHIMBARE DE LOC. Toate verbele de călătorie: fahren, fliegen, gehen, kommen, reisen → SEIN. Infinitivul substantivat: <strong>das Reisen</strong> (călătoritul) — sigur neutru. „Das Reisen ist Carolinas Leidenschaft."'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 4 verbe-cheie ale lecției neutru</strong> — toate produc infinitive substantivate (das Lesen, das Schreiben, das Tanzen, das Reisen). Toate verificate <strong>PONS</strong>.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Cele 4 verbe au LEGĂTURĂ directă cu neutrele: toate produc infinitive substantivate care sunt SIGUR neutre (das Lesen, das Schreiben, das Tanzen, das Reisen). Capcana cea mai mare: <em>reisen</em> e regulat dar la Perfekt cu SEIN (verb de mișcare)! Iar <em>lesen</em> e tare (las/gelesen) iar <em>schreiben</em> e tare (schrieb/geschrieben) — ambele cu HABEN. Verificate toate pe PONS. 🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.typ.indexOf('auxiliar') >= 0) badge = '#7c3aed';
        else if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar:</strong> ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
