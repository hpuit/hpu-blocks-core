//import wordpress dependencies
import { registerBlockVariation } from "@wordpress/blocks";
//import styles
import "./archives.sass";
//import edit function
import "./edit.js";

export default function registerCoreArchivesBlockVariations() {
    registerBlockVariation("core/archives", {
        name: "hpu-blocks-archives",
        title: "Archives",
        category: "hpu-blocks",
        description: "Display a date archive of HPU posts.",
        textDomain: "hpu-blocks",
        isDefault: true,
        attributes: {
            providerNameSlug: {
                type: "string",
                default: "hpu-blocks",
            },
            providerName: {
                type: "string",
                default: "HPU Blocks",
            },
            providerVersion: {
                type: "string",
                default: "1.0.0",
            },
            className: {
                type: "string",
                default: "hpu-blocks-archives",
            },
            displayAsDropdown: {
                type: "boolean",
                default: false,
            },
            showLabel: {
                type: "boolean",
                default: false,
            },
            showPostCounts: {
                type: "boolean",
                default: false,
            },
            type: {
                type: "string",
                default: "monthly",
            },
        },
        supports: {
            align: ["wide", "left", "right", "center", "full"],
            html: false,
            typography: false,
            spacing: false,
        },
        edit: editArchive,
    });
}