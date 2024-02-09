export default function editMore(props) {
    if (props.name === 'core/more') {
        return <MoreEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}