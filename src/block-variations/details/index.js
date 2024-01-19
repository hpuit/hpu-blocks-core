import { registerBlockVariation } from '@wordpress/blocks';
import './details.sass';

export default function registerCoreDetailsBlockVariations() {
    registerBlockVariation('core/details', {
        name: 'hpu-blocks-details',
        title: 'Details',
        category: 'hpu-blocks',
        textDomain: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-details',
            showContent: true,
            summary: '',
        },
        supports: {
            align: true,
            html: false,
            color: false,
            typography: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.summary === variationAttributes.summary,
            ];
        },
        scope: ['block', 'inserter'],
    });
}