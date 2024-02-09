import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editTagCloud } from './edit';

export default function HPUTagCloud() {
    const withCustomEditTagCloud = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/tag-cloud') {
                return editTagCloud(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-tag-cloud',
        withCustomEditTagCloud
    );
}