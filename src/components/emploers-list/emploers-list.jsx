import EmploersListItem from '../emploers-list-item/emploers-list-item';
import './emploers-list.css';
const EmploersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
        <EmploersListItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)}
        />
    )
        
        // name={item.name} salary={item.salary}
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploersList;