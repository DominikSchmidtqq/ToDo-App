import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux';
import { getItems, deleteItem } from "../actions/itemActions";
import PropTtypes from 'prop-types';

class ToDoList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {

        const { items } = this.props.item;
        return (
            <Container>
                
                <ListGroup>
                    <TransitionGroup className = "todo-list">
            { items.map(({ id, name}) => (
                <CSSTransition key = {id} timeout = {500} classNames = "fade">
                    <ListGroupItem>
                    <Button className = "remove-btn" color = "danger" size = "sm" onClick = {this.onDeleteClick.bind(this, id)}>&times;</Button>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ToDoList.propTypes = {
    getItems: PropTtypes.func.isRequired,
    item: PropTtypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ToDoList);