import { registerBlockVariation } from '@wordpress/blocks';
import './styles/form-input.sass';

export default function registerCoreFormInputBlockVariations() {
    registerBlockVariation('core/form-input', {
        name: 'hpu-blocks-form-input',
        title: 'Form Input',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-input',
            name: {
                type: 'string',
                default: '',
            },
            type: {
                type: 'string',
                default: '',
            },
            placeholder: {
                type: 'string',
                default: '',
            },
            value: {
                type: 'string',
                default: '',
            },
            label: {
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
                blockAttributes.name === variationAttributes.name,
                blockAttributes.type === variationAttributes.type,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.value === variationAttributes.value,
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}