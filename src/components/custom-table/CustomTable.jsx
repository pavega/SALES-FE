import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material'
import { useState } from 'react'

export const CustomTable = ({
  columns,
  data,
  actions = [],
  rowsPerPageOptions = [5, 10, 20],
}) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(columns[0].field)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [searchText, setSearchText] = useState('')
  //   const [selectedFilter, setSelectedFilter] = useState(Status.ALL)

  // Fucionn para ordenar las columnas
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  // Funcion para la paginacion
  const handleChangePage = (_, newPage) => setPage(newPage)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  //Filtrar los datos por el buscador y el estado
  const filteredData = data.filter((row) =>
    columns.some((col) =>
      String(row[col.field]).toLowerCase().includes(searchText.toLowerCase())
    )
  )
  // .filter(
  //   (row) => selectedFilter === Status.ALL || row.status === selectedFilter
  // )

  //   useEffect(() => {
  //     setPage(0)
  //   }, [searchText, selectedFilter])

  // Ordenar datos
  const sortedData = [...filteredData].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1
    return 0
  })

  return (
    <div id='data-table'>
      <div className='data-table'>
        <Paper sx={{ width: '100%', overflow: 'auto' }}>
          {/* FILTERS */}
          {/* <div className='data-table-filters'>
            <TextField
              size='small'
              label='Buscar'
              className='data-table-filters-search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel>Filtrar por estado</InputLabel>
              <Select
                size='small'
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                label='Filtrar por estado'
                className='data-table-filters-select'
              >
                {filterOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}

          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              {/* HEADER */}
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell
                      key={col.field}
                      sortDirection={orderBy === col.field ? order : false}
                      sx={{ fontWeight: 'bold' }}
                    >
                      {col.sortable ? (
                        <TableSortLabel
                          active={orderBy === col.field}
                          direction={orderBy === col.field ? order : 'asc'}
                          onClick={() => handleRequestSort(col.field)}
                        >
                          {col.headerName}
                        </TableSortLabel>
                      ) : (
                        col.headerName
                      )}
                    </TableCell>
                  ))}
                  {actions.length > 0 && (
                    <TableCell sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
                  )}
                </TableRow>
              </TableHead>

              {/* BODY */}
              <TableBody>
                {sortedData.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + (actions.length > 0 ? 1 : 0)}
                      align='center'
                    >
                      No hay resultados
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        {columns.map((col) => (
                          <TableCell key={col.field}>
                            {row[col.field]}
                          </TableCell>
                        ))}
                        {actions.length > 0 && (
                          <TableCell>
                            {actions(row).map((action, idx) => (
                              <Tooltip key={idx} title={action.title}>
                                <IconButton onClick={action.onClick}>
                                  {action.icon}
                                </IconButton>
                              </Tooltip>
                            ))}
                          </TableCell>
                        )}
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginación */}
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component='div'
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={Math.min(
              page,
              Math.max(0, Math.ceil(filteredData.length / rowsPerPage) - 1)
            )}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage='Filas por página'
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
            }
          />
        </Paper>
      </div>
    </div>
  )
}
