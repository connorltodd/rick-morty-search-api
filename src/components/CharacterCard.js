import React from 'react';

class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            image: this.props.image,
            name: this.props.name,
            status: this.props.status,
            species: this.props.species,
            id: this.props.id
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
    }



    render() {
        const { image, name, status, species, editMode, id } = this.state
        return (
            <div className="card mx-auto">
                <img src={image} style={{ width: '80px', height: '80px' }} />
                <h1>{name}</h1>
                <p>{status}</p>
                <p>{species}</p>

                {editMode &&
                    <form onSubmit={(event) => this.props.editCharacter(event, this.state)}>
                        <h1>Edit Character Form</h1>
                        <input name="name" value={name} onChange={this.handleChange} />
                        <input name="status" value={status} onChange={this.handleChange} />
                        <input name="species" value={species} onChange={this.handleChange} />
                        <button type="submit">Save</button>
                    </form>
                }

                <button onClick={() => this.setState({ editMode: !editMode })} >Edit Character </button>
                <button onClick={() => this.props.deleteCharacter(id)}>Delete Character</button>
            </div>
        )
    }
}

export default CharacterCard;