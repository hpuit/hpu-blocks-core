import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSocialLinks } from './edit';

export default function HPUSocialLinks() {
    const withCustomEditSocialLinks = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/social-links') {
                return editSocialLinks(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-social-links',
        withCustomEditSocialLinks
    );
}