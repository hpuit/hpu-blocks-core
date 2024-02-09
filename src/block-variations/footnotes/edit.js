export default function editFootnotes(props) {
    if (props.name === 'core/footnotes') {
        return <FootnotesEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}