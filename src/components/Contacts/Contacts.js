import React, { Component } from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

class Contacts extends Component {

    render() {
        const { onRemoveContact } = this.props;

        return (
            <>
                <h2>Contacts</h2>
                <ul>
                    {this.props.contactsArr.map(item => (
                        <li key={item.id}>
                            {item.name}: {item.number}
                            <button className={styles.buttonDelete} id={item.id} onClick={() => onRemoveContact(item.id)}>Delete</button>
                        </li>)
                    )}
                </ul>
            </>
        )
    }
}

Contacts.propTypes = {
    onRemoveContact: PropTypes.func.isRequired
}

export default Contacts;