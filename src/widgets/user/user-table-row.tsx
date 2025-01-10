import type { Employee } from 'src/shared/types/employee';

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
import { StatusEnum } from 'src/shared/types/employee';

// ----------------------------------------------------------------------

type UserTableRowProps = {
  row: Employee;
  selected: boolean;
  onSelectRow: () => void;
  onDelete: () => void;
};

export function UserTableRow({ row, selected, onSelectRow, onDelete }: UserTableRowProps) {
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
              <Avatar alt={row.username} src={`/assets/images/avatar/avatar-${row.id + 1}.webp`} />
              {row.profile.first_name} {row.profile.last_name}
            </Box>
          </Link>
        </TableCell>

        <TableCell>{row.profile.profession}</TableCell>

        <TableCell>
          <Label color={(row.profile.status === StatusEnum.BANNED && 'error') || 'success'}>
            {row.profile.status}
          </Label>
        </TableCell>

        <TableCell>{row.profile.grade}</TableCell>

        <TableCell>
          <Label>
            {row.profile.salary.toLocaleString(undefined, { minimumFractionDigits: 2 })} руб.
          </Label>
        </TableCell>

        <TableCell>{row.profile.phone}</TableCell>

        <TableCell>
          <Label>{row.email}</Label>
        </TableCell>

        <TableCell>
          <Label color={row.profile.gender === 'мужчина' ? 'error' : 'success'}>
            {row.profile.gender}
          </Label>
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

          <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Удалить
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
