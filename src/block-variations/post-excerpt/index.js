import { registerBlockVariation } from '@wordpress/blocks';
import './post-excerpt.sass';

export default function registerCorePostExcerptBlockVariations() {
    registerBlockVariation('core/post-excerpt', {
        name: 'hpu-blocks-post-excerpt',
        title: 'Post Excerpt',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-excerpt',
            align: {
                type: 'string',
                default: 'none',
            },
            textJustification: {
                type: 'string',
                default: 'left',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.textJustification === variationAttributes.textJustification,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}