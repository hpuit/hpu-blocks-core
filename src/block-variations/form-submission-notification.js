import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreFormSubmissionNotificationBlockVariations() {
    registerBlockVariation('core/form-submission-notification', {
        name: 'hpu-blocks-form-submission-notification',
        title: 'Form Submission Notification',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-submission-notification',
            message: {
                type: 'string',
                default: '',
            },
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
                blockAttributes.message === variationAttributes.message,
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