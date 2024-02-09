export default function editLoginout(props) {
    if (props.name === 'core/loginout') {
        return <LoginoutEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}