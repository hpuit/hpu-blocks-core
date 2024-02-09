export default function editCode(props) {
    if (props.name === 'core/code') {
        return <CodeEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}