var React = require("react");

var Child = React.createClass({
    render: function() {
        return(
            <div>
                <h5>Hello world from the child</h5>
            </div>
        )
    }
});


module.exports = Child;