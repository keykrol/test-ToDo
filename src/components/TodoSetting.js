import React from 'react';

class  TodoSetting extends React.Component{
   //const badgeForm = props.badgeForm;

    render(){
        return(
            <div className= "Badge">
                <div>
                    <strong>
                        {this.props.description}
                    </strong>
                    <br />{this.props.dateCreate}
                    </div>
            </div>
        )
    }
}

export default TodoSetting;