import { registerBlockVariation } from '@wordpress/blocks';
import './styles/query-no-results.sass';

export default function registerCoreQueryNoResultsBlockVariations() {
    registerBlockVariation('core/query-no-results', {
        name: 'hpu-blocks-query-no-results',
        title: 'Query Loop No Results',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-query-no-results',
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}