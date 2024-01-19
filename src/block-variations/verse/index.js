import { registerBlockVariation } from '@wordpress/blocks';
import './verse.sass';

export default function registerCoreVerseBlockVariations() {
    registerBlockVariation('core/verse', {
        name: 'hpu-blocks-verse',
        title: 'Verse',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-verse',
            content: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'left',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.content === variationAttributes.content,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}