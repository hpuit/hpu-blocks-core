import { registerBlockVariation } from '@wordpress/blocks';
import './styles/rss.sass';

export default function registerCoreRssBlockVariations() {
    registerBlockVariation('core/rss', {
        name: 'hpu-blocks-rss',
        title: 'RSS',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-rss',
            blockLayout: {
                type: 'string',
                default: 'grid',
            },
            columns: {
                type: 'number',
                default: 3,
            },
            displayAuthor: {
                type: 'boolean',
                default: false,
            },
            displayDate: {
                type: 'boolean',
                default: false,
            },
            displayExcerpt: {
                type: 'boolean',
                default: false,
            },
            excerptLength: {
                type: 'number',
                default: 55,
            },
            feedURL: {
                type: 'string',
                default: '',
            },
            itemsToShow: {
                type: 'number',
                default: 10,
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
                blockAttributes.blockLayout === variationAttributes.blockLayout,
                blockAttributes.columns === variationAttributes.columns,
                blockAttributes.displayAuthor === variationAttributes.displayAuthor,
                blockAttributes.displayDate === variationAttributes.displayDate,
                blockAttributes.displayExcerpt === variationAttributes.displayExcerpt,
                blockAttributes.excerptLength === variationAttributes.excerptLength,
                blockAttributes.feedURL === variationAttributes.feedURL,
                blockAttributes.itemsToShow === variationAttributes.itemsToShow,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}