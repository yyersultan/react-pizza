import { FC } from "react"
import {Form,Input,Button} from 'antd'
import styles from './Login.module.css';
import { useDispatch } from "react-redux";
import { IUserData } from "../../store/actions/types";
import { login } from "../../store/actions/auth";
import { useTypedSelector } from "../../hooks/useTypedSelector";


export const Login:FC = () => {
    const {error} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch();

    const onFinish = (values:IUserData) => dispatch(login(values));
    
    return (
        <div className={styles.LoginForm}>
        <Form
        className={styles.Form}
        name="basic"
        onFinish={onFinish}
        >
            <Form.Item
            label='Username'
            name = 'username'
            rules={[{required:true,message:'Please input your username!'}]}
            >
                <Input />
            </Form.Item>

            <Form.Item
            label='Password'
            name = 'password'
            rules={[{required:true,message:'Please input your password!'}]}
            >
                <Input.Password />
            </Form.Item>
                <div style={{color:'red',textAlign:'center',marginBottom:'10px'}}>{error}</div>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
      </Form.Item>    

        </Form>
        </div>
    )
}