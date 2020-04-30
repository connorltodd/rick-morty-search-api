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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editCharacter(this.state)
        this.setState({ editMode: false });
    }



    render() {
        const { image, name, status, species, editMode, id } = this.state
        return (
            <div className="card col-12 col-sm-6 col-md-6 mx-auto" style={{ maxWidth: '250px', margin: '20px' }}>


                {editMode ?
                    <form onSubmit={this.handleSubmit}>
                        <div className="mt-2">
                            <h6 className="card-title text-center">Edit Character Form</h6>
                            <input className="card-text mt-2" style={{ width: '218px' }} name="name" value={name} onChange={this.handleChange} />
                            <input className="card-text mt-2" style={{ width: '218px' }} name="status" value={status} onChange={this.handleChange} />
                            <input className="card-text mt-2" style={{ width: '218px' }} name="species" value={species} onChange={this.handleChange} />
                            <button className="btn btn-success mt-4" style={{ width: '218px' }} type="submit">Save</button>
                        </div>
                    </form>
                    :
                    <>
                        <img className="card-img-top" src={image} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{status}</p>
                            <p className="card-text">{species}</p>
                        </div>
                        <button className="btn btn-success" onClick={() => this.setState({ editMode: !editMode })} >Edit Character </button>
                        <button className="btn btn-danger mt-2 mb-2" onClick={() => this.props.deleteCharacter(id)}>Delete Character</button>
                    </>
                }
            </div>
        )
    }
}

export default CharacterCard;


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}