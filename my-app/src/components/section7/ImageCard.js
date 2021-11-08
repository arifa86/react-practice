import React from "react";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    // Custom
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }

    // Life cycle
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // Component render
    render() {
        const {description, id, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} key={id} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;