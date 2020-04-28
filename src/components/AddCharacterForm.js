import React from 'react';

class AddCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            species: '',
            status: '',
            id: '',
            image: '',
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
    }

    handleSubmit = () => {
        this.props.addCharacter(this.state)
        this.setState({
            name: '',
            species: '',
            status: '',
            id: '',
            image: '',
        })
    }

    render() {
        return (
            <div>
                <input
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    name="species"
                    placeholder="species"
                    value={this.state.species}
                    onChange={this.handleChange}
                />
                <input
                    name="id"
                    placeholder="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                />
                <input
                    name="status"
                    placeholder="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                />
                <input
                    name="image"
                    placeholder="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add User</button>
            </div>
        )
    }
}

export default AddCharacterForm;