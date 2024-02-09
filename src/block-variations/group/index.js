import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editGroup } from './edit';

export default function HPUGroup() {
    const withCustomEditGroup = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/group') {
                return editGroup(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-group',
        withCustomEditGroup
    );
}