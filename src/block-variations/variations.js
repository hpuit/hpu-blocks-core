// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/#registering-a-block-style
// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/#registering-a-block-variation

import { registerBlockVariation } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import hpu_blocks_social_links from './socialLinks.js';

domReady(function () {
    /*
    * Override defualt core blocks with HPU variations
    */

    registerBlockVariation('core/paragraph', {
        name: 'hpu-blocks-paragraph',
        title: 'Paragraph',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-paragraph',
        },
    });

    registerBlockVariation('core/archives', {
        name: 'hpu-blocks-archives',
        title: 'Archives',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-archives',
        },
    });

    registerBlockVariation('core/button', {
        name: 'hpu-blocks-button',
        title: 'Button',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-button',
        },
    });

    registerBlockVariation('core/buttons', {
        name: 'hpu-blocks-buttons',
        title: 'Buttons',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-buttons',
        },
    });

    registerBlockVariation('core/media-text', {
        name: 'hpu-blocks-media-text',
        title: 'Media & Text',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-media-text',
        },
    });

    registerBlockVariation('core/heading', {
        name: 'hpu-blocks-heading',
        title: 'Heading',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-heading',
        },
    });

    registerBlockVariation('core/navigation-link', {
        name: 'hpu-blocks-navigation-link',
        title: 'Navigation Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation-link',
        },
    });

    registerBlockVariation('core/post-title', {
        name: 'hpu-blocks-post-title',
        title: 'Post Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-title',
        },
    });

    registerBlockVariation('core/navigation-submenu', {
        name: 'hpu-blocks-navigation-submenu',
        title: 'Navigation Submenu',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation-submenu',
        },
    });

    registerBlockVariation('core/post-content', {
        name: 'hpu-blocks-post-content',
        title: 'Post Content',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-content',
        },
    });

    registerBlockVariation('core/post-featured-image', {
        name: 'hpu-blocks-post-featured-image',
        title: 'Post Featured Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-featured-image',
        },
    });

    registerBlockVariation('core/site-title', {
        name: 'hpu-blocks-site-title',
        title: 'Site Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-title',
        },
    });

    hpu_blocks_social_links();
});
