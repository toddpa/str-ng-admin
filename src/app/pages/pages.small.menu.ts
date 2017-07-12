export const PAGES_SMALL_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'thirdparty',
        data: { // custom menu declaration
          menu: {
            title: 'general.menu.srt_pages', // menu title
            icon: 'ion-edit', // menu icon
            // pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [{
          path: 'grid',
          data: {
            menu: {
              title: 'Grids'
            }
          },
          children: [
            {
              path: 'kendo',  // path for our page
              data: {
                menu: {
                  title: 'general.menu.kendo_grid'
                }
              }
            },
            {
              path: 'ag',  // path for our page
              data: {
                menu: {
                  title: 'general.menu.ag_grid'
                }
              }
            }
          ]
        }
        ]
      },
      {
        path: 'formulae',
        data: {
          menu: {
            title: 'Formulae',
            icon: 'ion-compose' // menu icon
          }
        },
        children: [
          {
            path: 'supervisory',  // path for our page
            data: {
              menu: {
                title: 'general.menu.formulae.supervisory'
              }
            }
          }
        ]
      },
      {
        path: 'srt',
        data: {
          menu: {
            title: 'SRT',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'issuer-details',
            data: {
              menu: {
                title: 'general.menu.srt.issuer-details'
              }
            }
          },
          {
            path: 'issuer-uploads',
            data: {
              menu: {
                title: 'general.menu.srt.issuer-uploads'
              }
            }
          },
          {
            path: 'issuer-factors',
            data: {
              menu: {
                title: 'general.menu.srt.factors'
              }
            }
          },
          {
            path: 'conversion',
            data: {
              menu: {
                title: 'general.menu.srt.conversion'
              }
            }
          },
          {
            path: 'processing',
            data: {
              menu: {
                title: 'general.menu.srt.processing'
              }
            }
          },
          {
            path: 'portfolios',
            data: {
              menu: {
                title: 'general.menu.srt.portfolios'
              }
            }
          },
          {
            path: 'investors',  // path for our page
            data: {
              menu: {
                title: 'general.menu.srt.investors'
              }
            }
          }
        ]
      }
    ]
  }
];
