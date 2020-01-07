import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Videos from '../videos/video'

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => <Videos/> } />
        <Route exact path="/about" component={() => <Videos/> } />
        <Route exact path="/Pages" component={() => <Videos/> } />
        <Route exact path="/faq" component={() => "FAQ" } />
        <Route exact path="/contact" component={() =><Videos/> } />
        <Route exact path="/Home-1" component={() => <Videos/>} />
        <Route exact path="/Home-2" component={() =><Videos/> } />
        <Route exact path="/Home-3" component={() => <Videos/> } />
        <Route exact path="/Page-1" component={() =><Videos/> } />
        <Route exact path="/Page-2" component={() =><Videos/> } />
        <Route exact path="/page-1" component={() =><Videos/> } />
        <Route exact path="/page-2" component={() =><Videos/> } />
        <Route exact path="/page-3" component={() =><Videos/> } />
        <Route exact path="/page-4" component={() => <Videos/> } />                
      </Switch>
    </Container>
)
