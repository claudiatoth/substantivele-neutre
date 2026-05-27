// ============================================
// TEORIE - Genul Neutru în Germană (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · Material suplimentar
// 7 subsecțiuni cu audio MP3 vocea Claudiei (păstrate din vechiul repo!)
// Sursă: PDF „Substantivele neutre VERDE" — Claudia Toth
// ============================================

const theoryHTML = `
    <!-- Sub 0: Intro + Articolul das + Trio-ul genurilor COMPLET -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Introducere — Articolul *das* + Trio-ul genurilor</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01_introducere.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă introducerea (vocea Claudiei)</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Genul neutru (articolul <strong>das</strong>) e <strong>al 3-lea și ultimul pas</strong> din trio-ul genurilor germane. La <em>substantive-feminine</em> ai învățat 12 terminații feminine, la <em>substantive-masculine</em> ai învățat 15 terminații masculine + capcanele PERSON vs LUCRU. Acum cu cele <strong>8 terminații neutre</strong> ai sistemul PREDICTIV COMPLET. Vezi terminația → știi articolul. 99% predictibil. 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Ce vei învăța în această lecție</h4>
                <ul>
                    <li>✅ Articolul <strong>das</strong> la cele 4 cazuri (Nom/Akk/Dat/Gen)</li>
                    <li>✅ Cele <strong>5 terminații ÎNTOTDEAUNA neutre</strong>: -chen, -lein, -ment, -ett, -ma</li>
                    <li>✅ Cele <strong>3 terminații MAJORITATEA neutre</strong>: -um, -tum, -nis (cu excepții)</li>
                    <li>✅ <strong>Infinitivele substantivate</strong> — ÎNTOTDEAUNA neutre (das Lesen, das Tanzen…)</li>
                    <li>✅ <strong>Categorii semantice + sinteza Gender Triad COMPLET</strong></li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">Articolul *das* la cele 4 cazuri</h4>
            <table class="grammar-table">
                <thead><tr><th>Caz</th><th>Articol</th><th>Exemplu cu cast</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>Nominativ</strong></td><td><strong>das</strong></td><td>Das Mädchen heißt Andreea.</td><td><em>Fata se numește Andreea. (subiect)</em></td></tr>
                    <tr><td><strong>Akkusativ</strong></td><td><strong>das</strong> (identic!)</td><td>Mihai liest das Buch.</td><td><em>Mihai citește cartea. (obiect direct)</em></td></tr>
                    <tr><td><strong>Dativ</strong></td><td><strong>dem</strong></td><td>Carolina spielt mit dem Kind.</td><td><em>Carolina se joacă cu copilul. (obiect indirect)</em></td></tr>
                    <tr><td><strong>Genitiv</strong></td><td><strong>des</strong></td><td>das Ende des Films</td><td><em>sfârșitul filmului (posesie)</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Avantaj cheie</h4>
                <p><strong>Nominativ = Akkusativ identic</strong> (ambele „das")! Față de masculin (der → den), neutrul e cel mai simplu caz.</p>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔤 Atenție: substantivele se învață cu Sg + PLURAL — nu doar cu articolul</h4>
                <p>Lecția de față se concentrează pe <strong>terminațiile care indică genul neutru</strong>. Substantivele din tabelele de mai jos apar cu articolul lor (<em>das ...</em>) — DAR pentru fiecare cuvânt trebuie să înveți și <strong>forma de plural</strong>, pentru că pluralul german e <em>imprevizibil</em>.</p>
                <p style="margin-top: 8px;">Exemple frecvente cu Sg+Pl pe care le-ai întâlnit deja:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>das Kind · die Kinder</strong> <span class="ro-translation">(copilul · copiii)</span></li>
                    <li><strong>das Buch · die Bücher</strong> <span class="ro-translation">(cartea · cărțile, cu Umlaut!)</span></li>
                    <li><strong>das Auto · die Autos</strong> <span class="ro-translation">(mașina · mașinile, plural cu -s)</span></li>
                    <li><strong>das Mädchen · die Mädchen</strong> <span class="ro-translation">(fata · fetele — plural identic, tipic la -chen)</span></li>
                    <li><strong>das Wasser</strong> <span class="ro-translation">(apa — sg tantum în uz comun; pluralul „die Wässer" doar pentru tipuri specifice)</span></li>
                </ul>
                <p style="margin-top: 8px;"><strong>Tipare frecvente la neutru:</strong> -chen / -lein → plural identic (Mädchen/Mädchen); -um → -en (Visum/Visa); monosilabice → -er + Umlaut (Buch/Bücher, Haus/Häuser). Verifică pe <a href="https://de.pons.com/deklination/deutsch" target="_blank" style="color: #047857;">PONS</a>.</p>
                <p style="margin-top: 8px;">🎯 <strong>Infinitivele substantivate</strong> (das Lernen, das Lesen) sunt MEREU sg tantum în uz comun — acțiunile abstracte nu se pluralizează.</p>
            </div>
        </div>
    </div>

    <!-- Sub 1: -chen + -lein (diminutive) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>✅ 2. Terminațiile -chen + -lein (diminutive)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02_terminatii_chen_lein.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 -chen + -lein (vocea Claudiei)</span>
            </div>

            <p style="margin-bottom:12px;">Ambele terminații formează <strong>diminutive</strong> (micșorări) și sunt <strong>100% neutre</strong> — fără nicio excepție!</p>

            <div class="ending-card">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-chen</span>
                    <span class="ending-card-meta"><strong>Diminutiv standard</strong> · capcană clasică: das Mädchen (fata!) — -chen învinge logica de gen</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Mädchen</span> <span class="ro">— fata</span></li>
                    <li><span class="de">das Brötchen</span> <span class="ro">— chifla</span></li>
                    <li><span class="de">das Häuschen</span> <span class="ro">— căsuța</span></li>
                    <li><span class="de">das Kätzchen</span> <span class="ro">— pisicuța</span></li>
                    <li><span class="de">das Märchen</span> <span class="ro">— povestea</span></li>
                    <li><span class="de">das Tischchen</span> <span class="ro">— măsuța</span></li>
                    <li><span class="de">das Blümchen</span> <span class="ro">— floricica</span></li>
                    <li><span class="de">das Hündchen</span> <span class="ro">— cățelușul</span></li>
                    <li><span class="de">das Bäumchen</span> <span class="ro">— copăcelul</span></li>
                    <li><span class="de">das Herzchen</span> <span class="ro">— inimioara</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>✅ NICIO excepție!</strong> Chiar și „fata" (logic feminin) → <em>das Mädchen</em> e NEUTRU.
                </div>
            </div>

            <div class="ending-card">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-lein</span>
                    <span class="ending-card-meta"><strong>Diminutiv literar</strong> (varianta poetică a lui -chen)</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Fräulein</span> <span class="ro">— domnișoara</span></li>
                    <li><span class="de">das Tischlein</span> <span class="ro">— măsuța</span></li>
                    <li><span class="de">das Büchlein</span> <span class="ro">— cărticica</span></li>
                    <li><span class="de">das Vöglein</span> <span class="ro">— păsărica</span></li>
                    <li><span class="de">das Kindlein</span> <span class="ro">— copilașul</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>✅ NICIO excepție!</strong> Și „domnișoara" (logic fem.) → <em>das Fräulein</em>.
                </div>
            </div>
        </div>
    </div>

    <!-- Sub 2: -ment + -ett + -ma -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>✅ 3. Terminațiile -ment + -ett + -ma (origine latină/franceză/greacă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03_terminatii_ment_ett_ma.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 -ment + -ett + -ma (vocea Claudiei)</span>
            </div>

            <p style="margin-bottom:12px;">Toate 3 sunt <strong>100% neutre</strong>. Multe sunt cuvinte „cadou" pentru români — rădăcina latină/greacă identică.</p>

            <div class="ending-card">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-ment</span>
                    <span class="ending-card-meta"><strong>Origine:</strong> latină/franceză · concepte abstracte + obiecte</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Instrument</span> <span class="ro">— instrumentul</span></li>
                    <li><span class="de">das Dokument</span> <span class="ro">— documentul</span></li>
                    <li><span class="de">das Argument</span> <span class="ro">— argumentul</span></li>
                    <li><span class="de">das Element</span> <span class="ro">— elementul</span></li>
                    <li><span class="de">das Kompliment</span> <span class="ro">— complimentul</span></li>
                    <li><span class="de">das Monument</span> <span class="ro">— monumentul</span></li>
                    <li><span class="de">das Parlament</span> <span class="ro">— parlamentul</span></li>
                    <li><span class="de">das Experiment</span> <span class="ro">— experimentul</span></li>
                    <li><span class="de">das Temperament</span> <span class="ro">— temperamentul</span></li>
                    <li><span class="de">das Testament</span> <span class="ro">— testamentul</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>✅ NICIO excepție!</strong>
                </div>
            </div>

            <div class="ending-card">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-ett</span>
                    <span class="ending-card-meta"><strong>Origine:</strong> franceză · obiecte + concepte</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Tablett</span> <span class="ro">— tava</span></li>
                    <li><span class="de">das Ballett</span> <span class="ro">— baletul</span></li>
                    <li><span class="de">das Kabinett</span> <span class="ro">— cabinetul</span></li>
                    <li><span class="de">das Quartett</span> <span class="ro">— cvartetul</span></li>
                    <li><span class="de">das Parkett</span> <span class="ro">— parchetul</span></li>
                    <li><span class="de">das Skelett</span> <span class="ro">— scheletul</span></li>
                    <li><span class="de">das Etikett</span> <span class="ro">— eticheta</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>✅ NICIO excepție!</strong>
                </div>
            </div>

            <div class="ending-card">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-ma</span>
                    <span class="ending-card-meta"><strong>Origine:</strong> greacă · concepte abstracte (drama, tema, dogma)</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Thema</span> <span class="ro">— tema</span></li>
                    <li><span class="de">das Drama</span> <span class="ro">— drama</span></li>
                    <li><span class="de">das Klima</span> <span class="ro">— clima</span></li>
                    <li><span class="de">das Dogma</span> <span class="ro">— dogma</span></li>
                    <li><span class="de">das Schema</span> <span class="ro">— schema</span></li>
                    <li><span class="de">das Komma</span> <span class="ro">— virgula</span></li>
                    <li><span class="de">das Trauma</span> <span class="ro">— trauma</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>✅ NICIO excepție!</strong> Atenție: -ă în RO pare feminin, dar în germană -ma e SIGUR neutru.
                </div>
            </div>
        </div>
    </div>

    <!-- Sub 3: -um + -tum cu excepții -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⚠️ 4. Terminațiile -um + -tum (majoritar neutre, cu EXCEPȚII)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04_terminatii_um_tum.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 -um + -tum cu excepții (vocea Claudiei)</span>
            </div>

            <div class="ending-card trap">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-um</span>
                    <span class="ending-card-meta">🚨 <strong>Origine:</strong> latină · 3 excepții MASCULINE celebre</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Museum</span> <span class="ro">— muzeul</span></li>
                    <li><span class="de">das Zentrum</span> <span class="ro">— centrul</span></li>
                    <li><span class="de">das Datum</span> <span class="ro">— data</span></li>
                    <li><span class="de">das Studium</span> <span class="ro">— studiul</span></li>
                    <li><span class="de">das Album</span> <span class="ro">— albumul</span></li>
                    <li><span class="de">das Aquarium</span> <span class="ro">— acvariul</span></li>
                    <li><span class="de">das Forum</span> <span class="ro">— forumul</span></li>
                    <li><span class="de">das Praktikum</span> <span class="ro">— practica</span></li>
                    <li><span class="de">das Publikum</span> <span class="ro">— publicul</span></li>
                    <li><span class="de">das Quantum</span> <span class="ro">— cantitatea</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>🚨 EXCEPȚII MASCULINE:</strong> <em>der Raum</em> (spațiul/camera) · <em>der Baum</em> (copacul) · <em>der Traum</em> (visul). Memorează ca trio rimat <strong>Raum-Baum-Traum</strong>.
                </div>
            </div>

            <div class="ending-card trap">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-tum</span>
                    <span class="ending-card-meta">🚨 <strong>Sens:</strong> stări abstracte, ideologii · 2 excepții MASCULINE</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Christentum</span> <span class="ro">— creștinismul</span></li>
                    <li><span class="de">das Eigentum</span> <span class="ro">— proprietatea</span></li>
                    <li><span class="de">das Wachstum</span> <span class="ro">— creșterea</span></li>
                    <li><span class="de">das Altertum</span> <span class="ro">— antichitatea</span></li>
                    <li><span class="de">das Brauchtum</span> <span class="ro">— obiceiul</span></li>
                    <li><span class="de">das Judentum</span> <span class="ro">— iudaismul</span></li>
                    <li><span class="de">das Heidentum</span> <span class="ro">— păgânismul</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>🚨 EXCEPȚII MASCULINE:</strong> <em>der Reichtum</em> (bogăția) · <em>der Irrtum</em> (eroarea).
                </div>
            </div>
        </div>
    </div>

    <!-- Sub 4: -nis cu excepții -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Terminația -nis (majoritar neutră, cu 4 EXCEPȚII feminine)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05_terminatii_nis.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 -nis cu excepții (vocea Claudiei)</span>
            </div>

            <div class="ending-card trap">
                <div class="ending-card-head">
                    <span class="ending-card-tag">-nis</span>
                    <span class="ending-card-meta">🚨 <strong>Sens:</strong> rezultate, evenimente, stări · 4 excepții FEMININE</span>
                </div>
                <ul class="ending-card-list">
                    <li><span class="de">das Ergebnis</span> <span class="ro">— rezultatul</span></li>
                    <li><span class="de">das Geheimnis</span> <span class="ro">— secretul</span></li>
                    <li><span class="de">das Hindernis</span> <span class="ro">— obstacolul</span></li>
                    <li><span class="de">das Bedürfnis</span> <span class="ro">— nevoia</span></li>
                    <li><span class="de">das Ereignis</span> <span class="ro">— evenimentul</span></li>
                    <li><span class="de">das Verhältnis</span> <span class="ro">— relația</span></li>
                    <li><span class="de">das Verständnis</span> <span class="ro">— înțelegerea</span></li>
                    <li><span class="de">das Zeugnis</span> <span class="ro">— certificatul</span></li>
                </ul>
                <div class="ending-card-note">
                    <strong>🚨 EXCEPȚII FEMININE (cvartet de memorat):</strong> <em>die Erlaubnis</em> (permisiunea) · <em>die Kenntnis</em> (cunoștința) · <em>die Finsternis</em> (întunericul) · <em>die Wildnis</em> (sălbăticia).
                </div>
            </div>
        </div>
    </div>

    <!-- Sub 5: Infinitive substantivate -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🔄 6. Infinitive substantivate — ÎNTOTDEAUNA neutre</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06_infinitive_substantivizate.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Infinitive substantivate (vocea Claudiei)</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Aceasta e <strong>una dintre cele mai utile reguli</strong> ale germanei! Orice verb la infinitiv poate deveni substantiv neutru — pur și simplu îl scrii cu literă MARE și pui das în față. <em>lesen</em> (a citi) → <em>das Lesen</em> (cititul). 100 verbe învățate = 100 substantive bonus, toate neutre sigur. 💎</div>
                </div>
            </div>

            <div class="theory-box" style="background:#d1fae5; border-color:#10b981;">
                <h4>🔑 Regula de aur</h4>
                <p style="font-size:1.05rem;"><strong>infinitiv verb</strong> (lesen, tanzen…) → adaugi <strong>das</strong> + literă mare → <strong>substantiv neutru</strong> (das Lesen, das Tanzen).</p>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Verb (infinitiv)</th><th>→</th><th>Substantiv neutru</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td>lesen</td><td>→</td><td><strong>das Lesen</strong></td><td><em>cititul</em></td></tr>
                    <tr><td>schreiben</td><td>→</td><td><strong>das Schreiben</strong></td><td><em>scrisul</em></td></tr>
                    <tr><td>essen</td><td>→</td><td><strong>das Essen</strong></td><td><em>mâncatul</em></td></tr>
                    <tr><td>tanzen</td><td>→</td><td><strong>das Tanzen</strong></td><td><em>dansatul</em></td></tr>
                    <tr><td>lernen</td><td>→</td><td><strong>das Lernen</strong></td><td><em>învățatul</em></td></tr>
                    <tr><td>schwimmen</td><td>→</td><td><strong>das Schwimmen</strong></td><td><em>înotatul</em></td></tr>
                    <tr><td>singen</td><td>→</td><td><strong>das Singen</strong></td><td><em>cântatul</em></td></tr>
                    <tr><td>spielen</td><td>→</td><td><strong>das Spielen</strong></td><td><em>jucatul</em></td></tr>
                    <tr><td>arbeiten</td><td>→</td><td><strong>das Arbeiten</strong></td><td><em>muncitul</em></td></tr>
                    <tr><td>reisen</td><td>→</td><td><strong>das Reisen</strong></td><td><em>călătoritul</em></td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de"><strong>Propoziții model cu cast:</strong></p>
                <p class="de">• <em>Das Lesen ist Andreeas Hobby.</em> → Cititul este hobby-ul Andreei.</p>
                <p class="de">• <em>Das Kochen macht Mihai glücklich.</em> → Gătitul îl face pe Mihai fericit.</p>
                <p class="de">• <em>Das Reisen ist Carolinas Leidenschaft.</em> → Călătoritul este pasiunea Carolinei.</p>
            </div>
        </div>
    </div>

    <!-- Sub 6: Excepții + Categorii semantice + SINTEZA Gender Triad COMPLET -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🏁 7. Excepții cheie + Categorii semantice + SINTEZA Gender Triad COMPLET</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07_exceptii_importante.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Excepții + sinteza Gender Triad (vocea Claudiei)</span>
            </div>

            <h4 style="color:#065f46; margin-bottom:8px;">Categorii semantice „neutru natural"</h4>
            <table class="grammar-table">
                <thead><tr><th>Categorie</th><th>Exemple în germană</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>🏨 Hoteluri, cafenele, cinematografe</strong></td><td>das Hotel · das Café · das Kino · das Restaurant</td><td><em>hotelul · cafeneaua · cinematograful · restaurantul</em></td></tr>
                    <tr><td><strong>⚙️ Metale (majoritar)</strong></td><td>das Gold · das Silber · das Kupfer · das Eisen</td><td><em>aurul · argintul · cuprul · fierul</em> 🚨 <strong>der Stahl</strong> · <strong>die Bronze</strong> = EXCEPȚII</td></tr>
                    <tr><td><strong>🔤 Litere ale alfabetului</strong></td><td>das A · das B · das C · das Z</td><td><em>litera A · litera B · litera C</em></td></tr>
                    <tr><td><strong>🎨 Culori folosite ca substantive</strong></td><td>das Rot · das Blau · das Grün</td><td><em>roșul · albastrul · verdele</em></td></tr>
                    <tr><td><strong>🐑 Pui de animale</strong></td><td>das Kalb · das Lamm · das Fohlen · das Küken</td><td><em>vițelul · mielul · mânzul · puiul de găină</em></td></tr>
                    <tr><td><strong>🌍 Continente + majoritatea țărilor</strong></td><td>das Europa · das Afrika · das Deutschland · das Frankreich</td><td><em>Europa · Africa · Germania · Franța</em> 🚨 <strong>die Schweiz · die Türkei · die USA</strong> = EXCEPȚII</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fee2e2; border-color:#ef4444;">
                <h4>🔑 REGULA SUBSTANTIVELOR COMPUSE — cea mai utilă regulă</h4>
                <p style="font-size:1.05rem;"><strong>La substantivele compuse, ULTIMUL element determină genul!</strong></p>
                <ul style="margin-top:8px;">
                    <li><strong>das Rathaus</strong> = der Rat + <strong>das Haus</strong> → das Haus NEUTRU → das Rathaus NEUTRU</li>
                    <li><strong>das Arbeitszimmer</strong> = die Arbeit + <strong>das Zimmer</strong> → das Zimmer NEUTRU → das Arbeitszimmer NEUTRU</li>
                    <li><strong>die Haustür</strong> = das Haus + <strong>die Tür</strong> → die Tür FEMININ → die Haustür FEMININ</li>
                    <li><strong>der Hausschlüssel</strong> = das Haus + <strong>der Schlüssel</strong> → der Schlüssel MASCULIN</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:18px;">SINTEZA Gender Triad COMPLET</h4>
            <table class="grammar-table">
                <thead><tr><th>Articol</th><th>Terminații sigure</th><th>Capcane de memorat</th></tr></thead>
                <tbody>
                    <tr><td><strong style="color:#10b981;">die (feminin)</strong></td><td>-heit, -keit, -ung, -schaft, -ei, -ion, -anz/-enz, -tät, -itis, -ik, -ur, -e</td><td><em>der Junge, das Auge, der Katholik, das Mosaik, das Abitur, der Flur</em></td></tr>
                    <tr><td><strong style="color:#f59e0b;">der (masculin)</strong></td><td>-ling, -ismus, -ich, -ig, -eig, -ent, -ast, -or, -and, -ant, -är, -ier, -iker, -ist, -oge</td><td><em>das Prozent, das Talent, die Last, das Labor, das Croissant, das Militär</em></td></tr>
                    <tr style="background:#fef3c7;"><td><strong style="color:#6b7280;">das (neutru) 🏁</strong></td><td>-chen, -lein, -ment, -ett, -ma (sigure) + -um, -tum, -nis (majoritar) + infinitive substantivate</td><td><em>der Raum/Baum/Traum, der Reichtum/Irrtum, die Erlaubnis/Kenntnis/Finsternis/Wildnis, der Stahl, die Bronze</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#d1fae5; border-color:#10b981;">
                <h4>🎯 ALGORITMUL DECIZIONAL FINAL</h4>
                <ol>
                    <li><strong>Verifică TERMINAȚIA</strong> (primul filtru — die/der/das predictiv 99%)</li>
                    <li><strong>E infinitiv folosit ca substantiv?</strong> → <strong>das</strong> sigur</li>
                    <li><strong>E substantiv COMPUS?</strong> → ULTIMUL element decide</li>
                    <li><strong>Verifică CATEGORIA SEMANTICĂ</strong> (hotel/metal/literă/țară etc.)</li>
                    <li><strong>Memorează cele 10-15 excepții cheie</strong></li>
                </ol>
            </div>

            <div class="theory-box">
                <h4>🧠 Mnemonice utile</h4>
                <ul>
                    <li><strong>„CHEN-LEIN-MENT-ETT-MA = das 100%"</strong> — 5 terminații sigure.</li>
                    <li><strong>„RAUM-BAUM-TRAUM = der"</strong> — 3 excepții -um rimate.</li>
                    <li><strong>„REICHTUM-IRRTUM = der"</strong> — 2 excepții -tum.</li>
                    <li><strong>„ERLAUBNIS-KENNTNIS-FINSTERNIS-WILDNIS = die"</strong> — 4 excepții -nis.</li>
                    <li><strong>„STAHL + BRONZE"</strong> — singurele 2 metale non-neutre.</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de"><strong>🎉 GENDER TRIAD COMPLET — felicitări!</strong></p>
                <p class="ro">Combinând cele 3 lecții (feminine + masculine + neutre), deduci genul a 99% din substantivele germane FĂRĂ să-l memorezi pentru fiecare cuvânt. Acesta e FUNDAMENTUL pentru toate cazurile gramaticale care depind de articol. 💎🦋✨</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
