import StyleSelector from "../../style-selector";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls, BlockStyles } from "@wordpress/block-editor";
import { HorizontalRule, Panel, } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default class HPUBlocksSeparatorEdit extends Component {
	componentDidMount() {
		// Get the separator element
		const separatorElement = document.querySelector('.hpu-blocks-separator .wp-block-separator__wrapper');

		// Check if the element exists before calling getBoundingClientRect
		if (separatorElement !== null) {
			const rect = separatorElement.getBoundingClientRect();
			console.log(rect);
		}
	}

	/* Uses BlockStyles to display the block styles variants but there's no 
	documentation on how to implement the component in the editor. */

	render() {
		return (
			<Fragment>
				<InspectorControls>
					<BlockStyles
						label={__('Separator Style', 'hpu-blocks')}
						clientId={this.props.clientId}
						onSwitch={(newStyle) => this.props.setAttributes({ style: newStyle })}
					/>
					<Panel title={__('Separator Settings', 'hpu-blocks')}>
						<StyleSelector
							label={__('Separator Style', 'hpu-blocks')}
							value={this.props.attributes.styleClass}
							onChange={(styleClass) => this.props.setAttributes({ styleClass })}
						/>
					</Panel>
				</InspectorControls>
				<HorizontalRule
					className={[this.props.attributes.styleClass, this.props.attributes.styles].join(' ')}
				/>
			</Fragment>
		);
	}
}