import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import { bindActionCreators } from 'redux'
import { initStore, addCount, removeCount } from '../store'
import withRedux from '../utils/withRedux'


const Page = (props) => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <div onClick={props.addCount}>ADD</div>
      <div onClick={props.removeCount}>REMOVE</div>
      {props.count}
    </div>

  </div>
)

const mapStateToProps = (state) => {
  return {
      count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    removeCount: bindActionCreators(removeCount, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Page)