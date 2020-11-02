import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class NestedRouteUI extends React.Component{
    render(){
        return (
            <div className='nestedUI'>
                <Router>
                    <Switch>
                        <Route exact path="/nested/">
                            <div>Nested Home Route</div>
                        </Route>

                        <Route path="/nested/topics/:topic_id/:post_id/" component={TopicSection}/>

                        <Route path="/nested/community">
                            <div>Nested Community Route</div>
                        </Route>

                    </Switch>
                </Router>
            </div>
        )
    }
}


class TopicSection extends React.Component{
    render(){
        return(
            <div>
                <div>Topic URL Param Test: {this.props.match.params.topic_id}</div>
                <div>Post ID: {this.props.match.params.post_id}</div>
            </div>
        )
    }
}