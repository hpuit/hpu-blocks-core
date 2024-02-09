export default function editAvatar(props) {
    if (props.name === 'core/avatar') {
        return <AvatarEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}