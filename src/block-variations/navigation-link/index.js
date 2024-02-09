import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editNavigationLink } from './edit';

export default function HPUNavigationLink() {
    const withCustomEditNavigationLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/navigation-link') {
                return editNavigationLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-navigation-link',
        withCustomEditNavigationLink
    );
}