import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCorePageListItemBlockVariations() {
    registerBlockVariation('core/page-list-item', {
        name: 'hpu-blocks-page-list-item',
        title: 'Page List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-page-list-item',
            align: {
                type: 'string',
                default: 'none',
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
            showContent: {
                type: 'boolean',
                default: false,
            },
            showAuthor: {
                type: 'boolean',
                default: false,
            },
            showComments: {
                type: 'boolean',
                default: false,
            },
            showLink: {
                type: 'boolean',
                default: false,
            },
            showLinkText: {
                type: 'string',
                default: '',
            },
            showLinkTarget: {
                type: 'string',
                default: '',
            },
            showLinkRel: {
                type: 'string',
                default: '',
            },
            showLinkClassName: {
                type: 'string',
                default: '',
            },
            showLinkId: {
                type: 'string',
                default: '',
            },
            showLinkHref: {
                type: 'string',
                default: '',
            },
            showLinkTitle: {
                type: 'string',
                default: '',
            },
            showPagination: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showFeaturedImage === variationAttributes.showFeaturedImage,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.showAuthor === variationAttributes.showAuthor,
                blockAttributes.showComments === variationAttributes.showComments,
                blockAttributes.showLink === variationAttributes.showLink,
                blockAttributes.showLinkText === variationAttributes.showLinkText,
                blockAttributes.showLinkTarget === variationAttributes.showLinkTarget,
                blockAttributes.showLinkRel === variationAttributes.showLinkRel,
                blockAttributes.showLinkClassName === variationAttributes.showLinkClassName,
                blockAttributes.showLinkId === variationAttributes.showLinkId,
                blockAttributes.showLinkHref === variationAttributes.showLinkHref,
                blockAttributes.showLinkTitle === variationAttributes.showLinkTitle,
                blockAttributes.showPagination === variationAttributes.showPagination,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}