import { useBlockProps, BlockEdit, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import StyleSelector from '../../style-selector';

export default function HPUEditParagraph(props) {
    const blockProps = useBlockProps();
    if (props.name === 'core/paragraph') {
        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title="HPU Paragraph Settings">
                        <StyleSelector {...props} />
                    </PanelBody>
                </InspectorControls>
                <BlockEdit {...props} />
            </div>
        );
    }
}