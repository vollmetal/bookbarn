import BookDisplay from "./BookDisplay";

const { Component } = require("react");


class Main extends Component {

    constructor () {
        super()
    }

    render () {
        
        return (
            <div className="mainBody">
                <BookDisplay books={this.props.books} filterLanguage="English"/>
            </div>
        )
    }

}

export default Main;