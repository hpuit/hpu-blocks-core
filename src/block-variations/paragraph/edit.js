import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
} from "@wordpress/components";
import { Component } from "@wordpress/element";
import { __experimentalHeading as Heading } from "@wordpress/components";
import "../../style.scss";

export default class HPUEditParagraph extends Component {
	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<div>
				<InspectorControls>
					<Panel
						header="HPU Blocks Paragraph Settings"
						className="hpu-blocks-emphasis-style"
					>
						<PanelBody title="Text Settings">
							<Heading>Alignment</Heading>
							<ButtonGroup>
								<Button
									isPrimary={ attributes.align === 'left' }
									onClick={ () =>
										setAttributes( { align: 'left' } )
									}
								>
									Left
								</Button>
								<Button
									isPrimary={ attributes.align === 'center'}
									onClick={ () =>
										setAttributes( { align: 'center' } )
									}
								>
									Center
								</Button>
								<Button
									isPrimary={ attributes.align === 'right' }
									onClick={ () =>
										setAttributes( { align: 'right' } )
								}
								>
									Right
								</Button>
								<Button
									isPrimary={ attributes.align === 'justify' }
									onClick={ () =>
										setAttributes( { align: 'justify' } )
									}
								>
									Justify
								</Button>
							</ButtonGroup>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<RichText
					tagName="p"
					className={ [
						attributes.styleClass,
						attributes.dropCap ? 'has-drop-cap' : '',
						attributes.align ? `align-${ attributes.align }` : '',
					].join( ' ' ) }
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
				/>
			</div>
		);
	}
}
