import { registerBlockVariation } from '@wordpress/blocks';
import './styles/block.sass';

export default function registerCoreBlockBlockVariations() {
    registerBlockVariation('core/block', {
        name: 'hpu-blocks-block',
        title: 'Classic WYSIWYG Editor',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-block',
            ref: {
                type: 'string',
                default: '',
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.ref === variationAttributes.ref,
            ];
        },
        scope: ['block', 'inserter'],
    });
}