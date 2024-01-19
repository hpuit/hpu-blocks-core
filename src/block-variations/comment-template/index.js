import { registerBlockVariation } from '@wordpress/blocks';
import './comment-template.sass';

export default function registerCoreCommentTemplateBlockVariations() {
    registerBlockVariation('core/comment-template', {
        name: 'hpu-blocks-comment-template',
        title: 'Comment Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-template',
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}