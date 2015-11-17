var React = require("react");
var Child = require("./child");

var Parent = React.createClass({
    render: function() {
        return(
            <div>
                <h2>Hello World from the Parent</h2>
                <Child />
            </div>
        )
    }
});


module.exports = Parent;