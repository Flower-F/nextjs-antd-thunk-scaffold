import { GithubOutlined } from '@ant-design/icons'
import Counter from '../components/counter'
import Mock from '../components/mock'

import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 data-testid="title">Nextjs-Antd-Thunk-Scaffold</h1>
      <a href="https://github.com/Flower-F/nextjs-antd-thunk-scaffold"
        target="_blank">
        <GithubOutlined className={styles.github} />
      </a>
      <Counter />
      <Mock />
    </div>
  )
}

export default Home