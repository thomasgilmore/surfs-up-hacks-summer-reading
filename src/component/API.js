import React, { Component } from 'react';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ''
        };
        this.fetchAPI = this.fetchAPI.bind(this);
    }

    fetchAPI() {
        let url = `${window.location.protocol}//${window.location.host}/api`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.data);
            let apiResponse = res.data;

            this.setState({ apiResponse });
        });
    }

    componentDidMount() {
        window.addEventListener('load', this.fetchAPI);
    }

    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}

export default API