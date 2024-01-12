import { registerBlockVariation } from '@wordpress/blocks';
import './styles/home-link.sass';

export default function registerCoreHomeLinkBlockVariations() {
    registerBlockVariation('core/home-link', {
        name: 'hpu-blocks-home-link',
        title: 'Home Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-home-link',
            text: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'none',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            linkRel: {
                type: 'string',
                default: '',
            },
            linkClassName: {
                type: 'string',
                default: '',
            },
            linkId: {
                type: 'string',
                default: '',
            },
            linkHref: {
                type: 'string',
                default: '',
            },
            linkTitle: {
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
                blockAttributes.text === variationAttributes.text,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.linkRel === variationAttributes.linkRel,
                blockAttributes.linkClassName === variationAttributes.linkClassName,
                blockAttributes.linkId === variationAttributes.linkId,
                blockAttributes.linkHref === variationAttributes.linkHref,
                blockAttributes.linkTitle === variationAttributes.linkTitle,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}