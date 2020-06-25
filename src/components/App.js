import React from 'react'
import { Router, Route} from 'react-router-dom'


import StreamEdit from '../components/streams/StreamEdit';
import StreamShow from '../components/streams/StreamShow';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamList from '../components/streams/StreamList';
import Header from '../components/Header'
import history from '../history'

 const App = ()=>{
    return (
        <div className="ui container">
        <Router history={history}>
         <div>
          <Header />  
           <Route path="/" exact component={StreamList} />
           <Route path="/streams/create" exact component={StreamCreate} />
           <Route path="/streams/edit/:id" exact component={StreamEdit} />
           <Route path="/streams/delete" exact component={StreamDelete} />
           <Route path="/streams/show" exact component={StreamShow} />
      
         </div> 
        </Router>
        </div>
    )
}

export default App;