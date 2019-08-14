// var expressionAtlasHeatmap = require('expression-atlas-heatmap-highcharts');

/* eslint-ignore */

// make sure to export main, with the signature
function main(el, service, imEntity, state, config) {
	if (!state) state = {};
	if (!el || !service || !imEntity || !state || !config) {
		throw new Error('Call main with correct signature');
	}

	expressionAtlasHeatmapHighcharts.render({
		query: {
			gene: 'ENSG00000066279'
		},
		target: 'yourDiv'
	});

	// el.innerHTML = `
	// 	<div class="rootContainer">
	// 		<h1>Your Data Viz Here</h1>
	// 	</div>
	// `;
}

module.exports = { main };
