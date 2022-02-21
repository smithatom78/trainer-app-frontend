import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Enroll = () => {
  
 
    return (
        <div><br />
            <h1>Enroll As Trainer</h1>
            <form>

                <table>
                    <tbody>
                        <tr>
                            <td>Name of the Trainer</td>
                            <td> <input type="text" name="name" size={70}  /></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>  <textarea rows="4" cols="35" name='address' ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td><input type="text" name="company" size={70}  /></td>
                        </tr>
                        <tr>
                            <td>Course</td>
                            <td><select  name="courses" >
                                <option value="01_DSA">01_DSA</option>
                                <option value="02_FSD">02_FSD</option>
                                <option value="03_RPA">03_RPA</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td><input type="text" name="designation" size={70} /></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input type="text" name="phone" size={70}  /></td>
                        </tr>
                        <tr>
                            <td>Photo</td>
                            <td><input type="file" name="photo" size={70}  /></td>
                        </tr>
                        <tr>
                            <td>Qualification</td>
                            <td><input type="text" name="qualification" size={70}  /></td>
                        </tr>
                        
                        <tr><td colspan="2"> <button>Enroll As Trainer</button></td></tr>
                    </tbody>
                </table>
            </form>

        </div>

    )
}
