export default function editHtml(props) {
    if (props.name === 'core/html') {
        return <HtmlEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}