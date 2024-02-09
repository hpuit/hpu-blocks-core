/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    AlignmentControl,
    BlockControls,
} from '@wordpress/block-editor';

function editPullQuote({
    attributes,
    setAttributes,
}) {
    const { textAlign } = attributes;

    return (
        <>
            <BlockControls group="block">
                <AlignmentControl
                    value={textAlign}
                    onChange={(nextAlign) => {
                        setAttributes({ textAlign: nextAlign });
                    }}
                />
            </BlockControls>
        </>
    );
}

export default editPullQuote;