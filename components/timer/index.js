import { Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/timer'

const formatTime = (time) => {
    return new Date(time).toJSON().slice(11, 19)
}

const Timer = ({ lastUpdate, tick }) => {
    return (
        <div>
            <Button onClick={tick}>Click me to start</Button>
            {formatTime(lastUpdate)}
        </div>

    )
}

const mapStateToProps = (state) => ({
    lastUpdate: state.timer.lastUpdate
})

const mapStateToDispatch = {
    tick: actions.tickAsync
}

export default connect(mapStateToProps, mapStateToDispatch)(Timer)
