import { createStore } from 'redux'
import { connect } from 'react-redux'
import Home from '../home/Home'

// 创建action
/* const increaseAction = ()=>{
  return  { type: 'increase' }
} */
const actions = {
  increaseAction: ()=>({type:'increase'})
}

// 创建reducer
function reducer(state={count: 0},action){
  switch(action.type){
    case 'increase': return {count: state.count + 1};
    default:
      return state;
  }
}

// Store
const Store = createStore(reducer);

// 将 store 中的数据作为 props 绑定到组件上
function mapStateToProps(state){
  return {
    count: state.count
  }
}

// 将 action 作为 props 绑定到MyComp 上
function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick:() => dispatch(actions.increaseAction())
  }
}

const Homes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export { Homes,Store }