import './style.scss';
import domReady from '@wordpress/dom-ready';

//Use webpack's require.context to get all files ending with .js in the current directory and make them available to webpack.
var blockVariations = require.context('./block-variations', true, /\.js$/);
var blockVariationsArray = blockVariations.keys().map(blockVariations);

// Load all the variations
domReady(() => {
    blockVariationsArray.forEach((blockVariation) => {
        blockVariation.default();
    });
});