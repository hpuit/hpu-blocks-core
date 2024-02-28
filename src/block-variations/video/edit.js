import StyleSelector from "../../style-selector";
import { InspectorControls } from "@wordpress/block-editor";
import { Panel } from "@wordpress/components";
import { Component } from "@wordpress/element";


export default class HPUBlocksVideoEdit extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		console.log(attributes)

		return <div>
			<InspectorControls>
				<Panel header="HPU Blocks Video Settings" className='hpu-blocks-emphasis-style'>
					<StyleSelector
						value={attributes.styleClass}
						onChange={(newValue) => setAttributes({ styleClass: newValue })}
					/>
				</Panel>
			</InspectorControls>
			<video
				src={attributes.videoURL}
				controls={true}
				style={{ width: '100%' }}
			/>
		</div>;
	}
}