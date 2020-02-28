import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {changeHandler, postLink} from "../../store/actions/actions";
import {connect} from "react-redux";
import './MainPage.css'


const MainPage = (props) => {
    const submitHandler = (e)=>{
       e.preventDefault();
        props.postLink({originalLink: props.originalLink})
    };
    return (
        <div className="wrap">
            <Form onSubmit={submitHandler} >
            <FormGroup>
                <Label for="originalLink">Shorten your link</Label>
                <Input onChange={props.changeHandler} value={props.originalLink} type="text" name="originalLink" id="originalLink" placeholder="with a placeholder" />
            </FormGroup>
                <Button type="submit">Shorten</Button>
            </Form>
            {props.shortUrl ? <a target="_blank" rel="noopener noreferrer" href={'http://localhost:8000/links/' +props.shortUrl}>http://localhost:8000/links/{props.shortUrl}</a>:null}
        </div>
    );
};
const mapStateToProps =(state)=>{
  return{
      originalLink: state.originalLink,
      shortUrl: state.shortUrl
  }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        postLink: (data)=> dispatch(postLink(data)),
        changeHandler: (e)=>dispatch(changeHandler(e))
    }
};
export default connect(mapStateToProps,mapDispatchToProps) (MainPage);