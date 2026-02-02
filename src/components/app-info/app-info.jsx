import './app-info.css';
const AppInfo = ({increased, employes}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Printer-Hub </h1>
            <h2>Оьщее число сотрудников:{employes} </h2>
            <h2>Премию получат:{increased}</h2>
        </div>
    )
}

export default AppInfo;