export default function editPattern(props) {
    if (props.name === 'core/pattern') {
        return <PatternEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}