var React = require("react");

var Parent = require("../components/parent");

var HelloPage = React.createClass({
    render: function() {
        return (
            <div id="helloPageContainer">
                <Parent />
                <a className="btn btn-primary" href="/#/goodbye">Goodbye</a>
                <p id="helloPageWelcome">Welcome to the party</p>
            </div>
        )
    }
});

module.exports = HelloPage;