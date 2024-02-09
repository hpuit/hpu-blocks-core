export default function editParagraph(props) {
    if (props.name === 'core/paragraph') {
        return <ParagraphEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}