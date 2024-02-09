import {createHigherOrderComponent} from '@wordpress/compose';
import {addFilter} from '@wordpress/hooks';
import {default as editListItem} from './edit';

export default function HPULI() {
    const withCustomEditListItem = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/list-item') {
                return editListItem(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-list-item',
        withCustomEditListItem
    );
}