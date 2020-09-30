import React,{useEffect} from 'react'
import {connect} from 'react-redux' //function tu connect to redux
import Preloader from '../layaout/Preloader'
import LogItem from './LogItem'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({log: {logs,loading}, getLogs}) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    },[]);

    if(loading || logs === null ){
        return <Preloader/>
    }
    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No logs to show...</p>
            ):(
            logs.map(log =><LogItem key={log.id} log={log}/>)
            )}
        </ul>
    )
}

Logs.propTypes ={
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

/*
    This function brings the state as prop. 
    You can access to a part of or bring the whole state.
    log comes from the reducers/index.js 
    logs: state.log.logs
*/
const mapStateToProps = state =>({
    log: state.log,
    current: state.log.current
})
//when the action is pass is converted to prop. so to use it you have to inclue it 
export default connect(mapStateToProps,{getLogs})(Logs);
