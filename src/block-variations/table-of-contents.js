import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreTableOfContentsBlockVariations() {
    registerBlockVariation('core/table-of-contents', {
        name: 'hpu-blocks-table-of-contents',
        title: 'Table of Contents',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-table-of-contents',
            headings: {
                type: 'array',
                default: [],
            },
            onlyIncludeCurrentPage: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.headings === variationAttributes.headings,
                blockAttributes.onlyIncludeCurrentPage === variationAttributes.onlyIncludeCurrentPage,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}