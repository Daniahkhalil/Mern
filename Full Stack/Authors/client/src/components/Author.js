import { Link } from '@material-ui/core'
import { Table } from '@mui/material/core';
import React from 'react'

export const Author = () => {
  return (
   <>
   <h1>Favorie Author</h1>
   <Link>
   Add an Author
   </Link>
   <p>We have quit by :</p>
   <table>
   <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="right">Calories</TableCell>
            
          </TableRow>
        </TableHead>
   </table>
   </>
  )
}
