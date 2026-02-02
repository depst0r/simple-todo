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
                    {name: 'Johm C.' , salary: '800', increase: false, rise: true, id: 1,},
                    {name: 'Carl W.' , salary: '3000', increase: true, rise: false, id: 2,},
                    {name: 'Alex M.' , salary: '5000', increase: false, rise: false, id: 3,},
                ],
                term: ''
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

    onToggleProp = (id, prop )=> {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop]
                    }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = term => {
        this.state ({term})
    }

   render () {
    const {data, term} = this.state
    const employes = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, term)
     return (
        <div className="app">
            <AppInfo employes={employes} increased={increased}/>
            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter/>
            </div>
            <EmploersList 
            data={visibleData}
            onDelete={id => this.deleteItem(id)}
            onToggleProp={this.onToggleProp}
            />
            <EmploersAddForm onAdd={this.addItem} />
        </div>
    )
   }
};

export default App;