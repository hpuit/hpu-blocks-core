import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editTable } from './edit';

export default function HPUTable() {
    const withCustomEditTable = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/table') {
                return editTable(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-table',
        withCustomEditTable
    );
}