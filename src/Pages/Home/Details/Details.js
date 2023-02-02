import React from 'react';

const Details = ({ details }) => {
    console.log(details)

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <h1 className='text-2xl font-bold'>Display detailed infromation for that Item</h1>

                <table className="table w-full">

                    <tbody className='border'>
                        <div className="w-full">
                            <table className="table w-full">
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">

                                                <div>
                                                    <div className="font-bold">{details?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">

                                                <div>
                                                    <div className="font-bold">CONTACT</div>
                                                    <div>{details?.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">

                                                <div>
                                                    <div className="font-bold">CITY</div>
                                                    <div>{details?.address?.city}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">

                                                <div>
                                                    <div className="font-bold">STATE</div>
                                                    <div>{details?.address?.street}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <th>
                                            <button className="btn btn-secondary btn-xs">Hide Details</button>
                                        </th>
                                    </tr>

                            </table>
                        </div>
                        <tr>

                            <td>
                                <span className='font-bold'>Desciption</span>
                                <p>{details?.company?.catchPhrase}</p>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Contact Person</div>
                                        <div>{details?.name}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Designation</div>
                                    <div>{details?.company?.name}</div>
                                </div>
                                <div>
                                    <div className="font-bold">Emails</div>
                                    <div>{details?.email}</div>
                                </div>
                                <div>
                                    <div className="font-bold">Phones</div>
                                    <div>{details?.phone}</div>
                                </div>
                            </td>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">Address</div>
                                        <div>{details?.address?.street}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">City</div>
                                    <div>{details?.address?.city}</div>
                                </div>
                                <div>
                                    <div className="font-bold">State</div>
                                    <div>{details?.State}</div>
                                </div>
                                <div>
                                    <div className="font-bold">Country</div>
                                    <div>{details?.Country}</div>
                                </div>
                            </td>

                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Details;