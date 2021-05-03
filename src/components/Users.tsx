import React, { useEffect, useState } from "react";
import randomUser from "../utils/RandomUserAPI";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(image: string, firstName: string, lastName: string, email: string, phone: string) {
    return { image, firstName, lastName, email, phone };
}

let rows: any = [];

function Users(props: any) {
    const [userData, setUserData] = useState([]);

    
    function splitInfo(results: any) {
        rows.push(createData(results.picture.thumbnail, results.name.first, results.name.last, results.email, results.phone))
    }
    async function getUser() {
        const data = await randomUser.getRandomUser().then(res => res.data.results.map(splitInfo)).catch(err => console.log(err));
        return data
    };

    useEffect(() => {
        const getData = async() => {
            const data = await getUser()
            setUserData(data)
        }
        getData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Employee</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <img src={row.image} alt={"Image of " + row.firstName + " " + row.lastName}></img>
                            </TableCell>
                            <TableCell align="right">{row.firstName + " " + row.lastName}</TableCell>
                            <TableCell align="right"><a href={`mailto:${row.email}`}>{row.email}</a></TableCell>
                            <TableCell align="right"><a href={`tel:${row.phone}`}>{row.phone}</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Users;