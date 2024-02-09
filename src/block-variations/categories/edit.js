export default function editCategories(props) {
    if (props.name === 'core/categories') {
        return <CategoriesEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}