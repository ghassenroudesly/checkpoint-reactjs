import React from 'react';
import {
  BrowserRouter as Routes,
  Switch,Link,

  Route

} from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
import Addshoes from './addshoes';
import Layout from '../components/Layout'
const Webpages = () => {
    return(
        <Routes>
            <Layout>
            <Route exact path="/" component= {Home} />
            <Route path = "/mybooks" component = {MyBooks} />
            <Route path = "/favorites" component = {Favorites} />
            <Route path = "/addshoes" component = {Addshoes} />
            </Layout>
        </Routes>
        
    );
};
export default Webpages;