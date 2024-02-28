import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import StyleSelector from '../../style-selector';

export default class HPUBlockArchivesEdit extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
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
            <h1>Archives Block</h1>
        </div>;
    }
}