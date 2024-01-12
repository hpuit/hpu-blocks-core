import { registerBlockVariation } from '@wordpress/blocks';
import './styles/search.sass';

export default function registerCoreSearchBlockVariations() {
    registerBlockVariation('core/search', {
        name: 'hpu-blocks-search',
        title: 'Search',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-search',
            buttonBehavior: {
                type: 'string',
                default: 'default',
            },
            buttonPosition: {
                type: 'string',
                default: 'right',
            },
            buttonText: {
                type: 'string',
                default: '',
            },
            buttonUseIcon: {
                type: 'boolean',
                default: false,
            },
            isSearchFieldHidden: {
                type: 'boolean',
                default: false,
            },
            label: {
                type: 'string',
                default: '',
            },
            placeholder: {
                type: 'string',
                default: '',
            },
            query: {
                type: 'string',
                default: '',
            },
            showLabel: {
                type: 'boolean',
                default: false,
            },
            width: {
                type: 'number',
                default: 0,
            },
            widthUnit: {
                type: 'string',
                default: 'px',
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
                blockAttributes.buttonBehavior === variationAttributes.buttonBehavior,
                blockAttributes.buttonPosition === variationAttributes.buttonPosition,
                blockAttributes.buttonText === variationAttributes.buttonText,
                blockAttributes.buttonUseIcon === variationAttributes.buttonUseIcon,
                blockAttributes.isSearchFieldHidden === variationAttributes.isSearchFieldHidden,
                blockAttributes.label === variationAttributes.label,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.query === variationAttributes.query,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.widthUnit === variationAttributes.widthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}