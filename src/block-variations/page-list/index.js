import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPageList } from './edit';

export default function HPUPagelist() {
    const withCustomEditPageList = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/page-list') {
                return editPageList(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-page-list',
        withCustomEditPageList
    );
}