import React, { Component } from 'react';
import {connect} from 'react-redux';

import './styles.css';

// Add key in env variable REACT_APP_KEY
const key = process.env.REACT_APP_KEY;

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images,
                });
            });
    }

    render() {
        const { images } = this.state;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({error,images,isLoading}) => ({
    isLoading,
    error,
    images
});
export default connect(mapStateToProps,null)(ImageGrid);
