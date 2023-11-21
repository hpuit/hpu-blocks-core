import { registerBlockVariation } from "@wordpress/blocks";

export default function registerCoreCommentAuthorNameBlockVariation() {
    registerBlockVariation("core/comment-author-name", {
        name: "hpu-blocks-comment-author-name",
        title: "Comment Author Name",
        category: "hpu-blocks",
        isDefault: true,
        attributes: {
            providerNameSlug: "hpu-blocks",
            className: "hpu-blocks-comment-author-name",
            textAlign: {
                type: "string",
                default: "none"
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [blockAttributes.textAlign === variationAttributes.textAlign, blockAttributes.providerNameSlug === variationAttributes.providerNameSlug, blockAttributes.className === variationAttributes.className];
        },
        scope: ["block"]
    });
}