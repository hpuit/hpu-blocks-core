import { registerBlockVariation } from '@wordpress/blocks';
import './tag-cloud.sass';

export default function registerCoreTagCloudBlockVariations() {
    registerBlockVariation('core/tag-cloud', {
        name: 'hpu-blocks-tag-cloud',
        title: 'Tag Cloud',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-tag-cloud',
            largestFontSize: {
                type: 'number',
                default: 22,
            },
            numberOfTags: {
                type: 'number',
                default: 45,
            },
            showTagCounts: {
                type: 'boolean',
                default: false,
            },
            smallestFontSize: {
                type: 'number',
                default: 8,
            },
            taxonomy: {
                type: 'string',
                default: '',
            },
        },
    });
}