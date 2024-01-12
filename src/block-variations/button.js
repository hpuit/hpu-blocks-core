import { registerBlockVariation } from '@wordpress/blocks';
import './styles/button.sass';

export default function registerCoreButtonBlockVariations() {
registerBlockVariation('core/button', {
    name: 'hpu-blocks-button',
    title: 'Button',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-button',
        backgroundColor: {
            type: 'string',
            default: '',
        }, 
        gradient: {
            type: 'string',
            default: '',
        },
        linkTarget: {
            type: 'string',
            default: '',
        },
        placeholder: {
            type: 'string',
            default: '',
        },
        rel: {
            type: 'string',
            default: '',
        },
        tagName: {
            type: 'string',
            default: '',
        },
        text: {
            type: 'string',
            default: '',
        },
        textAlign: {
            type: 'string',
            default: '',
        },
        textColor: {
            type: 'string',
            default: '',
        },
        title: {
            type: 'string',
            default: '',
        },
        type: {
            type: 'string',
            default: '',
        },
        url: {
            type: 'string',
            default: '',
        },
        width: {
            type: 'string',
            default: '',
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
            blockAttributes.backgroundColor === variationAttributes.backgroundColor,
            blockAttributes.placeholder === variationAttributes.placeholder,
            blockAttributes.linkTarget === variationAttributes.linkTarget,
            blockAttributes.textAlign === variationAttributes.textAlign,
            blockAttributes.textColor === variationAttributes.textColor,
            blockAttributes.className === variationAttributes.className,
            blockAttributes.gradient === variationAttributes.gradient,
            blockAttributes.tagName === variationAttributes.tagName,
            blockAttributes.title === variationAttributes.title,
            blockAttributes.width === variationAttributes.width,
            blockAttributes.text === variationAttributes.text,
            blockAttributes.type === variationAttributes.type,
            blockAttributes.rel === variationAttributes.rel,
            blockAttributes.url === variationAttributes.url,
        ];
    },
    scope: ['block'],
});
}