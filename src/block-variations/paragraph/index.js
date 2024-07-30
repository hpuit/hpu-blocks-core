import { createHigherOrderComponent } from '@wordpress/compose';
import HPUEditParagraph from './edit';


export default function HPUBlocksParagraph() {
	const withCustomEditParagraph = createHigherOrderComponent( ( OriginalBlockEdit ) => {
			return ( props ) => {
				if ( props.name === 'core/paragraph' ) {
					return <HPUEditParagraph { ...props } />;
				}
				return <OriginalBlockEdit { ...props } />;
			};
		},
		'withCustomEditParagraph'
	);

	// addFilter(
	// 	'editor.BlockEdit',
	// 	'hpu-blocks/HPU-paragraph',
	// 	withCustomEditParagraph
	// );
}
