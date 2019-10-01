import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/addRecipe";
import classes from "./AddRecipeView.module.css";
// import {HeadingH3} from "../../Typography/Heading";
import { ReactComponent as IconPhoto } from '../../assets/photo-camera.svg';
import { ReactComponent as IconAdd } from '../../assets/plus.svg';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

class AddRecipeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            ingredient: []
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        console.log("fromularz wysłano!");

        this.props.history.push("/all");
    };

    onAddHandler() {
        let ingredient = this.state.ingredient;
        let name = "";
        ingredient.push({name});
        this.setState({
            ingredient: ingredient
        })
    };

    render() {
        // const modalShow = this.state.modalShow;

        let content = this.state.ingredient.map((ingredient, index) => {
            return (<li key={index}>{ingredient.name} {ingredient.amount}</li>)
        });


        return (
            <div className={classes.addRecipeContainer}>
                <section className={classes.banner}>
                    {/*<HeadingH3>Title</HeadingH3>*/}
                    <Input inputtype={"file"}
                           className={classes.inputFile}
                           accept="image/png, image/jpeg"
                           onClick={() => this.setState({modalShow: true})}/>
                    <IconPhoto className={classes.iconPhoto} />
                </section>
                <form className={classes.form} onSubmit={this.onSubmitHandler}>
                    <div className={classes.content}>
                        <div className={classes.leftContainer}>
                            <ul>{content}</ul>
                            <fieldset className={classes.fieldSet}>
                                <legend className={classes.legend}>Ingrediets</legend>
                                <div className={classes.inputGroup}>
                                    <input className={classes.input} placeholder={"name"}/>
                                    <input className={classes.input} placeholder={"amount"}/>
                                    <div className={classes.iconAddContainer}>
                                        <IconAdd className={classes.iconAdd} onClick={this.onAddHandler}/>
                                    </div>
                                </div>
                            </fieldset>

                        </div>
                        <div className={classes.rightContainer}>
                            <Input label={"Title"}
                                   inputtype={"input"}
                                   onChange={e => this.props.onTitleChange(e.target.value)}/>
                            <Input label={"Preparation"}
                                   inputtype={"textarea"}
                                   onChange={e => this.props.onPreparationChange(e.target.value)}/>
                            <Input label={"Preparation time"}
                                   inputtype={"input"}
                                   onChange={e => this.props.onPreparationTimeChange(e.target.value)}/>
                            <Input label={"Serving suggestion"}
                                   inputtype={"textarea"}/>
                            <Input label={"Tips"} inputtype={"textarea"}/>
                        </div>
                    </div>
                    <Button btnType="success" type="submit">Add recipe</Button>

                </form>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTitleChange: (title) => dispatch(actionTypes.setTitle(title)),
        onPreparationChange: (preparation) => dispatch(actionTypes.setPreparation(preparation)),
        onPreparationTimeChange: (preparationTime) => dispatch(actionTypes.setPreparationTime(preparationTime)),
    }
};

export default connect(null, mapDispatchToProps)(AddRecipeView);