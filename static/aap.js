/* @preserve aap.js v0.1.0 - https://privera.io */

window.privera = {

      count: async function(e) {
            let url = new URL(e.location.href);

            if (url.search.toLowerCase() === '?disableprivera' ) {
                  this.disableForThisBrowser();
            } 
            else if (url.search.toLowerCase() === '?reenableprivera') {
                  this.reenableForThisBrowser();
            } 

            if (localStorage.getItem('disablePrivera')) {
                  console.log('localStorage.disablePrivera = ' + localStorage.getItem('disablePrivera') + ', skipping')
                  return;
            }

            function r(e, r) {
                  let t = `${url.protocol}//${url.host}/`;
                  return r ? t : `${t}${url.pathname}${url.search}`
            }
        
            const t = 'UA-58831210-1'
            // if (!t) return console.error("privera: 'ua' is missing.");

            const n = e.querySelector("link[rel='canonical']") || {},
            o = new URLSearchParams({
                  type: "page",
                  title: e.title,
                  url: r(n.href || e.location.href)
            });

             console.log('url', r(n.href || e.location.href))
             e.referrer && o.set("referrer", r(e.referrer), !0);
             await fetch(`https://proxy.privera.io/ua/${t}/anonymize`, {
                  method: "POST",
                  headers: {
                        "content-type": "text/plain; charset=UTF-8"
                  },
                  referrerPolicy: "no-referrer",
                  body: o.toString()
            })
            console.log(o.toString())      
      },

      disableForThisBrowser: function () {
            localStorage.setItem('disablePrivera', true)
            alert('Privera has been disabled for this browser.\n' + 
                  'localStorage.disablePrivera = ' + localStorage.getItem('disablePrivera'))
      },

      reenableForThisBrowser: function () {
            localStorage.removeItem('disablePrivera')
            alert('Privera has been reenabled for this browser.\n' + 
                  'localStorage.disablePrivera = ' + localStorage.getItem('disablePrivera'))
      }
}


window.privera.count(document)