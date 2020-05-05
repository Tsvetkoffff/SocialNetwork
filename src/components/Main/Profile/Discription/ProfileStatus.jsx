import React from "react";

export default class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
    };

    editModeToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        if(this.state.editMode) {
             this.props.updateUserStatus(this.state.status)
        }
    };

    onStatusTextChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    };

    render() {
        return <>
            {
                !this.state.editMode
                    ? <p onClick={this.editModeToggle}> {this.state.status} </p>
                    : <input onBlur={this.editModeToggle}
                               autoFocus={true}
                               value={this.state.status}
                               onChange={this.onStatusTextChange}/>
            }
        </>
    }
}