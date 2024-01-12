import { registerBlockVariation } from '@wordpress/blocks';
import './styles/media-text.sass';
export default function registerCoreMediaTextBlockVariations() {
    registerBlockVariation('core/media-text', {
        name: 'hpu-blocks-media-text',
        title: 'Media & Text',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-media-text',
            align: {
                type: 'string',
                default: 'none',
            },
            mediaPosition: {
                type: 'string',
                default: 'left',
            },
            mediaWidth: {
                type: 'string',
                default: '50',
            },
            mediaWidthCustom: {
                type: 'number',
                default: 0,
            },
            mediaWidthUnit: {
                type: 'string',
                default: '%',
            },
            mediaUrl: {
                type: 'string',
                default: '',
            },
            mediaAlt: {
                type: 'string',
                default: '',
            },
            mediaId: {
                type: 'number',
                default: 0,
            },
            mediaType: {
                type: 'string',
                default: '',
            },
            mediaLink: {
                type: 'string',
                default: '',
            },
            mediaLinkTarget: {
                type: 'string',
                default: '',
            },
            mediaLinkRel: {
                type: 'string',
                default: '',
            },
            mediaLinkClassName: {
                type: 'string',
                default: '',
            },
            mediaLinkId: {
                type: 'string',
                default: '',
            },
            mediaLinkHref: {
                type: 'string',
                default: '',
            },
            mediaLinkTitle: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.mediaPosition === variationAttributes.mediaPosition,
                blockAttributes.mediaWidth === variationAttributes.mediaWidth,
                blockAttributes.mediaWidthCustom === variationAttributes.mediaWidthCustom,
                blockAttributes.mediaWidthUnit === variationAttributes.mediaWidthUnit,
                blockAttributes.mediaUrl === variationAttributes.mediaUrl,
                blockAttributes.mediaAlt === variationAttributes.mediaAlt,
                blockAttributes.mediaId === variationAttributes.mediaId,
                blockAttributes.mediaType === variationAttributes.mediaType,
                blockAttributes.mediaLink === variationAttributes.mediaLink,
                blockAttributes.mediaLinkTarget === variationAttributes.mediaLinkTarget,
                blockAttributes.mediaLinkRel === variationAttributes.mediaLinkRel,
                blockAttributes.mediaLinkClassName === variationAttributes.mediaLinkClassName,
                blockAttributes.mediaLinkId === variationAttributes.mediaLinkId,
                blockAttributes.mediaLinkHref === variationAttributes.mediaLinkHref,
                blockAttributes.mediaLinkTitle === variationAttributes.mediaLinkTitle,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}