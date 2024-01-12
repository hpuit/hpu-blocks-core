import { registerBlockVariation } from '@wordpress/blocks';
import './styles/file.sass';

export default function registerCoreFileBlockVariations() {
    registerBlockVariation('core/file', {
        name: 'hpu-blocks-file',
        title: 'File',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-file',
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
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        scope: ['block'],
    });
}