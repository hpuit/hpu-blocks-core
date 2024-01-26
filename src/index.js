import './style.scss';

//loop through each directory in src/block-variations and run the default function
//this will register each block variation
const req = require.context('./block-variations/', true, /index\.js$/);
req.keys().forEach((key) => {
    // console.log(key);
    req(key).default();
});

//insert the block variations into the block editor
document.addEventListener('DOMContentLoaded', () => {
    const blockVariations = document.querySelectorAll('.wp-block-variations');
    if (blockVariations.length) {
        blockVariations.forEach((blockVariation) => {
            const blockVariationName = blockVariation.dataset.blockVariationName;
            const blockVariationScope = blockVariation.dataset.blockVariationScope;
            const blockVariationCategory = blockVariation.dataset.blockVariationCategory;
            const blockVariationIsDefault = blockVariation.dataset.blockVariationIsDefault;
            const blockVariationAttributes = JSON.parse(blockVariation.dataset.blockVariationAttributes);
            const blockVariationSupports = JSON.parse(blockVariation.dataset.blockVariationSupports);
            const blockVariationIsActive = JSON.parse(blockVariation.dataset.blockVariationIsActive);

            wp.blocks.registerBlockVariation(`core/${blockVariationName}`, {
                name: blockVariationName,
                title: blockVariationName,
                category: blockVariationCategory,
                isDefault: blockVariationIsDefault,
                attributes: blockVariationAttributes,
                supports: blockVariationSupports,
                isActive: blockVariationIsActive,
                scope: blockVariationScope,
            });
        });
    }
});