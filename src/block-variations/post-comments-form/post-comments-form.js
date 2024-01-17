import { registerBlockVariation } from '@wordpress/blocks';
import './post-comments-form.sass';

export default function registerCorePostCommentsFormBlockVariations() {
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
}