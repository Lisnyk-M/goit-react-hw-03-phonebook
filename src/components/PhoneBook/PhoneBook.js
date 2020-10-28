import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './PhoneBook.module.css';
import PropTypes from 'prop-types';

class PhoneBook extends Component {
    state = {
        name: '',
        number: '',
    }


    handleSubmit = e => {
        e.preventDefault();

        const contact = {
            id: uuidv4(),
            name: this.state.name,            
            number: this.state.number
        }
        this.props.onAddContact(contact);

        this.setState({ name: '' });
        this.setState({ number: '' });
    }

    handleChange = e => {
        this.setState({ name: e.target.value });
    }

    handleBlur = e => {
        const inputName = e.target.value;

        const isExistContact = this.props.contacts.find(contact => {
            return contact.name.toLowerCase() === inputName.toLowerCase();
        });

        isExistContact ? alert(inputName + ' allready exist, please enter another name') :
            console.log('good, contact ' + inputName + ' do not exist');
    }

    handleChangeNumber = e => {
        this.setState({ number: e.target.value });
    }

    render() {
        return (
            <>
                <h2>PhoneBook</h2>
                <form className={styles.inputContact} onSubmit={this.handleSubmit}>
                    <label className={styles.label}>Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    >
                    </input>
                    <label className={styles.label}>Number</label>
                    <input className={styles.input} type="phone" value={this.state.number} onChange={this.handleChangeNumber}></input>
                    <button type="submit" className={styles.buttonAddContact}>Add contact</button>
                </form>
            </>
        )
    }
}

PhoneBook.propTypes = {
    onAddContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired)
}

export default PhoneBook;