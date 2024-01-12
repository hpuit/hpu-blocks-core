import { registerBlockVariation } from '@wordpress/blocks';
import './styles/form-submit-button.sass';

export default function registerCoreFormSubmitButtonBlockVariations() {
    registerBlockVariation('core/form-submit-button', {
        name: 'hpu-blocks-form-submit-button',
        title: 'Form Submit Button',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-submit-button',
            backgroundColor: {
                type: 'string',
                default: '',
            },
            borderColor: {
                type: 'string',
                default: '',
            },
            borderRadius: {
                type: 'number',
                default: 0,
            },
            borderWidth: {
                type: 'number',
                default: 0,
            },
            textColor: {
                type: 'string',
                default: '',
            },
            url: {
                type: 'string',
                default: '',
            },
            text: {
                type: 'string',
                default: '',
            },
            target: {
                type: 'string',
                default: '',
            },
            rel: {
                type: 'string',
                default: '',
            },
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.borderColor === variationAttributes.borderColor,
                blockAttributes.borderRadius === variationAttributes.borderRadius,
                blockAttributes.borderWidth === variationAttributes.borderWidth,
                blockAttributes.textColor === variationAttributes.textColor,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}