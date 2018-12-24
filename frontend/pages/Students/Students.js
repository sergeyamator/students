import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {auth} from '../../actions';
import {isLoggedIn} from '../../helpers';
import styles from './Students.scss';

@connect(mapStateToProps, mapDispatchToProps)
class Students extends Component {
    state = {}

    onButtonClick = (evt) => {
        console.log(evt);
    };

    render() {
        const {props} = this;
        if (props.isLoggedIn) {
            return <Redirect to="/profile" /> ;
        }

        return (
            <section className={styles.wrapper}>
                <div className={styles.information}></div>
                <div className={styles.students}>
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Имя Фамилия" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Имя Фамилия" />
                        </ListItem>
                    </List>
                    <Fab aria-label="Add" className={styles.studentsAdd}>
                        Добавить студента
                        <AddIcon className={styles.iconAdd}/>
                    </Fab>
                </div>
            </section>
        );
}
}

const mapStateToProps = state => ({
    isLoggedIn: isLoggedIn(state),
});

function mapDispatchToProps(dispatch) {
    return {
        auth(url, userData) {
            dispatch(auth(url, userData));
        },
    };
}

export {Students};