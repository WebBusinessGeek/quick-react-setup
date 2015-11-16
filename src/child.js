var React = require("react");

var Child = React.createClass({
    render: function() {
        return(
            <div>
                <h5>This is from the child component.</h5>
            </div>
        )
    }
});


module.exports = Child;