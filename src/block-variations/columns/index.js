import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as HPUEditColumns } from './edit';

export default function HPUColumns() {
    const withCustomEditColumns = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/columns') {
                return HPUEditColumns(props);
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