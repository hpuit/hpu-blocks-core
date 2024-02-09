//add style selector 
// remove text color just to be safe !! USE add_theme_support( 'disable-custom-colors' ); instead

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function editFreeform(props) {
    const {
        attributes: {
            content,
        },
        setAttributes,
    } = props;

    const [contentState, setContentState] = useState(content);

    function onChangeContent(newContent) {
        setContentState(newContent);
        setAttributes({ content: newContent });
    }

    return (
        <div>
            <textarea
                value={contentState}
                onChange={(event) => onChangeContent(event.target.value)}
                placeholder={__('Write HTML…')}
                rows="10"
                style={{ width: '100%' }}
            />
        </div>
    );
}