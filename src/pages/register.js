var React = require("react");
var $ = require("jquery");

var RegisterPage = React.createClass({

    handleFailedSubmit: function(responseMessage) {
        console.log(responseMessage);
    },

    handleSuccessfulSubmit: function(responseMessage) {
        console.log(responseMessage);
    },

    handleSubmit: function(e) {
        e.preventDefault();

        var email = this.refs.emailInput.value.trim();
        var password = this.refs.passwordInput.value.trim();

        var dataToSend = {
            email: email,
            password: password
        };
        $.ajax({
            url: "http://localhost:8132/users/register",
            dataType: "json",
            type: "POST",
            data: dataToSend,
            success: function(response) {
                if(response.status == "fail") {
                    this.handleFailedSubmit(response.data.message);
                }
                else {
                    this.handleSuccessfulSubmit(response.data.message);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    },

    render: function() {
        return(
            <div id="registerPageContainer">

                <form id="registerForm" className="form-horizontal col-sm-6 col-sm-offset-3" onSubmit={this.handleSubmit}>

                    <div id="registerFormHeader" className="col-sm-12 text-center">
                        <h4 id="registerFormHeadline">Register</h4>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userEmail">Email: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userEmail" type="email" placeholder="email@email.com" ref="emailInput" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userPassword">Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userPassword" type="password" placeholder="password" ref="passwordInput" />
                        </div>
                    </div>

                    <button className="btn btn-success center-block">Sign up</button>
                </form>

            </div>
        )
    }
});

module.exports = RegisterPage;