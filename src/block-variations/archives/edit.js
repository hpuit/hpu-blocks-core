function editArchive(_props) {
    const editArchive = (props) => {
        const {
            attributes: {
                className, displayAsDropdown, showLabel, showPostCounts, type,
            }, setAttributes,
        } = props;

        return (
            <div className={className}>
                <div className="hpu-blocks-archives">
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
                        className="hpu-blocks-archives__dropdown"
                        value={type}
                        onChange={(event) => setAttributes({ type: event.target.value })}
                    >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                    {showLabel && (
                        <label className="hpu-blocks-archives__label">
                            {type === "monthly" && "Monthly Archives"}
                            {type === "yearly" && "Yearly Archives"}
                            {type === "daily" && "Daily Archives"}
                            {type === "weekly" && "Weekly Archives"}
                        </label>
                    )}
                </div>
            </div>
        );
    };
    return editArchive;
}