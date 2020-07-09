import React, { Component } from 'react';

class SearchAppointments extends Component {
    render() {
        //multiline template
        return(
            <div className='search-appointments row justify-content-center my-4'>
                <div className='col-md-10'>
                    <div className='input-group'>
                        <input 
                        id='SearchApts'
                        type='text'
                        className='form-control'
                        aria-label='Search Appointments'
                        onChange={e => this.props.searchApts(e.target.value)}/>
                        <div className='input-group-append'>
                            <button 
                            type='button'
                            className='btn btn-primary dropdown-toggle'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                                Sort By: <span className='caret'/>
                            </button>

                        <div className='sort-menu dropdown-menu dropdown-menu-right'>
                            <button className={'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'petName'? 'active': '')}
                         href='#'
                         onClick={e => this.props.changeOrder('petName',this.props.orderDir)}>
                                Pet Name
                            </button>

                            <button className={'sort-by dropdown-item ' + 
                        (this.props.aptDate === 'aptDate'? 'active': '')} href='#'
                        onClick={e => this.props.changeOrder('aptDate',this.props.orderDir)}>
                                Date
                            </button>

                            <button className={'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'ownerName'? 'active': '')} href='#'
                        onClick={e => this.props.changeOrder('ownerName',this.props.orderDir)}>
                                Owner
                            </button>
                            <div role='separator' className='dropdown-divider'/>

                            <button className={'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'asc'? 'active': '')} href='#'
                        onClick={e => this.props.changeOrder(this.props.orderBy,'asc')}>
                                Asc
                            </button>

                            <button className={'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'Dsc'? 'active': '')} href='#'
                        onClick={e => this.props.changeOrder(this.props.orderBy,'dsc')}>
                                Dsc
                            </button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchAppointments;