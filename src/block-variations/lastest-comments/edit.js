export default function editLastestComments(props) {
    if (props.name === 'core/lastest-comments') {
        return <LastestCommentsEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}