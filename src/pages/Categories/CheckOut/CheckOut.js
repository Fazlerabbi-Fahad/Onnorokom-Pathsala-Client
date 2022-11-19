import React from 'react';

const CheckOut = () => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Basic </th>
                        <th>annual-level-three Plus </th>
                        <th>Professional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>All classes available</li>
                            </ul>
                        </td>
                        <td><ul>
                            <li>All classes available</li>
                            <li>Support available</li>
                        </ul></td>
                        <td>
                            <ul>
                                <li>All classes available</li>
                                <li>Support available</li>
                                <li>Contact very easily</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>$4.45/ month </th>
                        <th>$8.95/ month </th>
                        <th>$24.95/ month </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default CheckOut;