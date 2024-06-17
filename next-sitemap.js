// next-sitemap.js
module.exports = {
  siteUrl: "https://igtainternational.org",
  generateRobotsTxt: true,
  exclude: ["/admin/*"], // Exclude certain paths
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://igtainternational.org/my-custom-sitemap-1.xml",
      "https://igtainternational.org/my-custom-sitemap-2.xml",
    ],
  },
  // ...other options
};
