(()=>{'use strict';
const help=document.querySelector('a[href="/segedlet"]');if(!help)return;
const guide=document.createElement('main');guide.className='local-guide';guide.hidden=true;guide.innerHTML=`
<article class="local-guide-card">
 <h2>Maximum büntetésre vonatkozó szabályok</h2><p><b>Max börtönidő:</b> <em>120 Perc</em><br><b>Max bírság:</b> <em>2.500.000 $</em></p>
 <h2>Enyhítő körülmények</h2><p><b>[20-40% ajánlott]</b> Büntetlen előélet (MDC ellenőrzése minden esetben szükséges)<br><b>[10-20% ajánlott]</b> Hatóságokkal történő együttműködés<br><b>[50% ajánlott]</b> Kényszer hatására követte el a bűncselekményt<br><b>[20-30% ajánlott]</b> Elkövető önfeljelentése (Különösen, ha ennek folytán vált lehetővé a bűncselekmény felderítése, vagy azt jelentős mértékben elősegítette)<br><b>[20-30% ajánlott]</b> A bűnösségre is kiterjedő beismerő vallomás, illetve a részbeni beismerés. Nagyobb a nyomatéka, ha a beismerés segíti a felderítést. Tettenérés esetén csak a bűnösség elismerésének és a megbánás lehet enyhítő körülmény.</p>
</article>`;
document.body.appendChild(guide);
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const textNodes=[];while(walker.nextNode())if(!['SCRIPT','STYLE'].includes(walker.currentNode.parentElement?.tagName))textNodes.push(walker.currentNode);textNodes.forEach(node=>{node.textContent=node.textContent.replace(/Blaine County Sheriff's Office/gi,"Sheriff's Office").replace(/Blaine County Kormánya/gi,'Kormánya').replace(/\s*&\s*Blaine County/gi,'').replace(/Blaine County/gi,'').replace(/ {2,}/g,' ')})
const show=()=>{guide.hidden=false;document.body.classList.add('guide-open');if(!location.pathname.endsWith('/segedlet'))history.pushState({guide:true},'','/segedlet')};
const hide=()=>{guide.hidden=true;document.body.classList.remove('guide-open');if(location.pathname.endsWith('/segedlet'))history.pushState({},'','/')};
help.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();show()},true);
const home=[...document.querySelectorAll('a')].find(a=>a.textContent.trim()==='BTK');if(home)home.addEventListener('click',e=>{if(!guide.hidden){e.preventDefault();hide()}},true);
addEventListener('popstate',()=>location.pathname.endsWith('/segedlet')?show():hide());if(location.pathname.endsWith('/segedlet')||new URLSearchParams(location.search).has('segedlet'))show();
})();
