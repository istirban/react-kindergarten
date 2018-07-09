import React from 'react';
import Group from './Group'

const GroupsList = (groups) => {
    return (
        <div>
            {groups.map(group => (
                <Group 
                    key={group.id}
                    {...group}
                />    
            ))}
        </div>
    )
};

export default GroupsList;