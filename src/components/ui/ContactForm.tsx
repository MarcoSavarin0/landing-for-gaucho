/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";


const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "El nombre de usuario debe tener al menos 2 caracteres." }),
    empresa: z
        .string()
        .min(2, { message: "La empresa debe tener al menos 2 caracteres." }),
    email: z
        .string()
        .email({ message: "El email no es válido." })
        .min(5, { message: "El email debe tener al menos 5 caracteres." }),
    codArea: z
        .string()
        .min(2, { message: "El código de área debe tener al menos 2 caracteres." })
        .optional(),
    telefono: z
        .string()
        .min(2, { message: "El teléfono debe tener al menos 2 caracteres." })
        .optional(),
    presupuesto: z
        .string()
        .min(2, { message: "El presupuesto debe tener al menos 2 caracteres." })
        .optional(),
    mensaje: z
        .string()
        .min(2, { message: "El mensaje debe tener al menos 2 caracteres." })
        .optional(),

});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            empresa: "",
            email: "",
            codArea: "",
            telefono: "",
            presupuesto: "",
            mensaje: "",
        },
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (data: FormValues) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(null);

            const response = await fetch('/api/contact/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Hubo un error al enviar el formulario');
            }

            const result = await response.json();
            setSuccess('Formulario enviado correctamente');
            form.reset();
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Hubo un error al enviar el formulario');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 lg:items-center lg:justify-center w-full"
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl text-white font-stolzMedium mb-10 lg:text-[40px] ">
                        Contacto
                    </h2>
                    <div className="flex flex-col lg:flex-row lg:gap-8 items-start">
                        <div className="flex flex-col w-full gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white font-stolzLight">Nombre*</FormLabel>
                                        <FormControl>
                                            <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="Ingresa tu nombre" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="">
                                        <FormLabel className="text-white font-stolzLight">Correo Electrónico*</FormLabel>
                                        <FormControl>
                                            <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="email@ejemplo.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <FormField
                                control={form.control}
                                name="empresa"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white font-stolzLight">Empresa*</FormLabel>
                                        <FormControl>
                                            <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="Nombre de tu empresa" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-3">
                                <FormField
                                    control={form.control}
                                    name="codArea"
                                    render={({ field }) => (
                                        <FormItem className="w-1/4">
                                            <FormLabel className="text-white font-stolzLight text-nowrap">Cód. Área</FormLabel>
                                            <FormControl>
                                                <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="+54" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telefono"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-white font-stolzLight">Número Telefónico</FormLabel>
                                            <FormControl>
                                                <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="Ingresa tu número" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="presupuesto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white font-stolzLight">¿Cuánto presupuesto están invirtiendo?</FormLabel>
                                    <FormControl>
                                        <Input className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="Presupuesto" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mensaje"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white font-stolzLight">Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea className="text-[#9CA3AF] bg-[#27282D] border-[1px] border-[#9CA3AF] font-stolzLight" placeholder="Déjanos tu consulta" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {loading && <p className="text-white">Enviando...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <button
                        type="submit"
                        className="bg-[#CEFF20] w-full text-black py-3 px-6 font-stolzRegular text-lg rounded-lg hover:bg-[#b6e619]"
                        disabled={loading}
                    >
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
