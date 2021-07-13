import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = { user: "", toHome: false };

  componentDidMount() {
    this.props.dispatch(setAuthedUser(null));
  }

  handleChange = (event) => {
    const user = event.target.value;
    const { dispatch } = this.props;

    this.setState({ user, toHome: user ? true : false });

    dispatch(setAuthedUser(user));
  };

  render() {
    const { toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="center">
        <h1>Login</h1>

        <select value={this.state.user} onChange={this.handleChange}>
          <option>-Please select an user -</option>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
      </div>
    );
  }
}

export default connect()(Login);