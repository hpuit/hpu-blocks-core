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
            displayAsDropdown: {
                type: 'boolean',
                default: false,
            },
            showPostCounts: {
                type: 'boolean',
                default: false,
            },
            showLabel: {
                type: 'boolean',
                default: false,
            },
            type: {
                type: 'string',
                default: 'monthly',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            typography: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.displayAsDropdown === variationAttributes.displayAsDropdown,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.showPostCounts === variationAttributes.showPostCounts,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.type === variationAttributes.type,
            ];
        },
        scope: ['block', 'inserter'],
    });

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

    registerBlockVariation('core/avatar', {
        name: 'hpu-blocks-avatar',
        title: 'Avatar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-avatar',
            align: {
                type: 'string',
                default: 'none',
            },
            size: {
                type: 'string',
                default: 'medium',
            },
            userId: {
                type: 'number',
                default: 0,
            },
            showName: {
                type: 'boolean',
                default: true,
            },
            showRole: {
                type: 'boolean',
                default: true,
            },
            showBio: {
                type: 'boolean',
                default: true,
            },
            showWebsite: {
                type: 'boolean',
                default: true,
            },
            showPosts: {
                type: 'boolean',
                default: true,
            },
            showComments: {
                type: 'boolean',
                default: true,
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.userId === variationAttributes.userId,
                blockAttributes.showName === variationAttributes.showName,
                blockAttributes.showRole === variationAttributes.showRole,
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.showWebsite === variationAttributes.showWebsite,
                blockAttributes.showPosts === variationAttributes.showPosts,
                blockAttributes.showComments === variationAttributes.showComments,
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/block', {
        name: 'hpu-blocks-block',
        title: 'Classic WYSIWYG Editor',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-block',
            ref: {
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
                blockAttributes.ref === variationAttributes.ref,
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/button', {
        name: 'hpu-blocks-button',
        title: 'Button',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-button',
            backgroundColor: {
                type: 'string',
                default: '',
            },
            borderColor: {
                type: 'string',
                default: '',
            },
            borderRadius: {
                type: 'number',
                default: 0,
            },
            borderWidth: {
                type: 'number',
                default: 0,
            },
            textColor: {
                type: 'string',
                default: '',
            },
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.borderColor === variationAttributes.borderColor,
                blockAttributes.borderRadius === variationAttributes.borderRadius,
                blockAttributes.borderWidth === variationAttributes.borderWidth,
                blockAttributes.textColor === variationAttributes.textColor,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/buttons', {
        name: 'hpu-blocks-buttons',
        title: 'Buttons',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-buttons',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
            contentWidthUnitCustom: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.contentWidthUnitCustom === variationAttributes.contentWidthUnitCustom,
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/calendar', {
        name: 'hpu-blocks-calendar',
        title: 'Calendar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-calendar',
            backgroundColor: {
                type: 'string',
                default: '',
            },
            borderColor: {
                type: 'string',
                default: '',
            },
            borderRadius: {
                type: 'number',
                default: 0,
            },
            borderWidth: {
                type: 'number',
                default: 0,
            },
            textColor: {
                type: 'string',
                default: '',
            },
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.borderColor === variationAttributes.borderColor,
                blockAttributes.borderRadius === variationAttributes.borderRadius,
                blockAttributes.borderWidth === variationAttributes.borderWidth,
                blockAttributes.textColor === variationAttributes.textColor,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/category-list', {
        name: 'hpu-blocks-category-list',
        title: 'Category List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-category-list',
            displayAsDropdown: {
                type: 'boolean',
                default: false,
            },
            showPostCounts: {
                type: 'boolean',
                default: false,
            },
            showHierarchy: {
                type: 'boolean',
                default: false,
            },
            showImages: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showCount: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            typography: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.displayAsDropdown === variationAttributes.displayAsDropdown,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.showPostCounts === variationAttributes.showPostCounts,
                blockAttributes.showHierarchy === variationAttributes.showHierarchy,
                blockAttributes.showImages === variationAttributes.showImages,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showCount === variationAttributes.showCount,
                blockAttributes.className === variationAttributes.className,
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/code', {
        name: 'hpu-blocks-code',
        title: 'Code',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-code',
            language: {
                type: 'string',
                default: '',
            },
            code: {
                type: 'string',
                default: '',
            },
            showLineNumbers: {
                type: 'boolean',
                default: false,
            },
            showFileName: {
                type: 'boolean',
                default: false,
            },
            fileName: {
                type: 'string',
                default: '',
            },
            highlightLines: {
                type: 'string',
                default: '',
            },
            wrapLines: {
                type: 'boolean',
                default: false,
            },
            theme: {
                type: 'string',
                default: 'none',
            },
            align: {
                type: 'string',
                default: 'none',
            },
            fontSize: {
                type: 'number',
                default: 0,
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.language === variationAttributes.language,
                blockAttributes.code === variationAttributes.code,
                blockAttributes.showLineNumbers === variationAttributes.showLineNumbers,
                blockAttributes.showFileName === variationAttributes.showFileName,
                blockAttributes.fileName === variationAttributes.fileName,
                blockAttributes.highlightLines === variationAttributes.highlightLines,
                blockAttributes.wrapLines === variationAttributes.wrapLines,
                blockAttributes.theme === variationAttributes.theme,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
            ];
        },
        scope: ['block', 'inserter'],
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
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/columns', {
        name: 'hpu-blocks-columns',
        title: 'Columns',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-columns',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
            contentWidthUnitCustom: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.contentWidthUnitCustom === variationAttributes.contentWidthUnitCustom,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/comment-author-name', {
        name: 'hpu-blocks-comment-author-name',
        title: 'Comment Author Name',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-author-name',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'none',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comment-content', {
        name: 'hpu-blocks-comment-content',
        title: 'Comment Content',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-content',
            textAlign: {
                type: 'string',
                default: 'none',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comment-date', {
        name: 'hpu-blocks-comment-date',
        title: 'Comment Date',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-date',
            format: {
                type: 'string',
                default: '',
            },
            isLink: {
                type: 'boolean',
                default: false,
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
                blockAttributes.format === variationAttributes.format,
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comment-edit-link', {
        name: 'hpu-blocks-comment-edit-link',
        title: 'Comment Edit Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-edit-link',
            linkTarget: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'none',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comment-reply-link', {
        name: 'hpu-blocks-comment-reply-link',
        title: 'Comment Reply Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-reply-link',
            textAlign: {
                type: 'string',
                default: 'none',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comment-template', {
        name: 'hpu-blocks-comment-template',
        title: 'Comment Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-template',
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments', {
        name: 'hpu-blocks-comments',
        title: 'Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments',
            tagName: {
                type: 'string',
                default: '',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments-pagination', {
        name: 'hpu-blocks-comments-pagination',
        title: 'Comments Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination',
            paginationArrow: {
                type: 'string',
                default: 'default',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.paginationArrow === variationAttributes.paginationArrow,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments-pagination-next', {
        name: 'hpu-blocks-comments-pagination-next',
        title: 'Comments Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-next',
            label: {
                type: 'string',
                default: '',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments-pagination-numbers', {
        name: 'hpu-blocks-comments-pagination-numbers',
        title: 'Comments Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-numbers',
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments-pagination-previous', {
        name: 'hpu-blocks-comments-pagination-previous',
        title: 'Comments Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-previous',
            label: {
                type: 'string',
                default: '',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/comments-title', {
        name: 'hpu-blocks-comments-title',
        title: 'Comments Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-title',
            level: {
                type: 'number',
                default: 2,
            },
            textAlign: {
                type: 'string',
                default: 'none',
            },
            showPostTitle: {
                type: 'boolean',
                default: false,
            },
            showCommentsCount: {
                type: 'boolean',
                default: false,
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.level === variationAttributes.level,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.showPostTitle === variationAttributes.showPostTitle,
                blockAttributes.showCommentsCount === variationAttributes.showCommentsCount,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/cover', {
        name: 'hpu-blocks-cover',
        title: 'Cover',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-cover',
            allowedBlocks: {
                type: 'array',
            },
            backgroundColor: {
                type: 'string',
                default: '',
            },
            backgroundImage: {
                type: 'string',
                default: '',
            },
            backgroundOpacity: {
                type: 'number',
                default: 0,
            },
            dimRatio: {
                type: 'number',
                default: 0,
            },
            fixedBackground: {
                type: 'boolean',
                default: false,
            },
            minHeight: {
                type: 'number',
                default: 0,
            },
            overlayColor: {
                type: 'string',
                default: '',
            },
            overlayOpacity: {
                type: 'number',
                default: 0,
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.allowedBlocks === variationAttributes.allowedBlocks,
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.backgroundImage === variationAttributes.backgroundImage,
                blockAttributes.backgroundOpacity === variationAttributes.backgroundOpacity,
                blockAttributes.dimRatio === variationAttributes.dimRatio,
                blockAttributes.fixedBackground === variationAttributes.fixedBackground,
                blockAttributes.minHeight === variationAttributes.minHeight,
                blockAttributes.overlayColor === variationAttributes.overlayColor,
                blockAttributes.overlayOpacity === variationAttributes.overlayOpacity,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/details', {
        name: 'hpu-blocks-details',
        title: 'Details',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-details',
            align: {
                type: 'string',
                default: 'none',
            },
            summary: {
                type: 'string',
                default: '',
            },
            summaryFontSize: {
                type: 'number',
                default: 0,
            },
            summaryFontSizeUnit: {
                type: 'string',
                default: 'px',
            },
            summaryFontSizeUnitCustom: {
                type: 'string',
                default: 'px',
            },
            summaryFontFamily: {
                type: 'string',
                default: '',
            },
            summaryFontWeight: {
                type: 'string',
                default: '',
            },
            summaryTextTransform: {
                type: 'string',
                default: '',
            },
            summaryTextColor: {
                type: 'string',
                default: '',
            },
            summaryTextDecoration: {
                type: 'string',
                default: '',
            },
            summaryTextAlign: {
                type: 'string',
                default: '',
            },
            summaryLineHeight: {
                type: 'number',
                default: 0,
            },
            summaryLineHeightUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.summary === variationAttributes.summary,
                blockAttributes.summaryFontSize === variationAttributes.summaryFontSize,
                blockAttributes.summaryFontSizeUnit === variationAttributes.summaryFontSizeUnit,
                blockAttributes.summaryFontSizeUnitCustom === variationAttributes.summaryFontSizeUnitCustom,
                blockAttributes.summaryFontFamily === variationAttributes.summaryFontFamily,
                blockAttributes.summaryFontWeight === variationAttributes.summaryFontWeight,
                blockAttributes.summaryTextTransform === variationAttributes.summaryTextTransform,
                blockAttributes.summaryTextColor === variationAttributes.summaryTextColor,
                blockAttributes.summaryTextDecoration === variationAttributes.summaryTextDecoration,
                blockAttributes.summaryTextAlign === variationAttributes.summaryTextAlign,
                blockAttributes.summaryLineHeight === variationAttributes.summaryLineHeight,
                blockAttributes.summaryLineHeightUnit === variationAttributes.summaryLineHeightUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
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

    registerBlockVariation('core/footnotes', {
        name: 'hpu-blocks-footnotes',
        title: 'Footnotes',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-footnotes',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        scope: ['block'],
    });

    registerBlockVariation('core/form', {
        name: 'hpu-blocks-form',
        title: 'Form',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form',
            action: {
                type: 'string',
                default: '',
            },
            method: {
                type: 'string',
                default: '',
            },
            encType: {
                type: 'string',
                default: '',
            },
            target: {
                type: 'string',
                default: '',
            },
            submitButtonText: {
                type: 'string',
                default: '',
            },
            submitButtonBackgroundColor: {
                type: 'string',
                default: '',
            },
            submitButtonBorderColor: {
                type: 'string',
                default: '',
            },
            submitButtonBorderRadius: {
                type: 'number',
                default: 0,
            },
            submitButtonBorderWidth: {
                type: 'number',
                default: 0,
            },
            submitButtonTextColor: {
                type: 'string',
                default: '',
            },
            submitButtonUrl: {
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
                blockAttributes.action === variationAttributes.action,
                blockAttributes.method === variationAttributes.method,
                blockAttributes.encType === variationAttributes.encType,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.submitButtonText === variationAttributes.submitButtonText,
                blockAttributes.submitButtonBackgroundColor === variationAttributes.submitButtonBackgroundColor,
                blockAttributes.submitButtonBorderColor === variationAttributes.submitButtonBorderColor,
                blockAttributes.submitButtonBorderRadius === variationAttributes.submitButtonBorderRadius,
                blockAttributes.submitButtonBorderWidth === variationAttributes.submitButtonBorderWidth,
                blockAttributes.submitButtonTextColor === variationAttributes.submitButtonTextColor,
                blockAttributes.submitButtonUrl === variationAttributes.submitButtonUrl,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block', 'inserter'],
    });

    registerBlockVariation('core/form-input', {
        name: 'hpu-blocks-form-input',
        title: 'Form Input',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-input',
            name: {
                type: 'string',
                default: '',
            },
            type: {
                type: 'string',
                default: '',
            },
            placeholder: {
                type: 'string',
                default: '',
            },
            value: {
                type: 'string',
                default: '',
            },
            label: {
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
                blockAttributes.name === variationAttributes.name,
                blockAttributes.type === variationAttributes.type,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.value === variationAttributes.value,
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/form-submission-notification', {
        name: 'hpu-blocks-form-submission-notification',
        title: 'Form Submission Notification',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-submission-notification',
            message: {
                type: 'string',
                default: '',
            },
            backgroundColor: {
                type: 'string',
                default: '',
            },
            borderColor: {
                type: 'string',
                default: '',
            },
            borderRadius: {
                type: 'number',
                default: 0,
            },
            borderWidth: {
                type: 'number',
                default: 0,
            },
            textColor: {
                type: 'string',
                default: '',
            },
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.message === variationAttributes.message,
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.borderColor === variationAttributes.borderColor,
                blockAttributes.borderRadius === variationAttributes.borderRadius,
                blockAttributes.borderWidth === variationAttributes.borderWidth,
                blockAttributes.textColor === variationAttributes.textColor,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/form-submit-button', {
        name: 'hpu-blocks-form-submit-button',
        title: 'Form Submit Button',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-form-submit-button',
            backgroundColor: {
                type: 'string',
                default: '',
            },
            borderColor: {
                type: 'string',
                default: '',
            },
            borderRadius: {
                type: 'number',
                default: 0,
            },
            borderWidth: {
                type: 'number',
                default: 0,
            },
            textColor: {
                type: 'string',
                default: '',
            },
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.borderColor === variationAttributes.borderColor,
                blockAttributes.borderRadius === variationAttributes.borderRadius,
                blockAttributes.borderWidth === variationAttributes.borderWidth,
                blockAttributes.textColor === variationAttributes.textColor,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/freeform', {
        name: 'hpu-blocks-freeform',
        title: 'Freeform (WYSIWYG Editor)',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-freeform',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/gallery', {
        name: 'hpu-blocks-gallery',
        title: 'Gallery',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-gallery',
            align: {
                type: 'string',
                default: 'none',
            },
            ids: {
                type: 'array',
                default: [],
            },
            columns: {
                type: 'number',
                default: 3,
            },
            sizeSlug: {
                type: 'string',
                default: 'large',
            },
            linkTo: {
                type: 'string',
                default: 'none',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            captionFontSize: {
                type: 'number',
                default: 0,
            },
            captionFontSizeUnit: {
                type: 'string',
                default: 'px',
            },
            captionFontSizeUnitCustom: {
                type: 'string',
                default: 'px',
            },
            captionFontFamily: {
                type: 'string',
                default: '',
            },
            captionFontWeight: {
                type: 'string',
                default: '',
            },
            captionTextTransform: {
                type: 'string',
                default: '',
            },
            captionTextColor: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.ids === variationAttributes.ids,
                blockAttributes.columns === variationAttributes.columns,
                blockAttributes.sizeSlug === variationAttributes.sizeSlug,
                blockAttributes.linkTo === variationAttributes.linkTo,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.captionFontSize === variationAttributes.captionFontSize,
                blockAttributes.captionFontSizeUnit === variationAttributes.captionFontSizeUnit,
                blockAttributes.captionFontSizeUnitCustom === variationAttributes.captionFontSizeUnitCustom,
                blockAttributes.captionFontFamily === variationAttributes.captionFontFamily,
                blockAttributes.captionFontWeight === variationAttributes.captionFontWeight,
                blockAttributes.captionTextTransform === variationAttributes.captionTextTransform,
                blockAttributes.captionTextColor === variationAttributes.captionTextColor,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/group', {
        name: 'hpu-blocks-group',
        title: 'Group',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-group',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/heading', {
        name: 'hpu-blocks-heading',
        title: 'Heading',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-heading',
            align: {
                type: 'string',
                default: 'none',
            },
            level: {
                type: 'number',
                default: 2,
            },
            text: {
                type: 'string',
                default: '',
            },
            fontSize: {
                type: 'number',
                default: 0,
            },
            fontSizeUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.level === variationAttributes.level,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.fontSizeUnit === variationAttributes.fontSizeUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/home-link', {
        name: 'hpu-blocks-home-link',
        title: 'Home Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-home-link',
            text: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'none',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            linkRel: {
                type: 'string',
                default: '',
            },
            linkClassName: {
                type: 'string',
                default: '',
            },
            linkId: {
                type: 'string',
                default: '',
            },
            linkHref: {
                type: 'string',
                default: '',
            },
            linkTitle: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.linkRel === variationAttributes.linkRel,
                blockAttributes.linkClassName === variationAttributes.linkClassName,
                blockAttributes.linkId === variationAttributes.linkId,
                blockAttributes.linkHref === variationAttributes.linkHref,
                blockAttributes.linkTitle === variationAttributes.linkTitle,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/html', {
        name: 'hpu-blocks-html',
        title: 'HTML',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-html',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/image', {
        name: 'hpu-blocks-image',
        title: 'Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-image',
            align: {
                type: 'string',
                default: 'none',
            },
            url: {
                type: 'string',
                default: '',
            },
            alt: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            captionFontSize: {
                type: 'number',
                default: 0,
            },
            captionFontSizeUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.url === variationAttributes.url,
                blockAttributes.alt === variationAttributes.alt,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.captionFontSize === variationAttributes.captionFontSize,
                blockAttributes.captionFontSizeUnit === variationAttributes.captionFontSizeUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/latest-comments', {
        name: 'hpu-blocks-latest-comments',
        title: 'Latest Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-latest-comments',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            showDate: {
                type: 'boolean',
                default: false,
            },
            showExcerpt: {
                type: 'boolean',
                default: false,
            },
            showPostTitle: {
                type: 'boolean',
                default: false,
            },
            showPostLink: {
                type: 'boolean',
                default: false,
            },
            showCommentLink: {
                type: 'boolean',
                default: false,
            },
            showCommentLinkText: {
                type: 'string',
                default: '',
            },
            showCommentLinkTarget: {
                type: 'string',
                default: '',
            },
            showCommentLinkRel: {
                type: 'string',
                default: '',
            },
            showCommentLinkClassName: {
                type: 'string',
                default: '',
            },
            showCommentLinkId: {
                type: 'string',
                default: '',
            },
            showCommentLinkHref: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showPostTitle === variationAttributes.showPostTitle,
                blockAttributes.showPostLink === variationAttributes.showPostLink,
                blockAttributes.showCommentLink === variationAttributes.showCommentLink,
                blockAttributes.showCommentLinkText === variationAttributes.showCommentLinkText,
                blockAttributes.showCommentLinkTarget === variationAttributes.showCommentLinkTarget,
                blockAttributes.showCommentLinkRel === variationAttributes.showCommentLinkRel,
                blockAttributes.showCommentLinkClassName === variationAttributes.showCommentLinkClassName,
                blockAttributes.showCommentLinkId === variationAttributes.showCommentLinkId,
                blockAttributes.showCommentLinkHref === variationAttributes.showCommentLinkHref,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/latest-posts', {
        name: 'hpu-blocks-latest-posts',
        title: 'Latest Posts',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-latest-posts',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

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
            values: {
                type: 'array',
                default: [],
            },
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
                blockAttributes.ordered === variationAttributes.ordered,
                blockAttributes.values === variationAttributes.values,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/list-item', {
        name: 'hpu-blocks-list-item',
        title: 'List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-list-item',
            value: {
                type: 'string',
                default: '',
            },
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
            fontSize: {
                type: 'number',
                default: 0,
            },
            fontSizeUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.value === variationAttributes.value,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.fontSizeUnit === variationAttributes.fontSizeUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/loginout', {
        name: 'hpu-blocks-loginout',
        title: 'Login/Logout',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-loginout',
            align: {
                type: 'string',
                default: 'none',
            },
            text: {
                type: 'string',
                default: '',
            },
            showIfLoggedIn: {
                type: 'boolean',
                default: false,
            },
            showIfUserCan: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.showIfLoggedIn === variationAttributes.showIfLoggedIn,
                blockAttributes.showIfUserCan === variationAttributes.showIfUserCan,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/media-text', {
        name: 'hpu-blocks-media-text',
        title: 'Media & Text',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-media-text',
            align: {
                type: 'string',
                default: 'none',
            },
            mediaPosition: {
                type: 'string',
                default: 'left',
            },
            mediaWidth: {
                type: 'string',
                default: '50',
            },
            mediaWidthCustom: {
                type: 'number',
                default: 0,
            },
            mediaWidthUnit: {
                type: 'string',
                default: '%',
            },
            mediaUrl: {
                type: 'string',
                default: '',
            },
            mediaAlt: {
                type: 'string',
                default: '',
            },
            mediaId: {
                type: 'number',
                default: 0,
            },
            mediaType: {
                type: 'string',
                default: '',
            },
            mediaLink: {
                type: 'string',
                default: '',
            },
            mediaLinkTarget: {
                type: 'string',
                default: '',
            },
            mediaLinkRel: {
                type: 'string',
                default: '',
            },
            mediaLinkClassName: {
                type: 'string',
                default: '',
            },
            mediaLinkId: {
                type: 'string',
                default: '',
            },
            mediaLinkHref: {
                type: 'string',
                default: '',
            },
            mediaLinkTitle: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.mediaPosition === variationAttributes.mediaPosition,
                blockAttributes.mediaWidth === variationAttributes.mediaWidth,
                blockAttributes.mediaWidthCustom === variationAttributes.mediaWidthCustom,
                blockAttributes.mediaWidthUnit === variationAttributes.mediaWidthUnit,
                blockAttributes.mediaUrl === variationAttributes.mediaUrl,
                blockAttributes.mediaAlt === variationAttributes.mediaAlt,
                blockAttributes.mediaId === variationAttributes.mediaId,
                blockAttributes.mediaType === variationAttributes.mediaType,
                blockAttributes.mediaLink === variationAttributes.mediaLink,
                blockAttributes.mediaLinkTarget === variationAttributes.mediaLinkTarget,
                blockAttributes.mediaLinkRel === variationAttributes.mediaLinkRel,
                blockAttributes.mediaLinkClassName === variationAttributes.mediaLinkClassName,
                blockAttributes.mediaLinkId === variationAttributes.mediaLinkId,
                blockAttributes.mediaLinkHref === variationAttributes.mediaLinkHref,
                blockAttributes.mediaLinkTitle === variationAttributes.mediaLinkTitle,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/more', {
        name: 'hpu-blocks-more',
        title: 'More',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-more',
            align: {
                type: 'string',
                default: 'none',
            },
            text: {
                type: 'string',
                default: '',
            },
            url: {
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
            size: {
                type: 'string',
                default: 'default',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/navigation', {
        name: 'hpu-blocks-navigation',
        title: 'Navigation',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/navigation-link', {
        name: 'hpu-blocks-navigation-link',
        title: 'Navigation Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation-link',
            text: {
                type: 'string',
                default: '',
            },
            url: {
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/navigation-submenu', {
        name: 'hpu-blocks-navigation-submenu',
        title: 'Navigation Submenu',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation-submenu',
            text: {
                type: 'string',
                default: '',
            },
            url: {
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/nextpage', {
        name: 'hpu-blocks-nextpage',
        title: 'Next Page',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-nextpage',
            align: {
                type: 'string',
                default: 'none',
            },
            text: {
                type: 'string',
                default: '',
            },
            url: {
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
            size: {
                type: 'string',
                default: 'default',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/page-list', {
        name: 'hpu-blocks-page-list',
        title: 'Page List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-page-list',
            align: {
                type: 'string',
                default: 'none',
            },
            showDate: {
                type: 'boolean',
                default: false,
            },
            showExcerpt: {
                type: 'boolean',
                default: false,
            },
            showFeaturedImage: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showContent: {
                type: 'boolean',
                default: false,
            },
            showAuthor: {
                type: 'boolean',
                default: false,
            },
            showComments: {
                type: 'boolean',
                default: false,
            },
            showLink: {
                type: 'boolean',
                default: false,
            },
            showLinkText: {
                type: 'string',
                default: '',
            },
            showLinkTarget: {
                type: 'string',
                default: '',
            },
            showLinkRel: {
                type: 'string',
                default: '',
            },
            showLinkClassName: {
                type: 'string',
                default: '',
            },
            showLinkId: {
                type: 'string',
                default: '',
            },
            showLinkHref: {
                type: 'string',
                default: '',
            },
            showLinkTitle: {
                type: 'string',
                default: '',
            },
            showPagination: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showFeaturedImage === variationAttributes.showFeaturedImage,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.showAuthor === variationAttributes.showAuthor,
                blockAttributes.showComments === variationAttributes.showComments,
                blockAttributes.showLink === variationAttributes.showLink,
                blockAttributes.showLinkText === variationAttributes.showLinkText,
                blockAttributes.showLinkTarget === variationAttributes.showLinkTarget,
                blockAttributes.showLinkRel === variationAttributes.showLinkRel,
                blockAttributes.showLinkClassName === variationAttributes.showLinkClassName,
                blockAttributes.showLinkId === variationAttributes.showLinkId,
                blockAttributes.showLinkHref === variationAttributes.showLinkHref,
                blockAttributes.showLinkTitle === variationAttributes.showLinkTitle,
                blockAttributes.showPagination === variationAttributes.showPagination,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/page-list-item', {
        name: 'hpu-blocks-page-list-item',
        title: 'Page List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-page-list-item',
            align: {
                type: 'string',
                default: 'none',
            },
            showDate: {
                type: 'boolean',
                default: false,
            },
            showExcerpt: {
                type: 'boolean',
                default: false,
            },
            showFeaturedImage: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showContent: {
                type: 'boolean',
                default: false,
            },
            showAuthor: {
                type: 'boolean',
                default: false,
            },
            showComments: {
                type: 'boolean',
                default: false,
            },
            showLink: {
                type: 'boolean',
                default: false,
            },
            showLinkText: {
                type: 'string',
                default: '',
            },
            showLinkTarget: {
                type: 'string',
                default: '',
            },
            showLinkRel: {
                type: 'string',
                default: '',
            },
            showLinkClassName: {
                type: 'string',
                default: '',
            },
            showLinkId: {
                type: 'string',
                default: '',
            },
            showLinkHref: {
                type: 'string',
                default: '',
            },
            showLinkTitle: {
                type: 'string',
                default: '',
            },
            showPagination: {
                type: 'boolean',
                default: false,
            },
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
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showFeaturedImage === variationAttributes.showFeaturedImage,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.showAuthor === variationAttributes.showAuthor,
                blockAttributes.showComments === variationAttributes.showComments,
                blockAttributes.showLink === variationAttributes.showLink,
                blockAttributes.showLinkText === variationAttributes.showLinkText,
                blockAttributes.showLinkTarget === variationAttributes.showLinkTarget,
                blockAttributes.showLinkRel === variationAttributes.showLinkRel,
                blockAttributes.showLinkClassName === variationAttributes.showLinkClassName,
                blockAttributes.showLinkId === variationAttributes.showLinkId,
                blockAttributes.showLinkHref === variationAttributes.showLinkHref,
                blockAttributes.showLinkTitle === variationAttributes.showLinkTitle,
                blockAttributes.showPagination === variationAttributes.showPagination,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
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
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/pattern', {
        name: 'hpu-blocks-pattern',
        title: 'Pattern',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-pattern',
            align: {
                type: 'string',
                default: 'none',
            },
            pattern: {
                type: 'string',
                default: '',
            },
            color: {
                type: 'string',
                default: '',
            },
            opacity: {
                type: 'number',
                default: 0,
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
                blockAttributes.pattern === variationAttributes.pattern,
                blockAttributes.color === variationAttributes.color,
                blockAttributes.opacity === variationAttributes.opacity,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-author', {
        name: 'hpu-blocks-post-author',
        title: 'Post Author',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showBio: {
                type: 'boolean',
                default: false,
            },
            textAlign: {
                type: 'string',
                default: 'left',
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-author-biography', {
        name: 'hpu-blocks-post-author-biography',
        title: 'Post Author Biography',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author-biography',
            align: {
                type: 'string',
                default: 'none',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showBio: {
                type: 'boolean',
                default: false,
            },
            textAlign: {
                type: 'string',
                default: 'left',
            },
            showName: {
                type: 'boolean',
                default: false,
            },
            showRole: {
                type: 'boolean',
                default: false,
            },
            showSocialIcons: {
                type: 'boolean',
                default: false,
            },
            showWebsite: {
                type: 'boolean',
                default: false,
            },
            showWebsiteText: {
                type: 'string',
                default: '',
            },
            showWebsiteTarget: {
                type: 'string',
                default: '',
            },
            showWebsiteRel: {
                type: 'string',
                default: '',
            },
            showWebsiteClassName: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.showName === variationAttributes.showName,
                blockAttributes.showRole === variationAttributes.showRole,
                blockAttributes.showSocialIcons === variationAttributes.showSocialIcons,
                blockAttributes.showWebsite === variationAttributes.showWebsite,
                blockAttributes.showWebsiteText === variationAttributes.showWebsiteText,
                blockAttributes.showWebsiteTarget === variationAttributes.showWebsiteTarget,
                blockAttributes.showWebsiteRel === variationAttributes.showWebsiteRel,
                blockAttributes.showWebsiteClassName === variationAttributes.showWebsiteClassName,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-author-name', {
        name: 'hpu-blocks-post-author-name',
        title: 'Post Author Name',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author-name',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-comments-count', {
        name: 'hpu-blocks-post-comments-count',
        title: 'Post Comments Count',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-comments-count',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showCount: {
                type: 'boolean',
                default: false,
            },
            showText: {
                type: 'boolean',
                default: false,
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showCount === variationAttributes.showCount,
                blockAttributes.showText === variationAttributes.showText,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-comments-form', {
        name: 'hpu-blocks-post-comments-form',
        title: 'Post Comments Form',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-comments-form',
            align: {
                type: 'string',
                default: 'none',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showLabel: {
                type: 'boolean',
                default: false,
            },
            showPlaceholder: {
                type: 'boolean',
                default: false,
            },
            showRequired: {
                type: 'boolean',
                default: false,
            },
            showDescription: {
                type: 'boolean',
                default: false,
            },
            showCommentNotes: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.showPlaceholder === variationAttributes.showPlaceholder,
                blockAttributes.showRequired === variationAttributes.showRequired,
                blockAttributes.showDescription === variationAttributes.showDescription,
                blockAttributes.showCommentNotes === variationAttributes.showCommentNotes,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-comments-link', {
        name: 'hpu-blocks-post-comments-link',
        title: 'Post Comments Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-comments-link',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showCount: {
                type: 'boolean',
                default: false,
            },
            showText: {
                type: 'boolean',
                default: false,
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showCount === variationAttributes.showCount,
                blockAttributes.showText === variationAttributes.showText,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-content', {
        name: 'hpu-blocks-post-content',
        title: 'Post Content',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-content',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-date', {
        name: 'hpu-blocks-post-date',
        title: 'Post Date',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-date',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-excerpt', {
        name: 'hpu-blocks-post-excerpt',
        title: 'Post Excerpt',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-excerpt',
            align: {
                type: 'string',
                default: 'none',
            },
            textJustification: {
                type: 'string',
                default: 'left',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.textJustification === variationAttributes.textJustification,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-featured-image', {
        name: 'hpu-blocks-post-featured-image',
        title: 'Post Featured Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-featured-image',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-navigation-link', {
        name: 'hpu-blocks-post-navigation-link',
        title: 'Post Navigation Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-navigation-link',
            text: {
                type: 'string',
                default: '',
            },
            url: {
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
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-tag', {
        name: 'hpu-blocks-post-tag',
        title: 'Post Tag',
        description: 'Post Tag with HPU styles and settings',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-tag',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-template', {
        name: 'hpu-blocks-post-template',
        title: 'Post Template',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-template',
            align: {
                type: 'string',
                default: 'none',
            },
            showAuthor: {
                type: 'boolean',
                default: false,
            },
            showComments: {
                type: 'boolean',
                default: false,
            },
            showContent: {
                type: 'boolean',
                default: false,
            },
            showDate: {
                type: 'boolean',
                default: false,
            },
            showExcerpt: {
                type: 'boolean',
                default: false,
            },
            showFeaturedImage: {
                type: 'boolean',
                default: false,
            },
            showTitle: {
                type: 'boolean',
                default: false,
            },
            showLink: {
                type: 'boolean',
                default: false,
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.showAuthor === variationAttributes.showAuthor,
                blockAttributes.showComments === variationAttributes.showComments,
                blockAttributes.showContent === variationAttributes.showContent,
                blockAttributes.showDate === variationAttributes.showDate,
                blockAttributes.showExcerpt === variationAttributes.showExcerpt,
                blockAttributes.showFeaturedImage === variationAttributes.showFeaturedImage,
                blockAttributes.showTitle === variationAttributes.showTitle,
                blockAttributes.showLink === variationAttributes.showLink,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/post-terms', {
        name: 'hpu-blocks-post-terms',
        title: 'Post Terms',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-terms',
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-time-to-read', {
        name: 'hpu-blocks-post-time-to-read',
        title: 'Post Time To Read',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-time-to-read',
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/post-title', {
        name: 'hpu-blocks-post-title',
        title: 'Post Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-title',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/preformatted', {
        name: 'hpu-blocks-preformatted',
        title: 'Preformatted',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-preformatted',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/pullquote', {
        name: 'hpu-blocks-pullquote',
        title: 'Pullquote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-pullquote',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/query', {
        name: 'hpu-blocks-query',
        title: 'Query',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-query',
            query: {
                type: 'string',
                default: '',
            },
            queryId: {
                type: 'string',
                default: '',
            },
            tagName: {
                type: 'string',
                default: '',
            },
            enhancedPagination: {
                type: 'boolean',
                default: false,
            },
            namespace: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.query === variationAttributes.query,
                blockAttributes.queryId === variationAttributes.queryId,
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.enhancedPagination === variationAttributes.enhancedPagination,
                blockAttributes.namespace === variationAttributes.namespace,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
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
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/query-pagination', {
        name: 'hpu-blocks-query-pagination',
        title: 'Query Loop Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination',
            paginationArrow: {
                type: 'string',
                default: 'default',
            },
            showLabel: {
                type: 'boolean',
                default: false,
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
                blockAttributes.paginationArrow === variationAttributes.paginationArrow,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/query-pagination-next', {
        name: 'hpu-blocks-query-pagination-next',
        title: 'Query Loop Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-next',
            label: {
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
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/query-pagination-numbers', {
        name: 'hpu-blocks-query-pagination-numbers',
        title: 'Query Loop Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-numbers',
            midSize: {
                type: 'number',
                default: 2,
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
                blockAttributes.midSize === variationAttributes.midSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/query-pagination-previous', {
        name: 'hpu-blocks-query-pagination-previous',
        title: 'Query Loop Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-previous',
            label: {
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
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/query-title', {
        name: 'hpu-blocks-query-title',
        title: 'Query Loop Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-title',
            level: {
                type: 'number',
                default: 2,
            },
            showPrefix: {
                type: 'boolean',
                default: false,
            },
            showSearchTerm: {
                type: 'boolean',
                default: false,
            },
            textAlign: {
                type: 'string',
                default: 'left',
            },
            type: {
                type: 'string',
                default: 'default',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.level === variationAttributes.level,
                blockAttributes.showPrefix === variationAttributes.showPrefix,
                blockAttributes.showSearchTerm === variationAttributes.showSearchTerm,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.type === variationAttributes.type,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });

    registerBlockVariation('core/quote', {
        name: 'hpu-blocks-quote',
        title: 'Quote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-quote',
            align: {
                type: 'string',
                default: 'none',
            },
            citation: {
                type: 'string',
                default: '',
            },
            value: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.citation === variationAttributes.citation,
                blockAttributes.value === variationAttributes.value,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/read-more', {
        name: 'hpu-blocks-read-more',
        title: 'Read More',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-read-more',
            content: {
                type: 'string',
                default: '',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.content === variationAttributes.content,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

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

    registerBlockVariation('core/search', {
        name: 'hpu-blocks-search',
        title: 'Search',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-search',
            buttonBehavior: {
                type: 'string',
                default: 'default',
            },
            buttonPosition: {
                type: 'string',
                default: 'right',
            },
            buttonText: {
                type: 'string',
                default: '',
            },
            buttonUseIcon: {
                type: 'boolean',
                default: false,
            },
            isSearchFieldHidden: {
                type: 'boolean',
                default: false,
            },
            label: {
                type: 'string',
                default: '',
            },
            placeholder: {
                type: 'string',
                default: '',
            },
            query: {
                type: 'string',
                default: '',
            },
            showLabel: {
                type: 'boolean',
                default: false,
            },
            width: {
                type: 'number',
                default: 0,
            },
            widthUnit: {
                type: 'string',
                default: 'px',
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
                blockAttributes.buttonBehavior === variationAttributes.buttonBehavior,
                blockAttributes.buttonPosition === variationAttributes.buttonPosition,
                blockAttributes.buttonText === variationAttributes.buttonText,
                blockAttributes.buttonUseIcon === variationAttributes.buttonUseIcon,
                blockAttributes.isSearchFieldHidden === variationAttributes.isSearchFieldHidden,
                blockAttributes.label === variationAttributes.label,
                blockAttributes.placeholder === variationAttributes.placeholder,
                blockAttributes.query === variationAttributes.query,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.widthUnit === variationAttributes.widthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/separator', {
        name: 'hpu-blocks-separator',
        title: 'Separator',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-separator',
            opacity: {
                type: 'number',
                default: 100,
            },
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
                blockAttributes.opacity === variationAttributes.opacity,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/shortcode', {
        name: 'hpu-blocks-shortcode',
        title: 'Shortcode',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-shortcode',
            text: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/site-logo', {
        name: 'hpu-blocks-site-logo',
        title: 'Site Logo',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-logo',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            shouldSyncIcon: {
                type: 'boolean',
                default: false,
            },
            width: {
                type: 'number',
                default: 0,
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.shouldSyncIcon === variationAttributes.shouldSyncIcon,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/site-tagline', {
        name: 'hpu-blocks-site-tagline',
        title: 'Site Tagline',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-tagline',
            textAlign: {
                type: 'string',
                default: 'left',
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
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/site-title', {
        name: 'hpu-blocks-site-title',
        title: 'Site Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-title',
            isLink: {
                type: 'boolean',
                default: false,
            },
            level: {
                type: 'number',
                default: 1,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'left',
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.level === variationAttributes.level,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
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
            height: {
                type: 'number',
                default: 100,
            },
            width: {
                type: 'number',
                default: 0,
            },
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
                blockAttributes.height === variationAttributes.height,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/table', {
        name: 'hpu-blocks-table',
        title: 'Table',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-table',
            body: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            foot: {
                type: 'string',
                default: '',
            },
            hasFixedLayout: {
                type: 'boolean',
                default: false,
            },
            head: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.body === variationAttributes.body,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.foot === variationAttributes.foot,
                blockAttributes.hasFixedLayout === variationAttributes.hasFixedLayout,
                blockAttributes.head === variationAttributes.head,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/table-of-contents', {
        name: 'hpu-blocks-table-of-contents',
        title: 'Table of Contents',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-table-of-contents',
            headings: {
                type: 'array',
                default: [],
            },
            onlyIncludeCurrentPage: {
                type: 'boolean',
                default: false,
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
                blockAttributes.headings === variationAttributes.headings,
                blockAttributes.onlyIncludeCurrentPage === variationAttributes.onlyIncludeCurrentPage,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/tag-cloud', {
        name: 'hpu-blocks-tag-cloud',
        title: 'Tag Cloud',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-tag-cloud',
            largestFontSize: {
                type: 'number',
                default: 22,
            },
            numberOfTags: {
                type: 'number',
                default: 45,
            },
            showTagCounts: {
                type: 'boolean',
                default: false,
            },
            smallestFontSize: {
                type: 'number',
                default: 8,
            },
            taxonomy: {
                type: 'string',
                default: '',
            },
        },
    });

    registerBlockVariation('core/template-part', {
        name: 'hpu-blocks-template-part',
        title: 'Template Part',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-template-part',
            area: {
                type: 'string',
                default: '',
            },
            slug: {
                type: 'string',
                default: '',
            },
            tagName: {
                type: 'string',
                default: '',
            },
            theme: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.area === variationAttributes.area,
                blockAttributes.slug === variationAttributes.slug,
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.theme === variationAttributes.theme,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/term-description', {
        name: 'hpu-blocks-term-description',
        title: 'Term Description',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-term-description',
            textAlign: {
                type: 'string',
                default: 'left',
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
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });

    registerBlockVariation('core/verse', {
        name: 'hpu-blocks-verse',
        title: 'Verse',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-verse',
            content: {
                type: 'string',
                default: '',
            },
            textAlign: {
                type: 'string',
                default: 'left',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.content === variationAttributes.content,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });

    registerBlockVariation('core/video', {
        name: 'hpu-blocks-video',
        title: 'Video',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-video',
            autoplay: {
                type: 'boolean',
                default: false,
            },
            caption: {
                type: 'string',
                default: '',
            },
            controls: {
                type: 'boolean',
                default: true,
            },
            id: {
                type: 'string',
                default: '',
            },
            loop: {
                type: 'boolean',
                default: false,
            },
            muted: {
                type: 'boolean',
                default: false,
            },
            playsInline: {
                type: 'boolean',
                default: false,
            },
            poster: {
                type: 'string',
                default: '',
            },
            preload: {
                type: 'string',
                default: 'metadata',
            },
            src: {
                type: 'string',
                default: '',
            },
            tracks: {
                type: 'array',
                default: [],
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.autoplay === variationAttributes.autoplay,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.controls === variationAttributes.controls,
                blockAttributes.id === variationAttributes.id,
                blockAttributes.loop === variationAttributes.loop,
                blockAttributes.muted === variationAttributes.muted,
                blockAttributes.playsInline === variationAttributes.playsInline,
                blockAttributes.poster === variationAttributes.poster,
                blockAttributes.preload === variationAttributes.preload,
                blockAttributes.src === variationAttributes.src,
                blockAttributes.tracks === variationAttributes.tracks,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
});
