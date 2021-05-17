/* @preserve aap.js v0.1.0 - https://privera.io */

window.privera = async function(e) {
    function r(e, r) {
        const t = `${(e = new URL(e)).protocol}//${e.host}`;
        return r ? t : `${t}${e.pathname}`
    }
    const t = 'UA-58831210-1'

    if (!t) return console.error("privera: 'ua' is missing.");

    const n = e.querySelector("link[rel='canonical']") || {},
        o = new URLSearchParams({
            type: "page",
            title: e.title,
            url: r(n.href || e.location.href)
        });
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
}

window.privera(document)