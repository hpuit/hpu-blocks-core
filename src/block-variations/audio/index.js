import { registerBlockVariation } from '@wordpress/blocks';
import "./audio.sass";

export default function registerCoreAudioBlockVariations() {
    registerBlockVariation('core/audio', {
        name: 'hpu-blocks-audio',
        title: 'Audio',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-audio',
            autoplay: {
                type: 'boolean',
                default: false,
            },
            caption: {
                type: 'string',
                source: 'html',
                default: '',
            },
            loop: {
                type: 'boolean',
                default: false,
            },
            id: {
                type: 'string',
                default: '',
            },
            src: {
                type: 'string',
                default: '',
            },
            preload: {
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.autoplay === variationAttributes.autoplay,
                blockAttributes.preload === variationAttributes.preload,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.loop === variationAttributes.loop,
                blockAttributes.src === variationAttributes.src,
                blockAttributes.id === variationAttributes.id,
            ];
        },
        scope: ['block', 'inserter'],
    });
}
