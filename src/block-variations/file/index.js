import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFile } from './edit';

export default function HPUFile() {
    const withCustomEditFile = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/file') {
                return editFile(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-file',
        withCustomEditFile
    );
}
