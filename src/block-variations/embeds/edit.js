export default function editEmbeds(props) {
    if (props.name === 'core/embed') {
        return <EmbedEdit {...props} />;
    }

    return <BlockEdit {...props} />;

}