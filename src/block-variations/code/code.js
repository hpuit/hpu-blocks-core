import { registerBlockVariation } from '@wordpress/blocks';
import './code.sass';

export default function registerCoreCodeBlockVariations() {
    registerBlockVariation('core/code', {
        name: 'hpu-blocks-code',
        title: 'Code',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-code',
            language: {
                type: 'string',
                default: '',
            },
            code: {
                type: 'string',
                default: '',
            },
            showLineNumbers: {
                type: 'boolean',
                default: false,
            },
            showFileName: {
                type: 'boolean',
                default: false,
            },
            fileName: {
                type: 'string',
                default: '',
            },
            highlightLines: {
                type: 'string',
                default: '',
            },
            wrapLines: {
                type: 'boolean',
                default: false,
            },
            theme: {
                type: 'string',
                default: 'none',
            },
            align: {
                type: 'string',
                default: 'none',
            },
            fontSize: {
                type: 'number',
                default: 0,
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
                blockAttributes.language === variationAttributes.language,
                blockAttributes.code === variationAttributes.code,
                blockAttributes.showLineNumbers === variationAttributes.showLineNumbers,
                blockAttributes.showFileName === variationAttributes.showFileName,
                blockAttributes.fileName === variationAttributes.fileName,
                blockAttributes.highlightLines === variationAttributes.highlightLines,
                blockAttributes.wrapLines === variationAttributes.wrapLines,
                blockAttributes.theme === variationAttributes.theme,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
            ];
        },
        scope: ['block', 'inserter'],
    });
}