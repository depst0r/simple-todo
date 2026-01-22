import EmploersListItem from '../emploers-list-item/emploers-list-item';
import './emploers-list.css';
const EmploersList = () => {
    return (
        <ul className="app-list list-group">
            <EmploersListItem/>
            <EmploersListItem/>
            <EmploersListItem/>
        </ul>
    )
}

export default EmploersList;