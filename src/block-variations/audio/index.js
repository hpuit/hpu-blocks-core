import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editAudio } from './edit';

export default function HPUAudio() {
    const withCustomEditAudio = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/audio') {
                return editAudio(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-audio',
        withCustomEditAudio
    );
}