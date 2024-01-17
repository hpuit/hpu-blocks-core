import { registerBlockVariation } from '@wordpress/blocks';
import './query.sass';

export default function registerCoreQueryBlockVariations() {
    registerBlockVariation('core/query', {
        name: 'hpu-blocks-query',
        title: 'Query',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-query',
            query: {
                type: 'string',
                default: '',
            },
            queryId: {
                type: 'string',
                default: '',
            },
            tagName: {
                type: 'string',
                default: '',
            },
            enhancedPagination: {
                type: 'boolean',
                default: false,
            },
            namespace: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.query === variationAttributes.query,
                blockAttributes.queryId === variationAttributes.queryId,
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.enhancedPagination === variationAttributes.enhancedPagination,
                blockAttributes.namespace === variationAttributes.namespace,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}