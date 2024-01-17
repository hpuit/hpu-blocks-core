import { registerBlockVariation } from '@wordpress/blocks';
import './categories.sass';

export default function registerCoreCategoryListBlockVariations() {
    registerBlockVariation('core/categories', {
        name: 'hpu-blocks-categories',
        title: 'Categories',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-categories',
            displayAsDropdown: {
                type: 'boolean',
                default: false,
            }, 
            showEmpty: {
                type: 'boolean',
                default: false,
            },
            showHierarchy: {
                type: 'boolean',
                default: false,
            },
            showOnlyTopLevel: {
                type: 'boolean',
                default: false,
            },
            showPostCounts: {
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.displayAsDropdown === variationAttributes.displayAsDropdown,
                blockAttributes.showEmpty === variationAttributes.showEmpty,
                blockAttributes.showHierarchy === variationAttributes.showHierarchy,
                blockAttributes.showOnlyTopLevel === variationAttributes.showOnlyTopLevel,
                blockAttributes.showPostCounts === variationAttributes.showPostCounts,
            ];
        },
        scope: ['block', 'inserter'],
    });
}