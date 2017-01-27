
import { Router, Route, Link, hashHistory, browserHistory} from 'react-router'

function RouterGoTo(link){
  browserHistory.push(link);
}


export default RouterGoTo