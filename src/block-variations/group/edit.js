export default function editGroup(props) {
    if (props.name === 'core/group') {
        return <GroupEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}