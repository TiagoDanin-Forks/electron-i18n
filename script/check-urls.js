const i18n = require('..')
const locales = Object.keys(i18n.locales).filter(id => id != 'en-US')

function check (from, to, doc, lang) {
	for (var i = 0; i < from.length; i++) {
		if (from[i].body && to[i] && to[i].body) {
			//https://stackoverflow.com/a/48769624
			const urlsFrom = from[i].body.match(/http[s]*:?[\w/\-?=%.]+\.[\w/\-?=%.]+/g)|| []
			const urlsTo = to[i].body.match(/http[s]*:?[\w/\-?=%.]+\.[\w/\-?=%.]+/g) || []
			//console.log(`[+] Docs: ${doc} ${i}`)
			//console.log(urlsTo)
			for (let url of urlsFrom) {
				if (!urlsTo.includes(url)) {
					console.log(`[+] URL: ${doc} ${i} ${lang}`)
					console.log(url, urlsTo)
					console.log('\n')
				}
			}
		} else {
			console.log(`[+] Body: ${doc} ${i} ${lang}`)
			console.log(from[i].body)
			console.log('\n')
		}
	}
}

for (let locale of locales) {
	for (let doc of Object.keys(i18n.docs[locale])) {
		check(i18n.docs[locale][doc].sections, i18n.docs['en-US'][doc].sections, doc, locale)
	}
}
