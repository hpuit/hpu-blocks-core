import './style.scss';

// Dynamically import block variations
const importBlockVariations = () => {
    // 'require.context' parameters: directory to search, include subdirectories, file pattern to match
    const context = require.context('./block-variations/', true, /index\.js$/);
    console.log(toString.context);

    // Loop through each matched file
    context.keys().forEach((key) => {
        // Import the block variation and execute its default export
        // which should be the function that adds the filter for the block
        const blockVariation = context(key);
        console.log(toString.blockVariation);
        // Execute the default export function if it exists
        if (blockVariation && blockVariation.default) {
            blockVariation.default();
        }
    });
};

// Ensure this runs after the WordPress editor is initialized
// This can be done by using the '@wordpress/dom-ready' package
import domReady from '@wordpress/dom-ready';

domReady(() => {
    console.log('Dom is ready!');
    importBlockVariations();
});
