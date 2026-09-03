(()=>{'use strict';
const help=document.querySelector('a[href="/Frissítések"],a[href="/segedlet"],a[href="/Segédlet"]');if(!help)return;
help.href='/Frissítések';help.setAttribute('aria-label','Frissítések');const helpLabel=help.querySelector('span');if(helpLabel)helpLabel.textContent='Frissítések';
const guide=document.createElement('main');guide.className='local-guide';guide.hidden=true;guide.innerHTML=`
<article class="local-guide-card updates-guide">
 <h1>Frissítések</h1>
 <h2>1. Teljes BTK-adatállomány</h2>
 <ul>
  <li>283 táblasor</li>
  <li>235 aktív, kiszabható vádtétel</li>
  <li>38 csoportosító/főtétel</li>
  <li>10 hatályon kívüli tétel</li>
  <li>Rövidítés, megnevezés, óvadék, bírság, börtön és leírás átmásolva</li>
 </ul>
 <h2>2. SeePD-s javítások</h2>
 <ul>
  <li><code>ZKHF</code> frissítve <code>ZKTÉ</code> kódra
   <ul><li>Bírság: 100 000–200 000 Ft</li><li>Börtön: 60 perc</li><li>A hiányzó leírás is bekerült</li></ul>
  </li>
  <li><code>ZSRÉT</code> frissítve <code>ZSRTÉ</code> kódra
   <ul><li>Megnevezés: Testi épség vagy élet elleni fenyegetéssel</li><li>Bírság: 270 000–292 500 Ft</li><li>Börtön: 60 perc</li></ul>
  </li>
 </ul>
 <h2>3. Kábítószeres tételek keresése</h2>
 <p>A következő nyolc összetett tétel biztosan megjelenik:</p>
 <ul>
  <li><code>IKBK</code> – Kábítószer birtoklás: kis tétel</li>
  <li><code>IKBN</code> – Kábítószer birtoklás: nagy tétel</li>
  <li><code>IKBT</code> – Kábítószer birtoklás: kereskedői tétel</li>
  <li><code>IKÁK</code> – Kábítószer árusítás: kis tétel</li>
  <li><code>IKÁN</code> – Kábítószer árusítás: nagy tétel</li>
  <li><code>IKÁT</code> – Kábítószer árusítás: kereskedői tétel</li>
  <li><code>IKAB</code> – Kábítószer-alkotóelem birtoklása</li>
  <li><code>IKAÁ</code> – Kábítószer-alkotóelem árusítása</li>
 </ul>
 <h2>4. Kereső javítása</h2>
 <ul>
  <li>A kereső már a főtétel és az altétel nevét együtt vizsgálja.</li>
  <li>A találati lista 8-ról 12 elemre bővült.</li>
  <li>Rövidítésre, megnevezésre és leírásra is lehet keresni.</li>
 </ul>
 <h2>5. Kalkulátor korlátai</h2>
 <ul>
  <li>Maximális összesített bírság: <strong>2 500 000</strong></li>
  <li>Maximális összesített börtön: <strong>120 perc</strong></li>
  <li>A minimum- és maximumérték is korlátozva van.</li>
  <li>Többszörös elkövetésnél sem lépheti túl ezeket.</li>
  <li>A bűnrészesi 50%-os csökkentés és a mennyiségi szorzó megmaradt.</li>
 </ul>
 <h2>6. Eredeti büntetések</h2>
 <p>A táblázatban meghagytam a SeePD eredeti büntetéseit. Öt forrástétel 120 percnél magasabb:</p>
 <ul>
  <li><code>EKHSZSZ</code> – 130 perc</li>
  <li><code>GYKH</code> – 180 perc</li>
  <li><code>TRCS</code> – 200 perc</li>
  <li><code>PM</code> – 200 perc</li>
  <li><code>KRPM</code> – 150 perc</li>
 </ul>
 <p>Ezek a táblázatban eredetileg láthatók, de a kalkulátor végeredménye legfeljebb 120 perc.</p>
 <h2>7. Segédlet</h2>
 <ul><li>Max. bírság: 2 500 000</li><li>Max. börtön: 120 perc</li></ul>
 <h2>8. Feltöltött commitok</h2>
 <ul>
  <li><code>5304fae</code> – BTK vádtételek frissítése</li>
  <li><code>4c7854c</code> – Összetett vádtételek keresése</li>
  <li><code>edc1f17</code> – Találati lista bővítése</li>
  <li><code>d119173</code> – SeePD-adatok szinkronizálása</li>
  <li><code>26c09fe</code> – Bírság- és börtönmaximum beállítása</li>
 </ul>
</article>`;
document.body.appendChild(guide);
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const textNodes=[];while(walker.nextNode())if(!['SCRIPT','STYLE'].includes(walker.currentNode.parentElement?.tagName))textNodes.push(walker.currentNode);textNodes.forEach(node=>{node.textContent=node.textContent.replace(/Blaine County Sheriff's Office/gi,"Sheriff's Office").replace(/Blaine County Kormánya/gi,'Kormánya').replace(/\s*&\s*Blaine County/gi,'').replace(/Blaine County/gi,'').replace(/ {2,}/g,' ')});
const show=()=>{guide.hidden=false;document.body.classList.add('guide-open');if(!location.pathname.endsWith('/Frissítések'))history.pushState({guide:true},'', '/Frissítések')};
const hide=()=>{guide.hidden=true;document.body.classList.remove('guide-open');if(location.pathname.endsWith('/Frissítések'))history.pushState({},'', '/')};
help.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();show()},true);
const home=[...document.querySelectorAll('a')].find(a=>a.textContent.trim()==='BTK');if(home)home.addEventListener('click',e=>{if(!guide.hidden){e.preventDefault();hide()}},true);
addEventListener('popstate',()=>location.pathname.endsWith('/Frissítések')?show():hide());if(location.pathname.endsWith('/Frissítések')||new URLSearchParams(location.search).has('Frissítések'))show();
})();
