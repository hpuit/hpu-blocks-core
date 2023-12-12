import { registerBlockVariation } from '@wordpress/blocks';

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

    // //Custom edit function
    // const editAudio = (props) => {
    //     const {
    //         attributes: {
    //             className,
    //             autoplay,
    //             caption,
    //             loop,
    //             id,
    //             src,
    //             preload,
    //         },
    //         setAttributes,
    //     } = props;

    //     return (
    //         <div className={className}>
    //             <audio
    //                 controls
    //                 autoPlay={autoplay}
    //                 loop={loop}
    //                 id={id}
    //                 src={src}
    //                 preload={preload}
    //             >
    //                 {caption}
    //             </audio>
    //         </div>
    //     );
    // };

    // //Custom save function
    // const saveAudio = (props) => {
    //     const {
    //         attributes: {
    //             className,
    //             autoplay,
    //             caption,
    //             loop,
    //             id,
    //             src,
    //             preload,
    //         },
    //     } = props;

    //     return (
    //         <div className={className}>
    //             <audio
    //                 controls
    //                 autoPlay={autoplay}
    //                 loop={loop}
    //                 id={id}
    //                 src={src}
    //                 preload={preload}
    //             >
    //                 {caption}
    //             </audio>
    //         </div>
    //     );
    // };
}
