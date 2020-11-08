import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ results }) => {

    return (
        <div>
            <table className="table table-striped table-dark center">
                <thead>
                    <tr>
                        <th scope="col" className='text-center'>Article Number</th>
                        <th scope="col" className='text-center'>Article Title</th>
                        <th scope="col" className='text-center'>Read the article</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        results.map((value) =>(
                            <tr key={value.id}>
                                <th scope="row" className='text-center'>
                                    { value.id }
                                </th>
                                <td className='text-center'>
                                    {value.title}
                                </td>
                                <td className='text-center'>
                                    <button type="button" className="btn btn-dark">
                                        <Link to={`/article/${value.id}`} className="white" >
                                            Read
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Articles;