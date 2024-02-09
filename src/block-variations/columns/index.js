import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editColumns } from './edit';

export default function HPUColumns() {
    const withCustomEditColumns = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/columns') {
                return editColumns(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-columns',
        withCustomEditColumns
    );
}