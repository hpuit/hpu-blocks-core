import { InspectorControls } from "@wordpress/block-editor";

export default function HPUEditFormSubmitButton(props) {
    if (props.name === 'core/form-submit-button') {
        return (
            <div>
                <InspectorControls>
                    <PanelBody title="HPU Form Submit Button Settings">
                        {/* Add your custom settings here */}
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    }

    return <BlockEdit {...props} />;
}