import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCategories } from './edit';

export default function HPUCategories() {
    const withCustomEditCategories = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/categories') {
                return editCategories(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-categories',
        withCustomEditCategories
    );
}