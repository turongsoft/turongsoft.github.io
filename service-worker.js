if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,c,r)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}})).then(e=>{const i=r(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./i18n/de.json",revision:"3a150090a7b28214e2d3d6b93b92246b"},{url:"./i18n/en.json",revision:"aee99530559b1e6f49ff4bb3f00df7c6"},{url:"./i18n/fr.json",revision:"c5572849d522d50892f5290c02a62780"},{url:"./i18n/vi.json",revision:"4844cf0cc9a1090f040f59b5a1f5a820"},{url:"app/account.a6c593c761b3edf20cda.chunk.js",revision:"a9f23339b5d0a3c82fe77d1f73908c7e"},{url:"app/administration.a6c593c761b3edf20cda.chunk.js",revision:"89d44f6008cb49dd5c1dd30e77997dfc"},{url:"app/main.a6c593c761b3edf20cda.bundle.js",revision:"e7df24847a46372818e10a0b0c64b4f0"},{url:"app/vendors.a6c593c761b3edf20cda.chunk.js",revision:"2bf5b18b46ddbbf4a55335016d7979cf"},{url:"app/vendors.a6c593c761b3edf20cda.chunk.js.LICENSE.txt",revision:"da7564a65acd907602b511e45edb6fbf"},{url:"content/5ca455d9523062f1bd3847c191e60147.svg",revision:"3f686fdec6c7c6c5501692551423bc09"},{url:"content/administration.a6c593c761b3edf20cda.css",revision:"8c7af9325371d1ba082b9ab9c45ebd9d"},{url:"content/css/loading.css",revision:"967fba35481968c84d331583c3df7770"},{url:"content/images/jhipster_family_member_0.svg",revision:"068483b5e9a98559fe8b9755f577c433"},{url:"content/images/jhipster_family_member_0_head-192.png",revision:"88ccd9b057a6340cc5a143fe0e87c13e"},{url:"content/images/jhipster_family_member_0_head-256.png",revision:"167a9f973961596688ca56478d2ff20c"},{url:"content/images/jhipster_family_member_0_head-384.png",revision:"75a03b03f0e08c8d471596cd2f20e60c"},{url:"content/images/jhipster_family_member_0_head-512.png",revision:"d801f9fa29e7b82575f70b130df6a6b0"},{url:"content/images/jhipster_family_member_1.svg",revision:"fc0c44cf941135edf27837d81e717027"},{url:"content/images/jhipster_family_member_1_head-192.png",revision:"c10d53dc0b6031e1a6351a150ef80a6b"},{url:"content/images/jhipster_family_member_1_head-256.png",revision:"c5377635247e7d603ea7ac838bef4122"},{url:"content/images/jhipster_family_member_1_head-384.png",revision:"ab3eb7d4dea61a5e45bcfac7a43d20ec"},{url:"content/images/jhipster_family_member_1_head-512.png",revision:"0291224d484b87fa0b93674e473cddfa"},{url:"content/images/jhipster_family_member_2.svg",revision:"3f686fdec6c7c6c5501692551423bc09"},{url:"content/images/jhipster_family_member_2_head-192.png",revision:"b3330cf4076ff98b249530549e049707"},{url:"content/images/jhipster_family_member_2_head-256.png",revision:"3c92527eb3ec871a1993a0cbbf8f1763"},{url:"content/images/jhipster_family_member_2_head-384.png",revision:"1b9e2f7f7146b2fbc1983e7a94b96aed"},{url:"content/images/jhipster_family_member_2_head-512.png",revision:"39e77e5e5da08bd38905df2761484142"},{url:"content/images/jhipster_family_member_3.svg",revision:"caf1c2b432b5b77c5607b636395ab471"},{url:"content/images/jhipster_family_member_3_head-192.png",revision:"3f02b39f50ef2a820e785a50a1e4773a"},{url:"content/images/jhipster_family_member_3_head-256.png",revision:"d6aaae27ac6c47336527c141d9228fc5"},{url:"content/images/jhipster_family_member_3_head-384.png",revision:"4890ce3f0f0510877ea12167f02e22c0"},{url:"content/images/jhipster_family_member_3_head-512.png",revision:"b93fc84c0e69ba5ae3f12fec0d776b7d"},{url:"content/images/logo-jhipster.png",revision:"d142ebaafc4ffd43a15e11ded561c251"},{url:"content/main.a6c593c761b3edf20cda.css",revision:"df1c67c30c1b3f7d9e8fc68ed72f6669"},{url:"content/vendors.a6c593c761b3edf20cda.css",revision:"cb178bcf6eeaaf417e36196a7aee3867"},{url:"favicon.ico",revision:"b81cc142be6bd7ee3a401d2a4b73e230"},{url:"index.html",revision:"7e5c5dd8f7dc670cf918216d5771b3c5"},{url:"manifest.webapp",revision:"de00c28bddaa9803010097a5e00ce86c"},{url:"robots.txt",revision:"d4a5d598e8510d03a187a3a2b8bda2e0"}],{})}));
