import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPageListItem } from './edit';

export default function HPUPageListItem() {
    const withCustomEditPageListItem = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/page-list-item') {
                return editPageListItem(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-page-list-item',
        withCustomEditPageListItem
    );
}