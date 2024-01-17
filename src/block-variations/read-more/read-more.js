import { registerBlockVariation } from '@wordpress/blocks';
import './read-more.sass';

export default function registerCoreReadMoreBlockVariations() {
    registerBlockVariation('core/read-more', {
        name: 'hpu-blocks-read-more',
        title: 'Read More',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-read-more',
            content: {
                type: 'string',
                default: '',
            },
            linkTarget: {
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
                blockAttributes.content === variationAttributes.content,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}