import React from 'react';
import s from './SearchForm.module.css';
import { Field,  Form,  Formik } from 'formik';



const SearchForm = (props) => {
    
    const onSearchSubmit=(values)=>{
        props.getOperations(props.itemsOnPage, props.currentPage, values.column, values.condition, values.searchField );
        props.setCurrentPage(1);
    }

    return (
        <Formik
            initialValues={{
                column: 'name',
                condition: 'includes',
                searchField: '',
            }}
            onSubmit={(values) => {
                onSearchSubmit(values);
            }}
        >
            <Form>
                <Field as="select" name="column" className={s.select}>
                    <option value='name'>{props.headers[0].name}</option>
                    <option value='quantity'>{props.headers[0].quantity}</option>
                    <option value='distance'>{props.headers[0].distance}</option>
                </Field>
                <Field as="select" name="condition" className={s.select}>
                    <option value='includes'>includes</option>
                    <option value='equally'>equally</option>
                    <option value='more'>more</option>
                    <option value='less'>less</option>
                </Field>
                <Field className={s.input}
                    name='searchField' type='text' component='input'>
                </Field>
                <button className={s.button} type='submit'>Searсh</button>
            </Form>
        </Formik>
    );
}

export default SearchForm;