import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogDetailService } from '../service/blog-detail.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private blogService: BlogDetailService) { }

  blog: Blog = {
    name: 'Yellowstonský národný park',
    content: `<p>
    <strong>Yellowstonský národný park</strong>  je americký národný park, ktorý sa nachádza v štátoch
   Wyoming, Montana a Idaho. Je to najstarší národný park na svete (od 1. marca 1872) a
    rozprestiera sa na rozlohe 8 980 km², z väčšej časti na severozápade štátu Wyoming.
    Park je známy najmä množstvom svojich gejzírov, horúcich prameňov a iných geotermálnych objektov.
     Je najväčším sústredením gejzírov na Zemi (viac ako 200). Je domovom medveďov grizly, vlkov, bizónov a losov.
      Tento park je jadrom väčšieho yellowstonského ekosystému, jedného z najväčších nedotknutých prírodných ekosystémov na našej planéte.
       8. septembra 1978 OSN vyhlásila park za svetové dedičstvo.
  </p>

  <p><strong>Geologický vývoj</strong></p>

  <p>
    Yellowstonské vulkanické pole sa vyvinulo počas troch fáz vulkanickej aktivity. Najstarší cyklus sa odohral pred 2,1 mil. rokov, jeho pozostatky predstavujú masívne uloženiny tufov formácie Huckleberry Ridge Tuff s objemom cez 2 450 km³.
  </p>

  <p class="note note-light">
    <strong>Zaujímavosť:</strong> Pod istou časťou národného parku sa nachádza jedna z najväčších aktívnych sopiek na svete. Prvá veľká erupcia sopky Yellowstone prebehla pred 2,1 miliónmi rokov a popolom pokryla viac ako 6 tisíc kilometrov štvorcových.
  </p>

  <p>
    Najznámejší gejzír v Yellowstone a na celom svete je Old Faithful Geyser. Rovnako ako Castle Geyser, Lion Geyser a Beehive Geyser, nachádza sa v Upper Geyser Basin. V parku sa taktiež nachádza najväčší činný gejzír sveta - Steamboat Geyser, ktorý sa nachádza v Norris Geyser Basin. V národnom parku sa nachádza vyše 300 gejzírov a 10 000 geotermálnych oblastí. Polovica geotermálnych oblastí a dve tretiny gejzírov na Zemi sú práve v Yellowstonskom národnom parku.
  </p>

  <img
    src="assets/img/img2.jpg"
    class="img-fluid shadow-1-strong rounded mb-4"
    alt=""
  />

  <ul>
    <li>Lorem</li>
    <li>Ipsum</li>
    <li>Dolor</li>
    <li>Sit</li>
    <li>Amet</li>
  </ul>

  <p><strong>Chceli by ste navštíviť Yelowstonský park ?</strong></p>

  <p>
    Park má päť vstupných miest, no niektoré sú v zime pre vozidlá uzavreté. Akonáhle sa na letnú sezónu otvoria všetky cesty, ľudia môžu vstupovať do parku 24 hodín denne, sedem dní v týždni. Cesta medzi horúcimi prameňmi Mammoth a severovýchodnom vchodom je otvorená vždy. Poskytuje teda celoročný prístup do údolia Lamar, ktoré je vhodným miestom na kempovanie, pešiu turistiku, rybolov či lyžovanie.
    Sedemdňový preukaz na vstup do parku stojí 30 $ (súkromné ​​vozidlo), zakúpiť možno ale aj individuálny preukaz za 15 $ na osobu staršiu ako šestnásť rokov.

Počasie v Yellowstonskom parku sa môže niekoľkokrát zmeniť aj počas jediného dňa. V lete môžu denné maximá prekročiť 25 °C. V zimných mesiacoch tu často sneží a teploty klesajú pod nulu, najmä v noci. Pre všetky prípady si so sebou vezmite dostatok oblečenia, vrátane teplej a nepremokavej bundy. Verte, že sa môže hodiť aj v lete.
  </p>`
  };

  ngOnInit(): void {
     this.blogService.getBlogDetail("yellowstone").subscribe(blog => this.blog = blog);
  }

}
