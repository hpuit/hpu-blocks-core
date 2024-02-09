import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editHeading } from './edit';

export default function HPUHeading() {
    const withCustomEditHeading = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/heading') {
                return editHeading(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-heading',
        withCustomEditHeading
    );
}