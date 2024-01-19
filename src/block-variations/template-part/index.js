import { registerBlockVariation } from '@wordpress/blocks';
import './template-part.sass';

export default function registerCoreTemplatePartBlockVariations() {
    registerBlockVariation('core/template-part', {
        name: 'hpu-blocks-template-part',
        title: 'Template Part',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-template-part',
            area: {
                type: 'string',
                default: '',
            },
            slug: {
                type: 'string',
                default: '',
            },
            tagName: {
                type: 'string',
                default: '',
            },
            theme: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.area === variationAttributes.area,
                blockAttributes.slug === variationAttributes.slug,
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.theme === variationAttributes.theme,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}