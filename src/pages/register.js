var React = require("react");

var RegisterPage = React.createClass({
    render: function() {
        return(
            <div id="registerPageContainer">

                <form id="registerForm" className="form-horizontal col-sm-6 col-sm-offset-3">

                    <div id="registerFormHeader" className="col-sm-12 text-center">
                        <h4 id="registerFormHeadline">Register</h4>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userEmail">Email: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userEmail" type="email" placeholder="email@email.com" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userPassword">Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userPassword" type="password" placeholder="password" />
                        </div>
                    </div>

                    <button className="btn btn-success center-block">Sign up</button>
                </form>

            </div>
        )
    }
});

module.exports = RegisterPage;