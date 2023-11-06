// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/
// https://developer.wordpress.org/block-editor/developers/block-api/block-styles/#registering-a-block-style
// https://developer.wordpress.org/block-editor/developers/block-api/block-variations/#registering-a-block-variation

import './style.scss';
import { registerBlockVariation } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import hpuBlocksSocialLinks from './socialLinks.js';
import hpuBlocksEmbeds from './embeds';

domReady(function () {
    /*
    * Override defualt core blocks with HPU variations
    */
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

    registerBlockVariation('core/audio', {
        name: 'hpu-blocks-audio',
        title: 'Audio',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-audio',
        },
    });

    registerBlockVariation('core/avatar', {
        name: 'hpu-blocks-avatar',
        title: 'Avatar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-avatar',
        },
    });

    registerBlockVariation('core/block', {
        name: 'hpu-blocks-block',
        title: 'Classic WYSIWYG Editor',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-block',
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

    registerBlockVariation('core/calendar', {
        name: 'hpu-blocks-calendar',
        title: 'Calendar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-calendar',
        },
    });

    registerBlockVariation('core/category-list', {
        name: 'hpu-blocks-category-list',
        title: 'Category List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-category-list',
        },
    });

    registerBlockVariation('core/code', {
        name: 'hpu-blocks-code',
        title: 'Code',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-code',
        },
    });

    registerBlockVariation('core/column', {
        name: 'hpu-blocks-column',
        title: 'Column',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-column',
        },
    });

    registerBlockVariation('core/columns', {
        name: 'hpu-blocks-columns',
        title: 'Columns',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-columns',
        },
    });

    registerBlockVariation('core/comment-author-name', {
        name: 'hpu-blocks-comment-author-name',
        title: 'Comment Author Name',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-author-name',
        },
    });

    registerBlockVariation('core/comment-content', {
        name: 'hpu-blocks-comment-content',
        title: 'Comment Content',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-content',
        },
    });

    registerBlockVariation('core/comment-date', {
        name: 'hpu-blocks-comment-date',
        title: 'Comment Date',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-date',
        },
    });

    registerBlockVariation('core/comment-edit-link', {
        name: 'hpu-blocks-comment-edit-link',
        title: 'Comment Edit Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-edit-link',
        },
    });

    registerBlockVariation('core/comment-reply-link', {
        name: 'hpu-blocks-comment-reply-link',
        title: 'Comment Reply Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-reply-link',
        },
    });

    registerBlockVariation('core/comment-template', {
        name: 'hpu-blocks-comment-template',
        title: 'Comment Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comment-template',
        },
    });

    registerBlockVariation('core/comments', {
        name: 'hpu-blocks-comments',
        title: 'Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments',
        },
    });

    registerBlockVariation('core/comments-pagination', {
        name: 'hpu-blocks-comments-pagination',
        title: 'Comments Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments-pagination',
        },
    });

    registerBlockVariation('core/comments-pagination-next', {
        name: 'hpu-blocks-comments-pagination-next',
        title: 'Comments Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments-pagination-next',
        },
    });

    registerBlockVariation('core/comments-pagination-numbers', {
        name: 'hpu-blocks-comments-pagination-numbers',
        title: 'Comments Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments-pagination-numbers',
        },
    });

    registerBlockVariation('core/comments-pagination-previous', {
        name: 'hpu-blocks-comments-pagination-previous',
        title: 'Comments Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments-pagination-previous',
        },
    });

    registerBlockVariation('core/comments-title', {
        name: 'hpu-blocks-comments-title',
        title: 'Comments Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-comments-title',
        },
    });

    registerBlockVariation('core/cover', {
        name: 'hpu-blocks-cover',
        title: 'Cover',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-cover',
        },
    });

    registerBlockVariation('core/details', {
        name: 'hpu-blocks-details',
        title: 'Details',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-details',
        },
    });

    // Embeds are registered in embeds.js
    hpuBlocksEmbeds();

    registerBlockVariation('core/file', {
        name: 'hpu-blocks-file',
        title: 'File',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-file',
        },
    });

    registerBlockVariation('core/footnotes', {
        name: 'hpu-blocks-footnotes',
        title: 'Footnotes',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-footnotes',
        },
    });

    registerBlockVariation('core/form', {
        name: 'hpu-blocks-form',
        title: 'Form',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-form',
        },
    });

    registerBlockVariation('core/form-input', {
        name: 'hpu-blocks-form-input',
        title: 'Form Input',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-form-input',
        },
    });

    registerBlockVariation('core/form-submission-notification', {
        name: 'hpu-blocks-form-submission-notification',
        title: 'Form Submission Notification',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-form-submission-notification',
        },
    });

    registerBlockVariation('core/form-submit-button', {
        name: 'hpu-blocks-form-submit-button',
        title: 'Form Submit Button',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-form-submit-button',
        },
    });

    registerBlockVariation('core/freeform', {
        name: 'hpu-blocks-freeform',
        title: 'Freeform (New WYSIWYG Editor)',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-freeform',
        },
    });

    registerBlockVariation('core/gallery', {
        name: 'hpu-blocks-gallery',
        title: 'Gallery',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-gallery',
        },
    });

    registerBlockVariation('core/group', {
        name: 'hpu-blocks-group',
        title: 'Group',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-group',
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

    registerBlockVariation('core/home-link', {
        name: 'hpu-blocks-home-link',
        title: 'Home Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-home-link',
        },
    });

    registerBlockVariation('core/html', {
        name: 'hpu-blocks-html',
        title: 'HTML',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-html',
        },
    });

    registerBlockVariation('core/image', {
        name: 'hpu-blocks-image',
        title: 'Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-image',
        },
    });

    registerBlockVariation('core/latest-comments', {
        name: 'hpu-blocks-latest-comments',
        title: 'Latest Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-latest-comments',
        },
    });

    registerBlockVariation('core/latest-posts', {
        name: 'hpu-blocks-latest-posts',
        title: 'Latest Posts',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-latest-posts',
        },
    });

    registerBlockVariation('core/list', {
        name: 'hpu-blocks-list',
        title: 'List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-list',
        },
    });

    registerBlockVariation('core/list-item', {
        name: 'hpu-blocks-list-item',
        title: 'List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-list-item',
        },
    });

    registerBlockVariation('core/loginout', {
        name: 'hpu-blocks-loginout',
        title: 'Login/Logout',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-loginout',
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

    registerBlockVariation('core/more', {
        name: 'hpu-blocks-more',
        title: 'More',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-more',
        },
    });

    registerBlockVariation('core/navigation', {
        name: 'hpu-blocks-navigation',
        title: 'Navigation',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation',
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

    registerBlockVariation('core/nextpage', {
        name: 'hpu-blocks-nextpage',
        title: 'Next Page',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-nextpage',
        },
    });

    registerBlockVariation('core/page-list', {
        name: 'hpu-blocks-page-list',
        title: 'Page List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-page-list',
        },
    });

    registerBlockVariation('core/page-list-item', {
        name: 'hpu-blocks-page-list-item',
        title: 'Page List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-page-list-item',
        },
    });

    registerBlockVariation('core/paragraph', {
        name: 'hpu-blocks-paragraph',
        title: 'Paragraph',
        description: 'Paragraph with HPU styles and settings',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-paragraph',
        },
    });

    registerBlockVariation('core/pattern', {
        name: 'hpu-blocks-pattern',
        title: 'Pattern',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-pattern',
        },
    });

    registerBlockVariation('core/post-author', {
        name: 'hpu-blocks-post-author',
        title: 'Post Author',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-block-post-author',
        },
    });

    registerBlockVariation('core/post-author-biography', {
        name: 'hpu-blocks-post-author-biography',
        title: 'Post Author Biography',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-author-biography',
        },
    });

    registerBlockVariation('core/post-author-name', {
        name: 'hpu-blocks-post-author-name',
        title: 'Post Author Name',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-author-name',
        },
    });

    registerBlockVariation('core/post-comments-count', {
        name: 'hpu-blocks-post-comments-count',
        title: 'Post Comments Count',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-comments-count',
        },
    });

    registerBlockVariation('core/post-comments-form', {
        name: 'hpu-blocks-post-comments-form',
        title: 'Post Comments Form',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-comments-form',
        },
    });

    registerBlockVariation('core/post-comments-link', {
        name: 'hpu-blocks-post-comments-link',
        title: 'Post Comments Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-comments-link',
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

    registerBlockVariation('core/post-date', {
        name: 'hpu-blocks-post-date',
        title: 'Post Date',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-block-post-date',
        },
    });

    registerBlockVariation('core/post-excerpt', {
        name: 'hpu-blocks-post-excerpt',
        title: 'Post Excerpt',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-excerpt',
        },
    });

    registerBlockVariation('core/post-featured-image', {
        name: 'hpu-blocks-post-featured-image',
        title: 'Post Featured Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-block-post-featured-image',
        },
    });

    registerBlockVariation('core/post-navigation-link', {
        name: 'hpu-blocks-post-navigation-link',
        title: 'Post Navigation Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-navigation-link',
        },
    });

    registerBlockVariation('core/post-template', {
        name: 'hpu-blocks-post-template',
        title: 'Post Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-template',
        },
    });

    registerBlockVariation('core/post-terms', {
        name: 'hpu-blocks-post-terms',
        title: 'Post Terms',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-block-post-terms',
        },
    });

    registerBlockVariation('core/post-time-to-read', {
        name: 'hpu-blocks-post-time-to-read',
        title: 'Post Time To Read',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-post-time-to-read',
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

    registerBlockVariation('core/preformatted', {
        name: 'hpu-blocks-preformatted',
        title: 'Preformatted',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-preformatted',
        },
    });

    registerBlockVariation('core/pullquote', {
        name: 'hpu-blocks-pullquote',
        title: 'Pullquote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-pullquote',
        },
    });

    registerBlockVariation('core/query', {
        name: 'hpu-blocks-query',
        title: 'Query',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-query',
        },
    });

    registerBlockVariation('core/query-no-results', {
        name: 'hpu-blocks-query-no-results',
        title: 'Query Loop No Results',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-query-no-results',
        },
    });

    registerBlockVariation('core/query-pagination', {
        name: 'hpu-blocks-query-pagination',
        title: 'Query Loop Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination',
        },
    });

    registerBlockVariation('core/query-pagination-next', {
        name: 'hpu-blocks-query-pagination-next',
        title: 'Query Loop Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-next',
        },
    });

    registerBlockVariation('core/query-pagination-numbers', {
        name: 'hpu-blocks-query-pagination-numbers',
        title: 'Query Loop Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-numbers',
        },
    });

    registerBlockVariation('core/query-pagination-previous', {
        name: 'hpu-blocks-query-pagination-previous',
        title: 'Query Loop Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-previous',
        },
    });

    registerBlockVariation('core/query-title', {
        name: 'hpu-blocks-query-title',
        title: 'Query Loop Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-title',
        },
    });

    registerBlockVariation('core/quote', {
        name: 'hpu-blocks-quote',
        title: 'Quote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-quote',
        },
    });

    registerBlockVariation('core/read-more', {
        name: 'hpu-blocks-read-more',
        title: 'Read More',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-read-more',
        },
    });

    registerBlockVariation('core/rss', {
        name: 'hpu-blocks-rss',
        title: 'RSS',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-rss',
        },
    });

    registerBlockVariation('core/search', {
        name: 'hpu-blocks-search',
        title: 'Search',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-search',
        },
    });

    registerBlockVariation('core/separator', {
        name: 'hpu-blocks-separator',
        title: 'Separator',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-separator',
        },
    });

    registerBlockVariation('core/shortcode', {
        name: 'hpu-blocks-shortcode',
        title: 'Shortcode',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-shortcode',
        },
    });

    registerBlockVariation('core/site-logo', {
        name: 'hpu-blocks-site-logo',
        title: 'Site Logo',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-logo',
        },
    });

    registerBlockVariation('core/site-tagline', {
        name: 'hpu-blocks-site-tagline',
        title: 'Site Tagline',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-site-tagline',
        },
    });

    registerBlockVariation('core/site-title', {
        name: 'hpu-blocks-site-title',
        title: 'Site Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-site-title',
        },
    });

    //social links are registered in socialLinks.js
    hpuBlocksSocialLinks();

    registerBlockVariation('core/spacer', {
        name: 'hpu-blocks-spacer',
        title: 'Spacer',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-spacer',
        },
    });

    registerBlockVariation('core/table', {
        name: 'hpu-blocks-table',
        title: 'Table',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-table',
        },
    });

    registerBlockVariation('core/table-of-contents', {
        name: 'hpu-blocks-table-of-contents',
        title: 'Table of Contents',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-table-of-contents',
        },
    });

    registerBlockVariation('core/tag-cloud', {
        name: 'hpu-blocks-tag-cloud',
        title: 'Tag Cloud',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-tag-cloud',
        },
    });

    registerBlockVariation('core/template-part', {
        name: 'hpu-blocks-template-part',
        title: 'Template Part',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-template-part',
        },
    });

    registerBlockVariation('core/term-description', {
        name: 'hpu-blocks-term-description',
        title: 'Term Description',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-term-description',
        },
    });

    registerBlockVariation('core/verse', {
        name: 'hpu-blocks-verse',
        title: 'Verse',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-verse',
        },
    });

    registerBlockVariation('core/video', {
        name: 'hpu-blocks-video',
        title: 'Video',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-video',
        },
    });

});
