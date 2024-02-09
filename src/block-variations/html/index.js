import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editHtml } from './edit';

export default function HPUHtml() {
    const withCustomEditHtml = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/html') {
                return editHtml(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-html',
        withCustomEditHtml
    );
}