import { registerBlockVariation } from '@wordpress/blocks';
import './comment-date.sass';

export default function registerCoreCommentDateBlockVariations() {
    registerBlockVariation('core/comment-date', {
        name: 'hpu-blocks-comment-date',
        title: 'Comment Date',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-date',
            format: {
                type: 'string',
                default: '',
            },
            isLink: {
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
                blockAttributes.format === variationAttributes.format,
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}