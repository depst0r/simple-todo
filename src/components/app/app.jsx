import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploers-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';
import './app.css';

function App(){

    const data = [
        {name: 'Johm C.' , salary: '800', increase: false},
        {name: 'Carl W.' , salary: '3000', increase: true},
        {name: 'Alex M.' , salary: '5000', increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmploersList data={data}/>
            <EmploersAddForm/>
        </div>
    )
};

export default App;