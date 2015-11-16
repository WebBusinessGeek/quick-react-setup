var React = require("react");
var Child = require("./child");

var Parent = React.createClass({
    render: function() {
        return(
            <div>
                <h2>This is the parent component.</h2>
                <Child />
            </div>
        )
    }
});


module.exports = Parent;