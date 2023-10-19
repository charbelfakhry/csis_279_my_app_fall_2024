
const GlobalFilter = ({filter, setFilter}) =>{
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Search</span>
            <input type="text" className="form-control" value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}

export default GlobalFilter;