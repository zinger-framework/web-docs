const siteConfig = {
  title: 'Zinger',
  tagline: 'Zinger Docs',
  url: 'https://zingerdocs.netlify.app',
  baseUrl: '/',

  projectName: 'zinger-framework-docs',
  organizationName: 'ddlogesh',

  headerLinks: [
    {doc: 'getting-started/architecture-overview', label: 'Docs'},
    {doc: 'api', label: 'API'},
    {doc: 'installation-guide/prerequisites', label: 'Guide'},
    {doc: 'case-study', label: 'Case Study'}
    ],
  headerIcon: 'img/zinger-logo.png',
  footerIcon: 'img/zinger-logo.png',
  favicon: 'img/zinger-logo.png',

  colors: {
    primaryColor: '#FF4141',
    secondaryColor: '#FFFFFF',
    greyColor:'#7C7C7C'
  },

  fonts: {
    myFont: [
      "Poppins",
      "sans-serif"
    ]
  },

  highlight: {
    theme: 'default',
  },
  stylesheets:[
      "css/custom.css"
  ],

  onPageNav: 'separate',
  cleanUrl: true,

  disableHeaderTitle: false,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
};

module.exports = siteConfig;
