var React = require("react");

var Parent = require("../components/parent");

var HelloPage = React.createClass({
    render: function() {
        return (
            <div>
                <Parent />
                <a href="/#/goodbye">Goodbye</a>
            </div>
        )
    }
});

module.exports = HelloPage;