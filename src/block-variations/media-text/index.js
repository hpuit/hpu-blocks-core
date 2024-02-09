import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editMediaText } from './edit';

export default function HPUMediaText() {
    const withCustomEditMediaText = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/media-text') {
                return editMediaText(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-media-text',
        withCustomEditMediaText
    );
}