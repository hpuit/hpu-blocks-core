import { registerBlockVariation } from '@wordpress/blocks';
import './styles/form.sass';

export default function registerCoreFormBlockVariations() {
    registerBlockVariation('core/form', {
        name: 'hpu-blocks-form',
        title: 'Form',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form',
            action: {
                type: 'string',
                default: '',
            },
            method: {
                type: 'string',
                default: '',
            },
            encType: {
                type: 'string',
                default: '',
            },
            target: {
                type: 'string',
                default: '',
            },
            submitButtonText: {
                type: 'string',
                default: '',
            },
            submitButtonBackgroundColor: {
                type: 'string',
                default: '',
            },
            submitButtonBorderColor: {
                type: 'string',
                default: '',
            },
            submitButtonBorderRadius: {
                type: 'number',
                default: 0,
            },
            submitButtonBorderWidth: {
                type: 'number',
                default: 0,
            },
            submitButtonTextColor: {
                type: 'string',
                default: '',
            },
            submitButtonUrl: {
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
                blockAttributes.action === variationAttributes.action,
                blockAttributes.method === variationAttributes.method,
                blockAttributes.encType === variationAttributes.encType,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.submitButtonText === variationAttributes.submitButtonText,
                blockAttributes.submitButtonBackgroundColor === variationAttributes.submitButtonBackgroundColor,
                blockAttributes.submitButtonBorderColor === variationAttributes.submitButtonBorderColor,
                blockAttributes.submitButtonBorderRadius === variationAttributes.submitButtonBorderRadius,
                blockAttributes.submitButtonBorderWidth === variationAttributes.submitButtonBorderWidth,
                blockAttributes.submitButtonTextColor === variationAttributes.submitButtonTextColor,
                blockAttributes.submitButtonUrl === variationAttributes.submitButtonUrl,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block', 'inserter'],
    });
}