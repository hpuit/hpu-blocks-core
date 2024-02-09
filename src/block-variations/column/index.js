import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editColumn } from './edit';

export default function HPUColumn() {
    const withCustomEditColumn = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/column') {
                return editColumn(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-column',
        withCustomEditColumn
    );
}
