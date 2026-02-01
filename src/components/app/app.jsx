import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploers-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {name: 'Johm C.' , salary: '800', increase: false, id: 1,},
                    {name: 'Carl W.' , salary: '3000', increase: true, id: 2,},
                    {name: 'Alex M.' , salary: '5000', increase: false, id: 3,},
                ]
        }
        this.maxId = 4;
    }

    deleteItem = id => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

   render () {
     return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmploersList 
            data={this.state.data}
            onDelete={id => this.deleteItem(id)}
            />
            <EmploersAddForm onAdd={this.addItem} />
        </div>
    )
   }
};

export default App;