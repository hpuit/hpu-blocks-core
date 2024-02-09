export default function editCover(props) {
    if (props.name === 'core/cover') {
        return <CoverEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}