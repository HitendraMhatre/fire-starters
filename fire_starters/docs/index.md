---

layout: home

---




<!-- Custom home layout -->

<script setup>

import patientCard from "./ui-components/vue-components/patient-card/TC1.vue"

// import patientBanner from "./ui-components/vue-components/patient-banner/TC1.vue"

// import patientTable from "./ui-components/vue-components/patient-table/TC1.vue"

</script>

<section class="main-content">
    <section class="home-block content-block">
      <div class="container">
       <div class="row" style="margin-top: -140px">
          <div class="col-sm-12 col-md-6 order-md-1 order-2">
            <div class="left">
              <h1 class="text-primary title">
              Quick and easy UI prototyping for FHIR® apps
             </h1>
              <p class="desp">
                Fire Starters is a free, open-source library of high-quality,
                ready-to-use, UI components for web applications that bind and
              render data from FHIR® Resources. Fire Starters make it easy to
                ideate and prototype user experiences for FHIR-based apps.
                <br /><br />Whether you’re building your first SMART-on-FHIR
                app, teaching FHIR or just playing with the standard, Fire
                Starters gives you an easy jumping off point.
                <br /><br />Fire Starters is a Validitron® project.
              </p>
            </div>
         </div>
          <div class="col-sm-12 col-md-6 order-md-2 order-1">
            <img
              class="img-fluid"
              src="/assets/images/main-block-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
  </section>
   <section class="how-it-works-block content-block" style="margin-top: -80px">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
         <h1 class="text-primary title">Get Started</h1>
            <p class="desp">
              Fire Starters parses standard FHIR resources in JSON format and
              renders relevant data as ready-to-use card, banner or table web-UI
              components derived from vanilla Bootstrap. Currently, Fire
              Starters supports only Vue.js framework.
            </p>
          </div>
       </div>
        <h2 class="text-primary title">Card</h2>
        <div style="width: 600px" class="d-flex align-items-start gap-1 col-sm-12">
      <ClientOnly>
          <patientCard />
        </ClientOnly>
        </div>
        <div class="d-flex align-items-start gap-1 col-sm-12">
          <!-- <immunization-card :data="fhirJson"/> -->
        </div>
        <br>
        <h2 class="text-primary title">Banner</h2>
       <div class="d-flex align-items-start gap-1 col-sm-12">
          <!-- <patientBanner /> -->
        </div>
      <br>
        <h2 class="text-primary title">Table</h2>
        <div class="d-flex align-items-start gap-1 col-sm-12">
          <!-- <patientTable /> -->
        </div>
        <br>
        <div class="row">
          <div class="col-sm-12">
            <p class="desp">It can be accessed as an npm package.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="github-block content-block" style="margin-top: -80px">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
         <div class="row">
              <div class="col-sm-12">
                <div class="instruct-box">
                  <div class="card clipboard mt-4 p-3">
                    <div class="left">
                      <h2 class="fw-normal copy-text text-gray-dark mb-0">
                        npm install fire-starters
                     </h2>
                    </div>
                    <div class="ms-auto copy-btn">
                      <img src="/assets/images/clipboard-img.png" alt="" />
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <p class="desp">
                 The current version FIRE Starters provides support for seven
                  basic FHIR resources, that can be explored
                  <a href="ui-components-cards.html">here</a>.
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
    <section class="how-it-works-block content-block" style="margin-top: -60px">
      <div class="container">
        <div class="row">
         <div class="col-sm-12">
            <h1 class="text-primary title">What is FHIR®?</h1>
            <p class="desp">
                  FHIR® (Fast Health Interoperability Resource) is an
                  interoperability standard for healthcare data storage and
                exchange. It was developed by Health Level Seven®
                  International (HL7®), a non-profit organization that provides
                 frameworks and standards for exchange of electronic health
                  information. FHIR® uses common web standards (REST, OAuth,
                  XML, JSON), reducing the barriers of entry for software
                  developers, to address the data exchange challenges in the
                  complex healthcare systems.
                </p>
                <p class="desp">
                 FHIR® ‘Resources’ are data models of units of clinical and
                  administration information, each uniquely identifiable. The
                 resources are modular and cover most common clinical use
                 cases. Some sample resources include patient, provider,
                  organization, device, medications, diagnostics, care plans,
                  and finance.
                </p>
                <p class="desp">Learn more here: <a href="https://hl7.org/fhir/">https://hl7.org/fhir/</a></p>
          </div>
        </div>
      </div>
    </section>
  <section class="validitron-block content-block" style="margin-top: -120px">
      <div class="container">
        <div class="row">
          <div class="col-md-8 order-md-1 order-2">
          <div class="left">
              <h1 class="text-primary title"></h1>
              <div class="list-box">
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
    <section class="validitron-block content-block" style="margin-top: -30px">
      <div class="container">
        <div class="row">
          <h1 class="text-primary title">Validitron</h1>
          <div class="col-md-8 order-md-1 order-2">
            <div class="left">
              <div class="list-box">
                <p class="desp">
                The Validitron® from the University of Melbourne is a new
                 service for digital health innovators and researchers. Our
                 vision is to accelerate the transformation of healthcare by
                  helping more digital innovations successfully bridge the gap
                  between innovation and implementation. We focus on the
                  challenges that others don't.
                </p>
               <p class="desp">
                  We help innovators explore the human, workflow and context
                  enablers that mean the difference between something that is
                  just a good idea and that something that actually works in the
                  real world. We help generate the evidence wanted by payers and
                  regulators to show that new digital health tools are
                  effective, safe, acceptable, and workable. We bring methods
                  expertise and innovative techniques, such as simulation, to
                  make it easy and quick to test and validate new products and
                  ideas.
                </p>
                <p class="desp">
                  Fire Starters is a Validitron® project. Originally built to
                  support our dev and teaching activities, we’re now happy to
                  make it available o all.
                </p>
              <ul style="list-style-type: disc; font-size: 20px">
                  <li>Digital health stakeholder consultation and landscape analysis</li>
                  <li>Equity-aware digital health codesign</li>
                  <li>Pathway digitisation and digital readiness assessment</li>
                  <li>Digital health user testing and simulation studies</li>
                 <li>Digital health evaluation design</li>
                  <li>Digital health technology assessment</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md-2">
            <img
             class="img-fluid"
              src="/assets/images/validtron-block-img.png"
              alt=""
            />
          </div>
      </div>
      </div>
   </section>
         <section class="team-block content-block" style="margin-top: -50px">
      <div class="container">
       <div class="row">
          <div class="col-sm-12">
            <h1 class="text-primary title">About</h1>
            <div class="row team-container" >
              <h2 class="text-primary title" style="margin-left: -3px !important;">Validitron team</h2>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1" >
                  <h5 class="name fw-semibold"> Dr Madhavan Mani</h5>
                  <p class="role">Project Manager</p>
                  <div class="social-list">
                    <a href="https://www.linkedin.com/in/madhavanmani">
                      <h2>
                        <i
                          class="fa fa-linkedin text-gray-dark"
                          aria-hidden="true"
                       ></i>
                      </h2>
                   </a>
               </div>
               </div>
              </div>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
               <div class="desp mt-1">
                  <h5 class="name fw-semibold"> Dr Kit Huckvale</h5>
                  <p class="role">Project Lead</p>
                  <div class="social-list">
                    <a href="https://findanexpert.unimelb.edu.au/profile/900311-kit-huckvale">
                     <h2>
                        <i
                         class="fa fa-linkedin text-gray-dark"
                         aria-hidden="true"
                       ></i>
                      </h2>
                   </a>
                  </div>
                </div>
              </div>
              <h2 class="text-primary title">iLab@UMI team, Universiti Malaya</h2>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1">
                <h5 class="name fw-semibold">Dr CHIEW, Thiam Kian</h5>
                  <p class="role">Consultant</p>
                 <div class="social-list">
                    <a href="https://www.linkedin.com/in/chiew-thiam-kian-43999539/">
                      <h2>
                        <i
                        class="fa fa-linkedin text-gray-dark"
                          aria-hidden="true"
                       ></i>
                      </h2>
                    </a>
                  </div>
              </div>
             </div>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1">
                 <h5 class="name fw-semibold">Mrs WONG, Sally</h5>
                 <p class="role">Industrial Advisor</p>
               </div>
              </div>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
              <div class="desp mt-1">
                  <h5 class="name fw-semibold">Mr CHIN, Jia Xiong</h5>
                  <p class="role">Technical Developer</p>
                  <div class="social-list">
                   <a href="https://www.linkedin.com/in/chin-jia-xiong-60995417b/">
                      <h2>
                        <i
                          class="fa fa-linkedin text-gray-dark"
                          aria-hidden="true"
                        ></i>
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1">
                  <h5 class="name fw-semibold">Mr LEW, Jun Bin</h5>
                  <p class="role">Technical Developer</p>
                  <div class="social-list">
                    <a href="https://www.linkedin.com/in/lew-jun-bin-90966a1a8/">
                      <h2>
                        <i
                        class="fa fa-linkedin text-gray-dark"
                         aria-hidden="true"
                        ></i>
                     </h2>
                   </a>
                  </div>
                </div>
           </div>
             <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
               <div class="desp mt-1">
                  <h5 class="name fw-semibold">Mr LOH, Yuen Min</h5>
                  <p class="role">Technical Developer</p>
              <div class="social-list">
                   <a href="https://www.linkedin.com/in/loh-yuen-min-651794227/">
                      <h2>
                        <i
                         class="fa fa-linkedin text-gray-dark"
                          aria-hidden="true"
                        ></i>
                      </h2>
                    </a>
                </div>
               </div>
              </div>
             <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1">
                  <h5 class="name fw-semibold">Mr ONG, Heng Kiat</h5>
                  <p class="role">Technical Developer</p>
                  <div class="social-list">
                    <a href="https://www.linkedin.com/in/heng-kiat-ong-838a27185/">
                      <h2>
                        <i
                          class="fa fa-linkedin text-gray-dark"
                          aria-hidden="true"
                        ></i>
                   </h2>
                   </a>
                  </div>
                </div>
              </div>
              <div class="item p-4 col-12 col-md-4" style="padding: 8px !important">
                <div class="desp mt-1">
                  <h5 class="name fw-semibold">Mr SAM, Wei Hong</h5>
                  <p class="role">Technical Developer</p>
                <div class="social-list">
                  <a href="https://www.linkedin.com/in/wei-hong-sam/">
                      <h2>
                  <i
                        class="fa fa-linkedin text-gray-dark"
                         aria-hidden="true"
                     ></i>
                    </h2>
                  </a>
                 </div>
              </div>
            </div>
           </div>
        </div>
       </div>
    </div>
  </section>
  </section>