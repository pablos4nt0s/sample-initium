/*! For license information please see c4f5d8e4.02a7ffae.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{9294:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7462),r=a(9960),l=a(4996),i=a(2263),c=a(4930),o=a(4184),s=a.n(o),m=a(7294),u={heroBanner:"heroBanner_qdFl",heroLogo:"heroLogo_U6bI",heroText:"heroText_ryRM",buttons:"buttons_AeoN",button:"button_JGCe",features:"features_cAfv",featuresTitle:"featuresTitle_MgoA",featureImage:"featureImage_wMIZ",homeSubtitle:"homeSubtitle_B4OL"},d=[{title:"CLI",imageUrl:"img/undraw_secure.svg",description:m.createElement("ul",null,m.createElement("li",null,"A single binary to build and deploy your code.",m.createElement("br",null),"You can forget about:",m.createElement("em",null," Dockerfile, Kubernetes manifest, CI Pipelines.")),m.createElement("li",null,"The Initium CLI will manage these for you, including setting up a nice workflow",m.createElement("br",null)," with ephemeral environments for you PRs."))},{title:"Platform",imageUrl:"img/undraw_authentication.svg",description:m.createElement("ul",null,m.createElement("li",null,"A platform with optimal configuration and test coverage to setup a modern cloud-native platform starting from single machine or a Kubernetes clusters."),m.createElement("li",null,"Observability:",m.createElement("em",null," Logs, Metrics, Traceses enabled by default thanks to Grafana, Prometheus, Loki, Open-telemetry.")),m.createElement("li",null,"Scalability and flexibility:",m.createElement("em",null," Test your code under load and enable complex behaviour like blue-green or canary deployments thanks to Knative and Istio")))}],h=function(e){return Math.sign(e)};function f(e){var t=e.imageUrl,a=e.title,n=e.description,r=(0,l.Z)(t);return m.createElement("div",{className:s()("col col--6",u.feature)},r&&m.createElement("div",{className:"text--center"},m.createElement("div",{className:"feature-image-wrapper"},m.createElement("img",{className:u.featureImage,src:r,alt:a}))),m.createElement("h3",{className:"text--center"},a),n)}function g(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return(0,m.useEffect)((function(){window.fetch("https://api.github.com/repos/nearform/initium").then((function(e){return e.json()})).then((function(e){var t=document.querySelector(".navbar__item.navbar__link[href*='github']"),a=document.createElement("span");a.innerHTML=h(e.stargazers_count),a.className="github-counter",t.appendChild(a)}))}),[]),m.createElement(c.Z,{description:t.tagline},m.createElement("div",{className:"home-wrapper"},m.createElement("header",{className:s()("hero",u.heroBanner)},m.createElement("div",{className:"container"},m.createElement("div",{className:"hero-inner"},m.createElement("img",{src:"/img/logo/logo-sm.webp",alt:"initium logo",className:u.heroLogo,height:"142",width:"128"}),m.createElement("div",{className:u.heroText},m.createElement("h1",{className:"hero__title"},t.title),m.createElement("p",{className:"hero__subtitle"},t.tagline)),m.createElement("div",{className:u.buttons},m.createElement(r.Z,{className:s()("button button--outline button--secondary button--lg rounded-pill",u.button),to:(0,l.Z)("/about")},"About"),m.createElement(r.Z,{className:s()("button button--primary button--lg rounded-pill",u.button),to:(0,l.Z)("/getting-started/introduction")},"Get Started")))),m.createElement("div",{className:"hero-wave"},m.createElement("div",{className:"hero-wave-inner"}))),m.createElement("main",{className:"home-main"},m.createElement("section",{className:"section-features "+u.features},m.createElement("div",{className:"container"},m.createElement("div",{className:"row"},m.createElement("div",{className:"col"},m.createElement("h2",{className:u.featuresTitle},m.createElement("span",null,"What is Initium?")))),m.createElement("div",{className:"row"},d.map((function(e,t){return m.createElement(f,(0,n.Z)({key:t},e))}))))),m.createElement("section",null,m.createElement("div",{className:"container"},m.createElement("div",{className:"row"},m.createElement("div",{className:"col"},m.createElement("h2",{className:"text--center",style:{fontSize:"2.5rem"}},"Getting started in minutes!"))),m.createElement("div",{className:"row"},m.createElement("div",{className:"col col--6"},m.createElement("p",{className:"text--center"},"[add content/image here]")),m.createElement("div",{className:"col col--6"},m.createElement("p",{className:"text--center"},"[add content/image here]"))),m.createElement("div",{className:"row"},m.createElement("div",{className:"col"},m.createElement("p",{className:"text--center",style:{marginTop:"2rem"}},m.createElement(r.Z,{to:"/getting-started/introduction",className:"button button--primary button--lg rounded-pill"},"Get started")))))),m.createElement("div",{className:u.homeSubtitle},m.createElement("p",null,"Initium is an open source community project.")))))}},4184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);