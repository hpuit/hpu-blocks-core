import { registerBlockVariation } from '@wordpress/blocks';
import './list.sass';

// Value attribute on the list block is deprecated since version 6.0 and will be removed in version 6.5. Please use inner blocks instead.

export default function registerCoreListBlockVariations() {
    registerBlockVariation('core/list', {
        name: 'hpu-blocks-list',
        title: 'List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-list',
            ordered: {
                type: 'boolean',
                default: false,
            }, 
            placeholder: {
                type: 'string',
                default: 'List',
            },
            reversed: {
                type: 'boolean',
                default: false,
            },
            start: {
                type: 'number',
                default: 1,
            },
            type: {
                type: 'string',
                default: '1',
            },
            values: {
                type: 'string',
                default: '',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.ordered === variationAttributes.ordered,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.reversed === variationAttributes.reversed,
                blockAttributes.start === variationAttributes.start,
                blockAttributes.type === variationAttributes.type,
                blockAttributes.values === variationAttributes.values,
            ];
        },
        scope: ['inserter'],
    });
}

//where the bullet points at? on top, move em to the side bar
//remove colors option
//reduce typography options to S, M, L
//additional unorderd list options '>'