import { defineConfig } from 'vitepress'

import { containerPreview, componentPreview } from '../utils/index'

// https://vitepress.dev/reference/site-config
module.exports = ({

  title: "Fire Starters",
  description: "Fire Starters",
  base: 'https://fire-starters-git-123-shruti18-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/',
  port: 5173,
  
  themeConfig: {
    siteTitle: "Fire Starters",
    // Navbar Link
    nav: [
      // { text: "About", link: "/about" },
      // { text: "Contact", link: "/contact" },
      // { text: "Guide", link: "/guide" },
      // { text: "Configs", link: "/configs" },
      { text: "UI Components", link: "/ui-components/ui-components" },
      // {
      //   // Dropdown Menu
      //   text: "Changelog",
      //   items: [
      //     { text: "v0.0.1", link: "/item-1" },
      //     { text: "v0.0.2", link: "/item-2" },
      //     { text: "v0.0.3", link: "/item-3" },
      //   ],
      // },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/evavic44" },
    ],
    
    // Sidebar
    sidebar: [
      {
        text: "Overview",
        collapsed: false,
        items: [
          { text: "Intro", link: "/ui-components/overview/overview" },
          { text: "Base Components", link: "/ui-components/overview/base" },
          { text: "Card", link: "/ui-components/overview/card" },
          { text: "Banner", link: "/ui-components/overview/banner" },
          { text: "Table", link: "/ui-components/overview/table" },
        ],
      },
      {
        text: "Patient",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/patient/patient-card" },
          { text: "Banner", link: "ui-components/patient/patient-banner" },
          { text: "Table", link: "ui-components/patient/patient-table" },
        ],
      },
      {
        text: "Practitioner",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/practitioner/practitioner-card" },
          { text: "Banner", link: "ui-components/practitioner/practitioner-banner" },
          { text: "Table", link: "ui-components/practitioner/practitioner-table" },
        ],
      },
      {
        text: "Immunization",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/immunization/immunization-card" },
          { text: "Banner", link: "ui-components/immunization/immunization-banner" },
          { text: "Table", link: "ui-components/immunization/immunization-table" },
        ],
      },
      {
        text: "Medication Request",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/medication-request/medication-request-card" },
          { text: "Banner", link: "ui-components/medication-request/medication-request-banner" },
          { text: "Table", link: "ui-components/medication-request/medication-request-table" },
        ],
      },
      {
        text: "Allergy Intolerance",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/allergy-intolerance/allergy-intolerance-card" },
          { text: "Banner", link: "ui-components/allergy-intolerance/allergy-intolerance-banner" },
          { text: "Table", link: "ui-components/allergy-intolerance/allergy-intolerance-table" },
        ],
      },
      {
        text: "Observation",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/observation/observation-card" },
          { text: "Banner", link: "ui-components/observation/observation-banner" },
          { text: "Table", link: "ui-components/observation/observation-table" },
        ],
      },
      {
        text: "Condition",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/condition/condition-card" },
          { text: "Banner", link: "ui-components/condition/condition-banner" },
          { text: "Table", link: "ui-components/condition/condition-table" },
        ],
      },
    ],

    footer: {
      message: '<footer><div class="container"> <div class="row"> <div class="col-sm-12"> <div class="footer-inner"> <div class="left content"> <a class="logo" href="/"> <img src="/assets/images/Fire-Starters-logo.png" alt="" /> </a> <div class="social-list"> <a href="javascript:void(0)"> <h2> <i class="fa fa-facebook-official text-gray-dark" aria-hidden="true" ></i> </h2> </a> <a href="javascript:void(0)"> <h2> <i class="fa fa-twitter text-gray-dark" aria-hidden="true" ></i> </h2> </a> <a href="javascript:void(0)"> <h2> <i class="fa fa-linkedin text-gray-dark" aria-hidden="true" ></i> </h2> </a> </div> </div> <div class="middle content"> <h2 class="mb-3 text-primary">Reach Out to Us</h2> <p class="mb-2 text-dark fw-semibold"> validitron@unimelb.edu.au </p> <p class="text-dark fw-semibold">Phone: 13 MELB (13 6352)</p> </div> <div class="right content"> <h2 class="mb-3 text-primary">Address</h2> <p class="mb-2 text-dark fw-semibold"> Parkville VIC 3010, Australia </p> </div> </div> </div> </div> </div> </footer>',
    },

  },

    markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }

})