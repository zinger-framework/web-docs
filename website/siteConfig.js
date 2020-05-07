/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

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
    {doc: 'installation-guide/prerequisites', label: 'Guides'},
    {doc: 'samples', label: 'Samples'}
    ],
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

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
