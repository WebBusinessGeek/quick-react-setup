var React = require("react");

var Parent = require("../components/parent");

var HelloPage = React.createClass({
    render: function() {
        return (
            <div>
                <Parent />
                <a className="btn btn-primary" href="/#/goodbye">Goodbye</a>
            </div>
        )
    }
});

module.exports = HelloPage;