var React = require("react");

NotFoundPage = React.createClass({
    render: function() {
        return(
            <div>
                <h4>The page you are looking for doesn't exist.</h4>
                <p>Go back <a href="/#/"> home </a> </p>
            </div>
        )
    }
});

module.exports = NotFoundPage;