import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
// import { Blog } from '../blog';
import { Blog } from '../blog.model';
import { ShowPostService } from '../service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';
import { SafeHtmlPipe } from '../safe-html.pipe';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public blog: Blog;

  

  @Input() styleContent: string;

  constructor(
    private showPostService: ShowPostService, 
    private route: ActivatedRoute,
    private commonService: CommonService
    ) { 
    }

    ngOnInit(){
      this.getBlogDetail();
  
      // this.commonService.blogAdded_Observable.subscribe(res => {
      //   this.getBlog();
      // });

      // this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);
    }
  
    getBlogDetail(){
      // this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);      

      this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('result is', result);
        this.blog = result;
      //   this.blog.content =  `<div class="blog">
      //   <header>
      //     <!-- Jumbotron -->
      //     <div class="p-5 text-center bg-white" style="margin-top: 158px">
           
      //       <h1 class="mt-5 text-warning font-weight-bold" style="text-align:center;font-family:Impact;color:#660033;font-size: 50px;height: 35px;padding-top: 130px; ;background-color:#FFFFFF;">Yellowstonský národný park</h1>
      
            
      //     </div>
      //     <!-- Jumbotron -->
      //   </header>
      
      //   <!-- Main layout -->
      //   <main class="my-4">
      //     <div class="container">
      //       <div class="row">
      //         <div class="col-lg-8 mb-4">
      //           <!-- Post Data -->
      //           <section id="post" class="border-bottom mb-4">
      //             <img
      //               src="assets/img/img1.jpg"
      //               alt="Feature image"
      //               class="img-fluid shadow-2-strong rounded mb-4"
      //             />
      //             <div class="row align-items-center mb-4">
      //               <div class="col-md-6 text-center text-lg-left mb-3 m-lg-0">
      //                 <img
      //                   src="https://i.imgur.com/X7AWTcL.jpeg"
      //                   class="rounded shadow-1-strong mr-2"
      //                   height="35"
      //                 />
      //                 <span>Uverejnené <u>24.03.2022</u></span>
      //                 <a href="#" class="text-dark"> Šimon Kvašňovský</a>
      //               </div>
      //               <div class="col-md-6 text-center text-lg-right">
      //                 <!-- Facebook -->
      //                 <a
      //                   class="btn btn-primary px-3 mr-1"
      //                   style="background-color: #3b5998"
      //                   href="#!"
      //                   role="button"
      //                   ><i class="fab fa-facebook-f"></i
      //                 ></a>
      //              <!-- Instagram -->
      //                 <a
      //                 class="btn btn-primary px-3 mr-1"
      //                 style="background-color: #ac2bac;"
      //                 href="#!"
      //                 role="button"
      //                 ><i class="fab fa-instagram"></i
      //               ></a>
                      
      
      //                 <!-- Comments -->
      //                 <a 
      //                 type="button" 
      //                 class="btn btn-primary px-3 mr-1"
      //                 >
      //                   <i class="fas fa-comments"></i>
      //                 </a>
      //               </div>
      //             </div>
      //           </section>
      //           <!-- Post Data -->
      //           <!-- Post Content -->
      
      //           <p>
      //             <strong>Yellowstonský národný park</strong>  je americký národný park, ktorý sa nachádza v štátoch
      //            Wyoming, Montana a Idaho. Je to najstarší národný park na svete (od 1. marca 1872) a
      //             rozprestiera sa na rozlohe 8 980 km², z väčšej časti na severozápade štátu Wyoming.
      //             Park je známy najmä množstvom svojich gejzírov, horúcich prameňov a iných geotermálnych objektov.
      //              Je najväčším sústredením gejzírov na Zemi (viac ako 200). Je domovom medveďov grizly, vlkov, bizónov a losov.
      //               Tento park je jadrom väčšieho yellowstonského ekosystému, jedného z najväčších nedotknutých prírodných ekosystémov na našej planéte.
      //                8. septembra 1978 OSN vyhlásila park za svetové dedičstvo.
      //           </p>
              
      //           <p><strong>Geologický vývoj</strong></p>
              
      //           <p>
      //             Yellowstonské vulkanické pole sa vyvinulo počas troch fáz vulkanickej aktivity. Najstarší cyklus sa odohral pred 2,1 mil. rokov, jeho pozostatky predstavujú masívne uloženiny tufov formácie Huckleberry Ridge Tuff s objemom cez 2 450 km³.
      //           </p>
              
      //           <p class="note note-light">
      //             <strong>Zaujímavosť:</strong> Pod istou časťou národného parku sa nachádza jedna z najväčších aktívnych sopiek na svete. Prvá veľká erupcia sopky Yellowstone prebehla pred 2,1 miliónmi rokov a popolom pokryla viac ako 6 tisíc kilometrov štvorcových.
      //           </p>
              
      //           <p>
      //             Najznámejší gejzír v Yellowstone a na celom svete je Old Faithful Geyser. Rovnako ako Castle Geyser, Lion Geyser a Beehive Geyser, nachádza sa v Upper Geyser Basin. V parku sa taktiež nachádza najväčší činný gejzír sveta - Steamboat Geyser, ktorý sa nachádza v Norris Geyser Basin. V národnom parku sa nachádza vyše 300 gejzírov a 10 000 geotermálnych oblastí. Polovica geotermálnych oblastí a dve tretiny gejzírov na Zemi sú práve v Yellowstonskom národnom parku.
      //           </p>
              
      //           <img
      //             src="assets/img/img2.jpg"
      //             class="img-fluid shadow-1-strong rounded mb-4"
      //             alt=""
      //           />
              
      //           <ul>
      //             <li>Lorem</li>
      //             <li>Ipsum</li>
      //             <li>Dolor</li>
      //             <li>Sit</li>
      //             <li>Amet</li>
      //           </ul>
              
      //           <p><strong>Chceli by ste navštíviť Yelowstonský park ?</strong></p>
              
      //           <p>
      //             Park má päť vstupných miest, no niektoré sú v zime pre vozidlá uzavreté. Akonáhle sa na letnú sezónu otvoria všetky cesty, ľudia môžu vstupovať do parku 24 hodín denne, sedem dní v týždni. Cesta medzi horúcimi prameňmi Mammoth a severovýchodnom vchodom je otvorená vždy. Poskytuje teda celoročný prístup do údolia Lamar, ktoré je vhodným miestom na kempovanie, pešiu turistiku, rybolov či lyžovanie.
      //             Sedemdňový preukaz na vstup do parku stojí 30 $ (súkromné ​​vozidlo), zakúpiť možno ale aj individuálny preukaz za 15 $ na osobu staršiu ako šestnásť rokov.
              
      //         Počasie v Yellowstonskom parku sa môže niekoľkokrát zmeniť aj počas jediného dňa. V lete môžu denné maximá prekročiť 25 °C. V zimných mesiacoch tu často sneží a teploty klesajú pod nulu, najmä v noci. Pre všetky prípady si so sebou vezmite dostatok oblečenia, vrátane teplej a nepremokavej bundy. Verte, že sa môže hodiť aj v lete.
      //           </p>
                
      //         </div>
      //         <div class="col-lg-4 mb-4">
      //           <!-- Sidebar -->
      //           <section id="sidebar" class="sticky-top" style="top: 80px">
      //             <div
      //               class="bg-image ripple mb-4 rounded shadow-2-strong"
      //               data-ripple-color="light"
      //             >
      //               <img src="assets/img/img3.jpg" class="w-100" />
      //               <a href="#!">
      //                 <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
      //                   <div
      //                     class="d-flex justify-content-center align-items-center h-100"
      //                   ></div>
      //                 </div>
      //                 <div class="hover-overlay">
      //                   <div
      //                     class="mask"
      //                     style="background-color: rgba(251, 251, 251, 0.2)"
      //                   ></div>
      //                 </div>
      //               </a>
      //             </div>
      //             <div
      //               class="bg-image ripple rounded shadow-2-strong"
      //               data-ripple-color="light"
      //             >
      //               <img src="assets/img/img4.jpg" class="w-100" />
      //               <a href="#!">
      //                 <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
      //                   <div
      //                     class="d-flex justify-content-center align-items-center h-100"
      //                   ></div>
      //                 </div>
      //                 <div class="hover-overlay">
      //                   <div
      //                     class="mask"
      //                     style="background-color: rgba(251, 251, 251, 0.2)"
      //                   ></div>
      //                 </div>
      //               </a>
      //             </div>
      //           </section>
      //           <!-- Sidebar -->
      //         </div>
      //       </div>
      //     </div>
      //   </main>
      //   <!-- Main layout -->
      // </div>` 
      });
    }

}
