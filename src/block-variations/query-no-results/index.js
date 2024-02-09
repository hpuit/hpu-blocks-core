import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryNoResults } from './edit';

export default function HPUQueryNoResults() {
    const withCustomEditQueryNoResults = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-no-results') {
                return editQueryNoResults(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-no-results',
        withCustomEditQueryNoResults
    );
}