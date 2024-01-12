import { registerBlockVariation } from '@wordpress/blocks';
import './styles/post-template.sass';

export default function registerCorePostTemplateBlockVariations() {
    registerBlockVariation('core/post-template', {
        name: 'hpu-blocks-post-template',
        title: 'Post Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-template',
            align: {
                type: 'string',
                default: 'none',
            },
            showAuthor: {
                type: 'boolean',
                default: false,
            },
            showComments: {
                type: 'boolean',
                default: false,
            },
            showContent: {
                type: 'boolean',
                default: false,
            },
            showDate: {
                type: 'boolean',
                default: false,
            },
            showExcerpt: {
                type: 'boolean',
                default: false,
            },
            showFeaturedImage: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showLink: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAuthor === variationAttributes.showAuthor,
                blockAttributes.showComments === variationAttributes.showComments,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showFeaturedImage === variationAttributes.showFeaturedImage,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showLink === variationAttributes.showLink,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}