import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './navBar.css'
import './index.css'

import ActorList from './components/list';
import ActorSearch from './components/search';
import AddActor from './components/add';
import UpdateActor from './components/update';
import DeleteActor from './components/delete';
import Movie from './components/movie';

export default function App() {
  return (
	<Router>
	  <div className="App">
      <div id="navBar">
		<Link id="actorSearch" to='/'>Actor search</Link>
        <Link id="addActor" to='/add'>Add actor</Link>
        <Link id="actorUpdate" to='/update'>Update actor</Link>
        <Link id="actorDelete" to='/delete'>Delete actor</Link>
        <Link id="movie"to='/movie'>Film search</Link>
        </div>
		<Routes>
		  <Route exact path='/' element={< ActorSearch />}></Route>
          <Route path='/add' element={< AddActor />}></Route>
          <Route path='/update' element={< UpdateActor />}></Route>
          <Route path='/delete' element={< DeleteActor />}></Route>
          <Route path='/movie' element={<Movie />}></Route>
        </Routes>
        </div>
    </Router>
  
  );
}
