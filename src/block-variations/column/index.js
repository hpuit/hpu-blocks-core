import { registerBlockVariation } from '@wordpress/blocks';
import './column.sass';

export default function registerCoreColumnBlockVariations() {
    registerBlockVariation('core/column', {
        name: 'hpu-blocks-column',
        title: 'Column',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-column',
            allowedBlocks: {
                type: 'array',
                default: [],
            }, 
            templateLock: {
                type: 'string',
                default: '',
            }, 
            verticalAlignment: {
                type: 'string',
                default: '',
            } ,
            width: {
                type: 'number',
                default: 0,
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            color: false,
            layout: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.allowedBlocks === variationAttributes.allowedBlocks,
                blockAttributes.templateLock === variationAttributes.templateLock,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.width === variationAttributes.width,
            ];
        },
        scope: ['block'],
    });
}

//add an add/remove column button on side
//lock down lock functions to supa admins
//layout section on rails (get Mary's input)
//lockdown color and dimensions to super admins
//control alt delete XXL topography
//stack on defualt by defualt and lock to super admins
//try to do stuff and ask why you can't then figure out how to do it and then do it