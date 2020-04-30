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
                <h6 className="card-title text-center mt-2">Add Character</h6>
                <input
                    className="card-text mt-2"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    style={{ width: '218px' }}
                />
                <input
                    className="card-text mt-2"
                    name="species"
                    placeholder="species"
                    value={this.state.species}
                    onChange={this.handleChange}
                    style={{ width: '218px' }}
                />
                <input
                    className="card-text mt-2"
                    name="id"
                    placeholder="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                    style={{ width: '218px' }}
                />
                <input
                    className="card-text mt-2"
                    name="status"
                    placeholder="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                    style={{ width: '218px' }}
                />
                <input
                    className="card-text mt-2"
                    name="image"
                    placeholder="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                    style={{ width: '218px' }}
                />
                <button className="btn btn-success mt-4 mb-4" style={{ width: '218px' }} onClick={this.handleSubmit}>Add User</button>
            </div>
        )
    }
}

export default AddCharacterForm;