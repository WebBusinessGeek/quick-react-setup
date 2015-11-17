var React = require("react");

NotFoundPage = React.createClass({
    render: function() {
        return(
            <div id="NotFoundPageContainer">
                <h4 id="NotFoundPageHeader">The page you are looking for doesn't exist.</h4>
                <p id="NotFoundPageSubHeader">Go back <a href="/#/"> home </a> </p>
            </div>
        )
    }
});

module.exports = NotFoundPage;