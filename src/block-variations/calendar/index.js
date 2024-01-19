import { registerBlockVariation } from '@wordpress/blocks';
import './calendar.sass';

export default function registerCoreCalendarBlockVariations() {
    registerBlockVariation('core/calendar', {
        name: 'hpu-blocks-calendar',
        title: 'Calendar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-calendar',
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
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
            ];
        },
        scope: ['block', 'inserter'],
    });
}