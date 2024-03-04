import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import StyleSelector from '../../style-selector';
import ServerSideRender from '@wordpress/server-side-render';
import { __experimentalSanitizeBlockAttributes } from '@wordpress/blocks';

export default class HPUBlockArchivesEdit extends Component {
    componentDidMount() {
        // Get the archives element
        const archivesElement = document.querySelector('.hpu-blocks-archives .wp-block-archives__wrapper');

        // Check if the element exists before calling getBoundingClientRect
        if (archivesElement !== null) {
            const rect = archivesElement.getBoundingClientRect();
            console.log(rect);
        }
    }

    render() {
        const { block, attributes, setAttributes } = this.props;
        console.log(attributes)


        return <div>
            <InspectorControls>
                <Panel header="HPU Blocks Archives Settings" className='hpu-blocks-emphasis-style'>
                    <StyleSelector
                        value={attributes.styleClass}
                        onChange={(newValue) => setAttributes({ styleClass: newValue })}
                    />
                </Panel>
            </InspectorControls>
            <ServerSideRender
                block="core/archives"
            />
        </div>;
    }
}