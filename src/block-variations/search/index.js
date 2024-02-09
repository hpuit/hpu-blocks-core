import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSearch } from './edit';

export default function HPUSearch() {
    const withCustomEditSearch = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/search') {
                return editSearch(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-search',
        withCustomEditSearch
    );
}