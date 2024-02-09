export default function editCalendar(props) {
    if (props.name === 'core/calendar') {
        return <CalendarEdit {...props} />;
    }

    return <BlockEdit {...props} />;

}