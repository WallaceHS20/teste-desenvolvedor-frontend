import { Routes, Route } from 'react-router-dom'

import ListPage from '../pages/List'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/list' element={<ListPage/>}/>
        </Routes>
    )
}

export default RoutesApp