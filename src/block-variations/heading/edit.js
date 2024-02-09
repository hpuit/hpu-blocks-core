export default function editHeading(props) {
    if (props.name === 'core/heading') {
        return <HeadingEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}