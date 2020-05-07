import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputText, InputEmail, InputPassword} from '../../components/Form';
import {updateUsers, submitUserRequested} from '../../actions/user';


class Edit extends Component {
    //Evento de cambio
    handleChange(obj) {
        const {user} = this.props;
        Object.assign(user, obj);
        this.props.updateUser(user);
        this.forceUpdate();
    }

    render() {
        const {
            user: {
                first_name,
                last_name,
                username,
                email,
                password,
                avatar,
                code
            }
        } = this.props;
        return (
            <div>
                <h1> Edicion de usuario </h1>
                <InputText label= "Nombre: " key= "first_name" value={first_name} onChange={({target:{value}}) => this.handleChange({first_name: value})}/>
                
                <InputText label= "Apellido: " key= "last_name" value={last_name} onChange={({target:{value}}) => this.handleChange({last_name: value})}/>
                
                <InputText label= "Username: " key= "username" value={username} onChange={({target:{value}}) => this.handleChange({username: value})}/>
                
                <InputEmail label= "Email: " key= "email" value={email} onChange={({target:{value}}) => this.handleChange({email: value})}/>
                
                <InputPassword label= "Password: " key= "password" value={password} onChange={({target:{value}}) => this.handleChange({password: value})}/>
                
                <InputText label= "Avatar: " key= "avatar" value={avatar} onChange={({target:{value}}) => this.handleChange({avatar: value})}/>
                
                <InputText label= "Code: " key= "code" value={code} onChange={({target:{value}}) => this.handleChange({code: value})}/>
                
                <button onClick={() => this.props.submit()}> Guardar </button>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.currentUsers
});
const mapDispatchToProps = (dispatch) => ({
    updateUser: user => dispatch(updateUsers(user)),
    submit: () => dispatch(submitUserRequested())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);