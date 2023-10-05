import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export function InvitePeople() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button fullWidth color="red" onClick={handleOpen}>Invitar Personas</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Invita personas a este bolsillo
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 15l6 -6" />
        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
          <Typography color="red" variant="h4">
            Comparte el enlace de invitación al bolisllo
          </Typography>
          <Typography className="text-center font-normal">
            https://localhost:5173/pockets/some-pocket
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Cerrar
          </Button>
          <Button color="red" variant="gradient" onClick={handleOpen}>
            Copiar Enlace
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
