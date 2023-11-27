import { registerBlockVariation } from "@wordpress/blocks";

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
    });

    //Custom edit function
    const editArchive = (props) => {
        const {
            attributes: {
                className,
                displayAsDropdown,
                showLabel,
                showPostCounts,
                type,
            },
            setAttributes,
        } = props;

        return (
            <div className={className}>
                <div className="wp-block-archives">
                    <button onClick={() => setAttributes({ displayAsDropdown: !displayAsDropdown })}>
                        {displayAsDropdown ? "Display as List" : "Display as Dropdown"}
                    </button>
                    <button onClick={() => setAttributes({ showLabel: !showLabel })}>
                        {showLabel ? "Hide Label" : "Show Label"}
                    </button>
                    <button onClick={() => setAttributes({ showPostCounts: !showPostCounts })}>
                        {showPostCounts ? "Hide Post Counts" : "Show Post Counts"}
                    </button>
                    <select
                        className="wp-block-archives__dropdown"
                        value={type}
                        onChange={(event) =>
                            setAttributes({ type: event.target.value })
                        }
                    >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                    {showLabel && (
                        <label className="wp-block-archives__label">
                            {type === "monthly" && "Monthly Archives"}
                            {type === "yearly" && "Yearly Archives"}
                            {type === "daily" && "Daily Archives"}
                            {type === "weekly" && "Weekly Archives"}
                        </label>
                    )}
                </div>
            </div>
        );
    }
    return editArchive;

    //add save function if you add extra attributes to render them on the front end
}