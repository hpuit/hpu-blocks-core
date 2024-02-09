import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSpacer } from './edit';

export default function HPUSpacer() {
    const withCustomEditSpacer = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/spacer') {
                return editSpacer(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-spacer',
        withCustomEditSpacer
    );
}