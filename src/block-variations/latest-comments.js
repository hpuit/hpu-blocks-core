import { registerBlockVariation } from '@wordpress/blocks';
import './styles/latest-comments.sass';

export default function registerCoreLatestCommentsBlockVariations() {
    registerBlockVariation('core/latest-comments', {
        name: 'hpu-blocks-latest-comments',
        title: 'Latest Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-latest-comments',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
            showAvatar: {
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
            showPostTitle: {
                type: 'boolean',
                default: false,
            },
            showPostLink: {
                type: 'boolean',
                default: false,
            },
            showCommentLink: {
                type: 'boolean',
                default: false,
            },
            showCommentLinkText: {
                type: 'string',
                default: '',
            },
            showCommentLinkTarget: {
                type: 'string',
                default: '',
            },
            showCommentLinkRel: {
                type: 'string',
                default: '',
            },
            showCommentLinkClassName: {
                type: 'string',
                default: '',
            },
            showCommentLinkId: {
                type: 'string',
                default: '',
            },
            showCommentLinkHref: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showPostTitle === variationAttributes.showPostTitle,
                blockAttributes.showPostLink === variationAttributes.showPostLink,
                blockAttributes.showCommentLink === variationAttributes.showCommentLink,
                blockAttributes.showCommentLinkText === variationAttributes.showCommentLinkText,
                blockAttributes.showCommentLinkTarget === variationAttributes.showCommentLinkTarget,
                blockAttributes.showCommentLinkRel === variationAttributes.showCommentLinkRel,
                blockAttributes.showCommentLinkClassName === variationAttributes.showCommentLinkClassName,
                blockAttributes.showCommentLinkId === variationAttributes.showCommentLinkId,
                blockAttributes.showCommentLinkHref === variationAttributes.showCommentLinkHref,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}