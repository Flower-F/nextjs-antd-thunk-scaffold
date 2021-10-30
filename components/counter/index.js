import { Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/counter'

import styles from './style.module.scss'

const Counter = ({ count, increment, decrement, reset, incrementAsync }) => {
    return (
        <div className={styles.counter}>
            <h2>Count Test</h2>
            <h3>
                Count: <span>{count}</span>
            </h3>
            <Button onClick={increment} className={styles.increment}>+1</Button>
            <Button onClick={decrement}>-1</Button>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={incrementAsync}>+1(1s delay)</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = {
    increment: actions.incrementCount,
    decrement: actions.decrementCount,
    reset: actions.resetCount,
    incrementAsync: actions.incrementCountAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
