import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";

export function FormDialog({onSubmit}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen((cur) => !cur)
    }
    const inputNameValue = ''
    const [inputName, setInputName] = React.useState(inputNameValue)

    const inputMountValue = ''
    const [inputMount, setInputMount] = React.useState(inputMountValue)

    const inputMonthValue = ''
    const [inputMonth, setInputMonth] = React.useState(inputMonthValue)

    const formValues = {
        name: inputName,
        mount: inputMount,
        quota: inputMonth,
    }



    const handleNameChange = (e) => {
        setInputName(e.target.value)
    }

    const handleMountChanfe = (e) => {
        setInputMount(e.target.value)
    }

    const handleMonthChange = (e) => {
        setInputMonth(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        setInputName(inputNameValue)
        setInputMount(inputMountValue)
        setInputMonth(inputMonthValue)
        onSubmit(formValues)
    }

    return (
    <>
        <Button ripple={true} color="red" size="sm" onClick={handleOpen}>+</Button>
        <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <form onSubmit={submitForm}>
                    <CardHeader
                    variant="gradient"
                    color="red"
                    className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Crea un Bolsillo
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input value={inputName} onChange={handleNameChange} label="Nombre del Bolsillo" size="lg" />
                        <Input type="number" value={inputMount} onChange={handleMountChanfe} label="Monto Inicial $" size="lg" />
                        <Input type="number" value={inputMonth} onChange={handleMonthChange} label="Cuota Mensual $" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" onClick={handleOpen} fullWidth>
                            Listo
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </Dialog>
    </>
    );
}