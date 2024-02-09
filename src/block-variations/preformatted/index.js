import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPreformatted } from './edit';

export default function HPUPreformatted() {
    const withCustomEditPreformatted = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/preformatted') {
                return editPreformatted(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-preformatted',
        withCustomEditPreformatted
    );
}