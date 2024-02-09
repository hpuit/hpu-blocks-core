import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editList } from './edit';

export default function HPUBlockVariationsList() {
    const withCustomEditList = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/list') {
                return editList(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-list',
        withCustomEditList
    );
}