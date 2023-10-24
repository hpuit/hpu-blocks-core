// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/#registering-a-block-style
// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/#registering-a-block-variation
import './style.scss';

import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation('core/paragraph', {
    name: 'hpu-blocks-paragraph',
    title: 'HPU Paragraph',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-paragraph',
    },
});

registerBlockVariation('core/archives', {
    name: 'hpu-blocks-archives',
    title: 'HPU Archives',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-archives',
    },
});

registerBlockVariation('core/button', {
    name: 'hpu-blocks-button',
    title: 'HPU Button',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-button',
    },
});

registerBlockVariation('core/buttons', {
    name: 'hpu-blocks-buttons',
    title: 'HPU Buttons',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-buttons',
    },
});

registerBlockVariation('core/media-text', {
    name: 'hpu-blocks-media-text',
    title: 'HPU Media Text',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-media-text',
    },
});

registerBlockVariation('core/heading', {
    name: 'hpu-blocks-heading',
    title: 'HPU Heading',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-heading',
    },
});

registerBlockVariation('core/navigation-link', {
    name: 'hpu-blocks-navigation-link',
    title: 'HPU Navigation Link',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-navigation-link',
    },
});

registerBlockVariation('core/post-title', {
    name: 'hpu-blocks-post-title',
    title: 'HPU Post Title',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-post-title',
    },
});

registerBlockVariation('core/navigation-submenu', {
    name: 'hpu-blocks-navigation-submenu',
    title: 'HPU Navigation Submenu',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-navigation-submenu',
    },
});

registerBlockVariation('core/post-content', {
    name: 'hpu-blocks-post-content',
    title: 'HPU Post Content',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-post-content',
    },
});

registerBlockVariation('core/post-featured-image', {
    name: 'hpu-blocks-post-featured-image',
    title: 'HPU Post Featured Image',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-post-featured-image',
    },
});

registerBlockVariation('core/site-title', {
    name: 'hpu-blocks-site-title',
    title: 'HPU Site Title',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-site-title',
    },
});

registerBlockVariation('core/social-links', {
    name: 'hpu-blocks-social-links',
    title: 'HPU Social Links',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-social-links',
    },});

