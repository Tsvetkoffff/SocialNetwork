import React from "react";

export default class ProfileStatus extends React.Component {
    state = {
      editMode: false
    };

    editModeToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    render() {
        return <>
            {!this.state.editMode
                ? <p onClick={this.editModeToggle}> {this.props.status} </p>
                : <input onBlur={this.editModeToggle} autoFocus={true} value={this.props.status}/>
            }
            </>
    }
}