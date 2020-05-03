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
            <form onSubmit={this.handleSubmit}>
                <div>
                    {this.state.images.map((image, index) => (
                        <div>
                            <label>
                                Image:
                                <input type="text" value={image.path} onChange={this.handleImagePathChange(index)} />
                            </label>

                            <button type="button" onClick={this.handleRemoveImagePath(index)}>Remove Image</button>
                        </div>
                    ))}
                    <label>
                        Answer:
                        <input type="text" name="answer" value={this.state.answer} onChange={this.handleAnswerChange}/>
                    </label>
                </div>
                <div>
                    <button type="button" onClick={this.handleAddImagePath}>Add Image Path</button>
                </div>
                <div>
                    <input type="submit" value="Create PeepSea!" />
                </div>
            </form>
        )
    }
}

export default CreateForm;