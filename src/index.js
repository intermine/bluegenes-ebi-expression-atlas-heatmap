// make sure to export main, with the signature
function main(el, service, imEntity, state, config) {
	if (!state) state = {};
	if (!el || !service || !imEntity || !state || !config) {
		throw new Error('Call main with correct signature');
	}

	const script1 = document.createElement('script');
	script1.src =
		'https://www.ebi.ac.uk/gxa/resources/js-bundles/vendorCommons.bundle.js';
	const script2 = document.createElement('script');
	script2.src =
		'https://www.ebi.ac.uk/gxa/resources/js-bundles/expressionAtlasHeatmapHighcharts.bundle.js';
	document.head.appendChild(script1);
	document.head.appendChild(script2);

	setTimeout(() => {
		expressionAtlasHeatmapHighcharts.render({
			query: {
				gene: 'ENSG00000066279' || imEntity.value
			},
			target: el.id
		});
	}, 1000);
}

module.exports = { main };
