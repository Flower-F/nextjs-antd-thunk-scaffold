import { Fragment } from 'react'
import Counter from '../components/counter'
import Mock from '../components/mock'
import Timer from '../components/timer'

const Home = () => {
  return (
    <Fragment>
      <Counter />
      <Timer />
      <Mock />
    </Fragment>
  )
}

export default Home