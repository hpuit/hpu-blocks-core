import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editDetails } from './edit';

export default function HPUDetails() {
    const withCustomEditDetails = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/details') {
                return editDetails(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-details',
        withCustomEditDetails
    );
}