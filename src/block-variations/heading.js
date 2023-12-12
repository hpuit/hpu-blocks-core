import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreHeadingBlockVariations() {
    registerBlockVariation('core/heading', {
        name: 'hpu-blocks-heading',
        title: 'Heading',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-heading',
            content: {
                type: 'rich-text',
                default: '',
            },
            level: {
                type: 'number',
                default: 2,
            },
            placeholder: {
                type: 'string',
                default: 'Heading',
            },
            textAlign: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            anchor: true,
            className: false,
            color: false,
            spacing: false,
            typography: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.content === variationAttributes.content,
                blockAttributes.level === variationAttributes.level,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.textAlign === variationAttributes.textAlign,
            ];
        },
        scope: ['block', 'inserter'],
    });
}