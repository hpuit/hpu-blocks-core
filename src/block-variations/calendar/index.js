import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCalendar } from './edit';

export default function HPUCalendar() {
    const withCustomEditCalendar = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/calendar') {
                return editCalendar(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-calendar',
        withCustomEditCalendar
    );
}