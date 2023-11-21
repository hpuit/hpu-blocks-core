import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCategoryListBlockVariations() {
    registerBlockVariation('core/category-list', {
        name: 'hpu-blocks-category-list',
        title: 'Category List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-category-list',
            displayAsDropdown: {
                type: 'boolean',
                default: false,
            },
            showPostCounts: {
                type: 'boolean',
                default: false,
            },
            showHierarchy: {
                type: 'boolean',
                default: false,
            },
            showImages: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showCount: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            typography: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.displayAsDropdown === variationAttributes.displayAsDropdown,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.showPostCounts === variationAttributes.showPostCounts,
                blockAttributes.showHierarchy === variationAttributes.showHierarchy,
                blockAttributes.showImages === variationAttributes.showImages,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showCount === variationAttributes.showCount,
                blockAttributes.className === variationAttributes.className,
            ];
        },
        scope: ['block', 'inserter'],
    });
}