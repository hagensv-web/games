import sitemap from 'nextjs-sitemap-generator'
import path from "path";


sitemap({
  baseUrl: 'https://hagensv-web.github.io/games', // Replace with your site URL
  pagesDirectory: path.resolve(__dirname, '../out/'), // Path to your exported static files
  targetDirectory: path.resolve(__dirname, '../out/'), // Where to output sitemap.xml
  ignoredExtensions: ['js', 'map', 'json', 'xml', 'png', 'jpg', 'jpeg', 'svg'],
  ignoredPaths: ['[fallback]'],
  allowFileExtensions: true, // Ensures URLs include .html extensions
});