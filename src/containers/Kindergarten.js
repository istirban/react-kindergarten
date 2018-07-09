import React, {Component} from 'react';
import GroupsList from '../components/GroupsList'
import { getGroups } from '../services/api';

class Kindergarten extends Component{
    state = {
        groups: []
    }

    async componentDidMount() {
        const groups = await getGroups();
    
        this.setState({
            groups: groups
        });
      }
    render() {
        const {groups} = this.state
        console.log(groups)
        return groups.length > 0 ? 
        (<div>
            <GroupsList 
                groups={groups}
            />
        </div>
        ) : (
            <p>Loading items...</p>
        );
    }
};
export default Kindergarten;