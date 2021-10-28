import { Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/counter'
import styles from './style.module.css'

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div className={styles.counter}>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <Button onClick={increment} className={styles.increment}>+1</Button>
            <Button onClick={decrement}>-1</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = {
    increment: actions.incrementCount,
    decrement: actions.decrementCount,
    reset: actions.resetCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
