import React from "react";

class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: '',
            images: [{path: ''}],
        }
    }

    handleAnswerChange = event => {
        this.setState({answer: event.target.value});
    }

    handleImagePathChange = index => event => {
        const newImages = this.state.images.map((image, imageIndex) => {
            if (index !== imageIndex) return image;

            return { ...image, path: event.target.value};
        });

        this.setState({images: newImages})
    }

    handleAddImagePath = () => {
        this.setState({
            images: this.state.images.concat([{path: ''}])
        });
    }

    handleRemoveImagePath = index => () => {
        this.setState({
            images: this.state.images.filter((image, imageIndex) => index !== imageIndex)
        });
    }

    handleSubmit = event => {
        const { answer, images } = this.state;
        alert(`Answer: ${answer} with ${images.length} images`);
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
            <form
                onSubmit={this.handleSubmit}
            >
                <h1>Create A New PeepSea!</h1>
                    <label>Answer:</label>
                    <input
                        type="text"
                        name="answer"
                        value={this.state.answer} onChange={this.handleAnswerChange}
                        className="form-control"
                        placeholder="The quick brown fox jumps over the lazy dog"
                    />
                    <p>Image Paths:</p>
                    {this.state.images.map((image, index) => (
                        <div className="form-row">
                            <div className="form-group col-md">
                                <input
                                    type="text"
                                    value={image.path}
                                    onChange={this.handleImagePathChange(index)}
                                    className="form-control"
                                    placeholder="https://www.some-image-website.com/path/to/image.png"
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="button"
                                    onClick={this.handleRemoveImagePath(index)}
                                    className="btn btn-warning"
                                >
                                    Remove Image
                                </button>
                            </div>
                        </div>
                    ))}
                <div className="form-group">
                    <button
                        type="button"
                        onClick={this.handleAddImagePath}
                        className="btn btn-secondary"
                    >
                        Add Image Path
                    </button>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create PeepSea!" className="btn btn-primary"/>
                </div>
            </form>
            </div>
        )
    }
}

export default CreateForm;