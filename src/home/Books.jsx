import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../static/css/books.css'
import LazyLoad from 'react-lazyload'

export default class Books extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       booksData:[]
    }
  }

  componentWillMount(){
    axios.get('http://39.108.181.131:4000/books')
      .then((res)=>{
        // console.log(res.data.data.data.subject);

        this.setState({
          booksData:res.data.data.data.subject
        },()=>{
          // console.log(this.state.booksData)
        })
        // this.booksData = res.data.data.data.subject
      })
  }
  

  render() {
    return (
      <div>
        <h2 >首页推荐</h2>
        <ul className="books">
          {
            this.state.booksData.map((book,idx)=>{
              return(
                <li className="book" key={idx}>
                  <Link to={'/detail/'+ book.id}>
                    <LazyLoad height={105}>
                      <img src={book.img} alt={book.title}/>
                    </LazyLoad>
                    <h3>{book.title}</h3>
                    <p>{book.abstract}</p>
                    {/* {console.log(Array(book.abstract)[0][0])} */}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
