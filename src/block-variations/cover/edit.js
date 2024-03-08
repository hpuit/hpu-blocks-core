import { InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from "@wordpress/block-editor";
import { Component } from "@wordpress/element";
import { Panel } from "@wordpress/components";
import StyleSelector from "../../style-selector";


export default class HPUCoverEdit extends Component {

    componentDidMount() {
        // Get the cover element
        const coverElement = window.document.querySelector('.hpu-blocks-cover .wp-block-cover');

        // Check if the element exists before calling getBoundingClientRect
        if (coverElement !== null) {
            const rect = coverElement.getBoundingClientRect();
            console.log(rect);
        }
    }

    render() {
        const { attributes, setAttributes } = this.props;

        return (
            <div>
                <InspectorControls>
                    <Panel header="HPU Blocks Cover Settings" className='hpu-blocks-emphasis-style'>
                        <StyleSelector
                            value={attributes.styleClass}
                            onChange={(newValue) => setAttributes({ styleClass: newValue })}
                        />
                    </Panel>
                </InspectorControls>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(media) => setAttributes({ url: media })}
                        type="image"
                        render={({ open }) => (
                            <button onClick={open}>Open Media Library</button>
                        )}
                    />
                </MediaUploadCheck>
                <div className={[attributes.styleClass, 'hpu-block-cover']} style={{ backgroundImage: `url(${attributes.url})` }}>
                    <InnerBlocks
                        allowedBlocks={['core/paragraph', 'core/heading']}
                        template={[
                            ['core/heading', { placeholder: 'Your title here' }],
                            ['core/paragraph', { placeholder: 'Your text here' }],
                        ]}
                    />
                </div>
            </div>
        );
    }
}