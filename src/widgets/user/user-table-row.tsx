import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';

import { Label } from 'src/shared/ui/label';
import { Iconify } from 'src/shared/ui/iconify';
import { declination } from 'src/shared/utils/format-number';

// ----------------------------------------------------------------------

export type UserProps = {
  id: string;
  name: string;
  role: string;
  status: string;
  company: string;
  avatarUrl: string;
  isVerified: boolean;
  salary: number;
  phone: string;
  email: string;
  gender: string;
  experience: number;
  grade: string;
};

type UserTableRowProps = {
  row: UserProps;
  selected: boolean;
  onSelectRow: () => void;
};

export function UserTableRow({ row, selected, onSelectRow }: UserTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    handleClosePopover();
    navigate(`/employees/${row.id}/edit`);
  }, [handleClosePopover, navigate, row.id]);

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={onSelectRow} />
        </TableCell>

        <TableCell component="th" scope="row">
          <Link to={`/employees/${row.id}`}>
            <Box gap={2} display="flex" alignItems="center">
              <Avatar alt={row.name} src={row.avatarUrl} />
              {row.name}
            </Box>
          </Link>
        </TableCell>

        <TableCell>{row.role}</TableCell>

        <TableCell>
          <Label color={(row.status === 'Забанен' && 'error') || 'success'}>{row.status}</Label>
        </TableCell>

        <TableCell>
          <Label>{declination(row.experience)}</Label>
        </TableCell>

        <TableCell>{row.grade}</TableCell>

        <TableCell>
          <Label>{row.salary.toLocaleString(undefined, { minimumFractionDigits: 2 })} руб.</Label>
        </TableCell>

        <TableCell>{row.phone}</TableCell>

        <TableCell>
          <Label>{row.email}</Label>
        </TableCell>

        <TableCell>
          <Label>{row.gender}</Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 1,
            gap: 0.5,
            width: 180,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          <MenuItem onClick={handleEdit}>
            <Iconify icon="solar:pen-bold" />
            Редактировать
          </MenuItem>

          <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Удалить
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
