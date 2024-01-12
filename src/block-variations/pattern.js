import { registerBlockVariation } from '@wordpress/blocks';
import './styles/pattern.sass';

export default function registerCorePatternBlockVariations() {
    registerBlockVariation('core/pattern', {
        name: 'hpu-blocks-pattern',
        title: 'Pattern',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-pattern',
            align: {
                type: 'string',
                default: 'none',
            },
            pattern: {
                type: 'string',
                default: '',
            },
            color: {
                type: 'string',
                default: '',
            },
            opacity: {
                type: 'number',
                default: 0,
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
                blockAttributes.pattern === variationAttributes.pattern,
                blockAttributes.color === variationAttributes.color,
                blockAttributes.opacity === variationAttributes.opacity,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}