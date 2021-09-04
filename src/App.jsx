import React, { Component } from 'react'
import { Homes,Store } from './store/Store'
import BookCase from './bookcase/BookCase'
import Type from './type/Type'
import My from './my/My'
import List from './list/List'
import Detail from './detail/Detail'
import TabBars from './TabBars'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route } from 'react-router-dom'

console.log(new List())

export default class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <Router>
          <div>
            <Route exact path='/' component={(props) => <Homes {...props} />}></Route>
            <Route path='/bookcase' component={(props) => <BookCase {...props} />}></Route>
            <Route path='/my' component={(props) => <My {...props} />}></Route>
            <Route path='/type' component={(props) => <Type {...props} />}></Route>
            <Route path='/list/:id' component={(props) => <List {...props} />}></Route>
            <Route path='/detail/:title' component={(props) => <Detail {...props} />}></Route>
            <TabBars></TabBars>
          </div>
        </Router>
      </Provider>
    )
  }
}
