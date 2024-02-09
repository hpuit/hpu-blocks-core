import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editEmbeds } from './edit';

export default function HPUEmbeds() {
    const withCustomEditEmbeds = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/embed') {
                return editEmbeds(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-embeds',
        withCustomEditEmbeds
    );
}