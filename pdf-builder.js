// ============================================
// PDF BUILDER — Genul Neutru în Germană
// Claudia Toth · Annettes Deutschkurs · Material suplimentar
// Sursă unică: theory.js + exercises.js + flashcards.js + verbs.js
// SCOATE Test Final.
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[\s\S]*?<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g,
            '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="andreea-note">\s*<img[^>]*>\s*<div class="andreea-note-content">\s*<div class="speaker">([^<]+)<\/div>\s*<div class="text">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g,
            '<div class="theory-box warn-box"><h4>💚 $1</h4><p>$2</p></div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fee2e2[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#ef4444;">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#d1fae5[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#10b981;">');
        return '<h1 class="chapter">📘 1. Teorie — Genul neutru: 8 terminații + infinitive + categorii semantice + sinteza Gender Triad COMPLET</h1>' + t;
    }

    function buildExercises() {
        let html = '<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>';

        // Ex1: identifică terminația
        html += '<div class="ex-block"><h3>Übung 1 — Identifică terminația neutră (10 cuvinte)</h3>' +
            '<div class="instruction">Pentru fiecare substantiv neutru, scrie terminația care indică genul.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>' +
            '<table><thead><tr><th style="width:50%">Substantiv</th><th>Terminație neutră</th></tr></thead><tbody>';
        if (typeof ex1Data !== 'undefined') {
            ex1Data.forEach(item => {
                html += '<tr><td>das <strong>' + item.word + '</strong></td><td class="verb">' + item.correct + '</td></tr>';
            });
        }
        html += '</tbody></table></div>';

        // Ex2: articol der/die/das cu capcane
        html += '<div class="ex-block"><h3>Übung 2 — Spot the trap (der/die/das CU CAPCANE — 12 itemi)</h3>' +
            '<div class="instruction">12 substantive — 8 sunt das clasice + 4 sunt CAPCANE care SPARG regula. Aplică algoritmul.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>' +
            '<table><thead><tr><th>Substantiv</th><th>Articol</th><th>Explicație</th></tr></thead><tbody>';
        if (typeof ex2Data !== 'undefined') {
            ex2Data.forEach(item => {
                const isTrap = item.note && item.note.indexOf('🚨') >= 0;
                const style = isTrap ? 'background:#fef3c7;' : '';
                html += '<tr style="' + style + '"><td>' + item.noun + '</td><td class="verb">' + item.correct + '</td><td><em style="color:#6b7280; font-size:9pt;">' + item.note + '</em></td></tr>';
            });
        }
        html += '</tbody></table></div>';

        // Ex3: SORT 8 coloane (afișare ca tabel pentru PDF)
        html += '<div class="ex-block"><h3>Übung 3 — Sortează cele 24 de cuvinte pe 8 terminații</h3>' +
            '<div class="instruction">Online: drag/click pe pool + coloană. În PDF: vezi mai jos sortarea completă pe cele 8 terminații.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>';
        if (typeof ex3Tiles !== 'undefined' && typeof ex3Categories !== 'undefined') {
            const grouped = {};
            ex3Categories.forEach(c => grouped[c] = []);
            ex3Tiles.forEach(t => { if (grouped[t.cat]) grouped[t.cat].push(t.word); });
            html += '<table><thead><tr><th style="width:18%">Terminație</th><th>Cuvinte sortate</th></tr></thead><tbody>';
            ex3Categories.forEach(c => {
                html += '<tr><td class="verb">-' + c + '</td><td>' + grouped[c].map(w => 'das ' + w).join(' · ') + '</td></tr>';
            });
            html += '</tbody></table></div>';
        } else {
            html += '</div>';
        }

        // Ex4: CLICK-MATCH (afișare ca tabel DE↔RO)
        html += '<div class="ex-block"><h3>Übung 4 — Click-match DE ↔ RO (12 perechi)</h3>' +
            '<div class="instruction">Online: click pe DE + pereche RO. În PDF: lista cu toate perechile corecte.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>' +
            '<table><thead><tr><th style="width:50%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>';
        if (typeof ex4Pairs !== 'undefined') {
            ex4Pairs.forEach(p => {
                html += '<tr><td class="verb">' + p.de + '</td><td class="ro-text">' + p.ro + '</td></tr>';
            });
        }
        html += '</tbody></table></div>';

        // Ex5: aplicare cu cast (fill-in)
        html += '<div class="ex-block"><h3>Übung 5 — Aplicare cu cast (10 propoziții)</h3>' +
            '<div class="instruction">Completează cu substantivul neutru potrivit. Propoziții din viața cursanților.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>';
        if (typeof ex5Data !== 'undefined') {
            ex5Data.forEach((it, i) => {
                const filled = it.sentence.replace(/___/g, '<strong style="color:#047857">' + it.correct + '</strong>');
                html += '<div class="ex-item"><span class="ex-num">' + (i + 1) + '</span><div class="ex-body">' +
                    '<div class="ex-q">' + filled + '</div>' +
                    '<div class="ex-explanation">🇷🇴 ' + it.translation + '</div>' +
                    '</div></div>';
            });
        }
        html += '</div>';

        return html;
    }

    function buildFlashcards() {
        const n = typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0;
        let html = '<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>' +
            '<p style="margin-bottom:14px">Cele <strong>' + n + ' carduri</strong> ale lecției — 10 terminații sigure + 7 cu excepții + 5 infinitive substantivate + 6 categorii semantice + 4 propoziții cu castul Annettes Deutschkurs. Excepțiile marcate cu 🚨.</p>' +
            '<div class="flashcards-grid">';
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += '<div class="fc-row"><span class="de">' + card.de + '</span><span class="ro">— ' + card.ro + '</span></div>';
            });
        }
        html += '</div>';
        return html;
    }

    function buildVerbs() {
        let html = '<h1 class="chapter new-section">🔁 4. Verb-Konjugation — verbele care produc infinitive substantivate</h1>' +
            '<div class="theory-box warn-box">' +
            '<p><strong>📌 Regula MAGICĂ a lecției:</strong> orice verb la infinitiv folosit ca substantiv (das + literă mare) → SIGUR NEUTRU. Cele 4 verbe de mai jos produc infinitive substantivate clasice (das Lesen, das Schreiben, das Tanzen, das Reisen). Toate PONS-verified.</p>' +
            '</div>';

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let typeBadge;
                if (v.typ.indexOf('auxiliar') >= 0) {
                    typeBadge = '<span class="badge" style="background:#7c3aed;">AUXILIAR (neregulat)</span>';
                } else if (v.typ.indexOf('tare') >= 0) {
                    typeBadge = '<span class="badge strong">TARE (neregulat)</span>';
                } else {
                    typeBadge = '<span class="badge weak">REGULAT</span>';
                }
                const auxBadge = v.aux === 'sein'
                    ? '<span class="badge sein">Perfekt + sein</span>'
                    : '<span class="badge haben">Perfekt + haben</span>';

                html += '<div class="verb-card"><div class="vh">' +
                    '<span class="name">' + (idx + 1) + '. ' + v.inf + '</span>' +
                    '<span class="ro">— ' + v.ro + '</span>' +
                    typeBadge + auxBadge + '</div>' +
                    '<h5>Präsens</h5>' +
                    '<table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>';
                v.praes.forEach(row => {
                    html += '<tr><td><strong>' + row[0] + '</strong></td><td class="verb">' + row[1] + '</td><td class="ro-text">' + row[2] + '</td></tr>';
                });
                html += '</tbody></table>' +
                    '<h5>Präteritum (imperfect)</h5>' +
                    '<table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>';
                v.praet.forEach(row => {
                    html += '<tr><td><strong>' + row[0] + '</strong></td><td class="verb">' + row[1] + '</td><td class="ro-text">' + row[2] + '</td></tr>';
                });
                html += '</tbody></table>' +
                    '<h5>Perfekt (pe scurt)</h5>' +
                    '<div class="perfekt-box">' +
                    '<div class="de">' + v.aux + ' + ' + v.part + ' · exemplu: ' + v.perf[2][0] + ' <strong>' + v.perf[2][1] + '</strong></div>' +
                    '<div class="ro">' + v.perf[2][2] + '</div></div>';
                if (v.note) html += '<div class="note"><strong>📌 </strong>' + v.note + '</div>';
                if (v.same) html += '<div class="note" style="border-left-color:#047857;color:#065f46;"><strong>📎 Același tipar:</strong> ' + v.same + '</div>';
                html += '</div>';
            });
        }

        html += '<div class="theory-box">' +
            '<h4>🎯 Model universal pentru genul neutru</h4>' +
            '<ol>' +
            '<li><strong>Vezi terminația.</strong> 8 terminații (5 sigure + 3 majoritar) → predictiv neutru.</li>' +
            '<li><strong>E infinitiv folosit ca substantiv?</strong> → das sigur (das Lesen, das Tanzen, das Reisen…).</li>' +
            '<li><strong>E substantiv COMPUS?</strong> → ultimul element decide (das Haus + das Zimmer → das Arbeitszimmer NEUTRU).</li>' +
            '<li><strong>Memorează cele 10 excepții cheie:</strong> der Raum/Baum/Traum, der Reichtum/Irrtum, die Erlaubnis/Kenntnis/Finsternis/Wildnis, der Stahl, die Bronze.</li>' +
            '</ol></div>';

        return html;
    }
})();
