import React, { Component } from 'react'
import { NavBar, Icon, ActivityIndicator } from 'antd-mobile'
import { Link } from 'react-router-dom'
import ReactPullLoad,{ STATS } from 'react-pullload'
import LazyLoad from 'react-lazyload'
import axios from 'axios'
import '../static/css/list.css'

export default class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      booksData:[],
      showData:[],
      action: STATS.init,
      isLoadShow: 'none',
      isUpdateShow: 'none',
      hasMore: true,
      isMore:1,
		  page:1,
    }
    this.pageAll = 1;
    this.isLoad = true; // 上拉
    this.isUpdate = true; // 下拉
    this.pageNow = 0 //当前所在页码
  }
  
  componentWillMount(){
    axios.get('http://39.108.181.131:4000/books')
      .then((res)=>{
        this.setState({
          booksData:res.data.data.data.subject,
          showData: res.data.data.data.subject.slice(0,5),
        })
        this.pageAll = Math.floor((res.data.data.data.subject.length/5))
      })
  }

  handleAction = (action) => {
    /* console.info(action, this.state.action, action === this.state.action);
    //new action must do not equel to old action
    if(action === this.state.action) {
      return false
    }
  
    if(action === STATS.refreshing) { //刷新
      this.handRefreshing();
  
    } else if(action === STATS.loading) { //加载更多
      this.handLoadMore();
    } else {
      //DO NOT modify below code
      this.setState({
        action: action
      })
    } */

    if(action === STATS.loading && this.pageNow === this.pageAll){
      console.log('...')
      this.setState({
        isLoadShow: 'block'
      })
      setTimeout(()=>{
        this.setState({
          isLoadShow: 'none'
        })
      },2000)
    }

    // 上拉加载
    if(action === STATS.loading && this.isLoad && this.pageNow < this.pageAll){
      this.setState({
        isLoadShow: 'block'
      })
      this.isLoad = false
      console.log('上拉加载')
      this.pageNow++
      console.log(this.pageNow)
      setTimeout(()=>{
        this.setState({
          showData: [...this.state.showData,...this.state.booksData.slice(this.pageNow*5,(this.pageNow+1)*5)],
          isLoadShow: 'none'
        })
        this.isLoad = true;
      },2000)
    }

    // 下拉刷新
    if(action === STATS.refreshing && this.isUpdate){
      this.isUpdate = false
      this.setState({
        isUpdateShow: 'block'
      })
      setTimeout(()=>{
        console.log('下拉更新')
        this.isUpdate = true
        this.setState({
          isUpdateShow: 'none'
        })
      },2000)
    }
  }

  //刷新
  // handRefreshing = () => {
  //   if(STATS.refreshing === this.state.action) {
  //     return false
  //   }
  //   setTimeout(() => {
  //     //refreshing complete
  //     this.setState({
  //       hasMore: true,
  //       action: STATS.refreshed
  //     });
  //   }, 2000)
  //   this.setState({
  //     action: STATS.refreshing
  //   })
    
  // }

  // //加载更多
  // handLoadMore = () => {
  //   if(STATS.loading === this.state.action) {
  //     return false
  //   }
  //   setTimeout(() => {
  //     if(this.state.isMore === 0) {
  //       this.setState({
  //         action: STATS.reset,
  //         hasMore: false
  //       });
  //     } else {
  //       var n=this.state.page;
  //         n++;
  //         /* $.ajax({
  //           type: "POST",
  //           url:httphead+"/author/goods/getList",
  //           data:{
  //             page:n,
  //             end:10,
  //             cateIds:catAllId,
  //             keyword:this.state.value
  //           },
  //           headers:{
  //             Authorization:headers_vendor
  //           },
  //           success:function(data){
              
  //             if(data.code == 100){
  //               var nData = this.state.goodList.concat(data.data.goodsList);
  //               this.setState({
  //                 goodList:nData,
  //                 action: STATS.reset,
  //                 isMore:data.data.isMore,
  //                 page:n
  //               })
  //             }else if(data.code == 500){
  //               window.location.href = "/";
  //             }else{
  //               alert(data.message);
  //             }
  //           }.bind(this)
  //         }) */
  //     }
  //   }, 500)

  //   this.setState({
  //     action: STATS.loading
  //   })
  // }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.goBack()}}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >详情列表{this.props.match.params.id}
        </NavBar>

        <div style={{position: 'fixed',top: '55px',textAlign: 'center',width: '100%',display: this.state.isUpdateShow}}>
          <div style={{display: 'inline-block'}}>
            <ActivityIndicator text={'数据更新中……'} />
          </div>
        </div>

        <ReactPullLoad
          downEnough={150}
          action={this.state.action}
          handleAction={this.handleAction}
          distanceBottom={100}
          style={{paddingBottom: '60px'}}
        >
        <ul className="items">
          {
            this.state.showData.map((book,idx)=>{
              return (
                <li className="item" key={idx}>
                  <Link to={"/detail/"+book.id}>
                    <div className="img">
                    <LazyLoad>
                      <img src={book.img} alt={book.title}/>
                    </LazyLoad>
                    </div>
                    <div className="right">
                      <h3>{book.title}</h3>
                      <h3>评分：{book.score}</h3>
                      <p>{book.abstract}</p>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        </ReactPullLoad>
        {/* 上拉加载图标 */}
        <div style={{position: 'fixed',bottom: '55px',textAlign: 'center',width: '100%',display: this.state.isLoadShow}}>
          <div style={{display: 'inline-block'}}>
            <ActivityIndicator text={this.pageNow<this.pageAll?'数据加载中……':'数据已加载完'} />
          </div>
        </div>
      </div>
    )
  }
}
