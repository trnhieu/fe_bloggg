import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Heading from "../layout/Heading";
import { userActions } from "../redux/user.slice";

const schema = yup.object({
    email: yup
        .string()
        .email("Bạn chưa nhập email chính xác")
        .required("Bạn chưa nhập đầy đủ email"),
    password: yup
        .string()
        .required("Bạn chưa nhập đầy đủ password")
        .max(20, "chỉ nhập tối đa 20 kí tự"),
});

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const arrayErrors = Object.values(errors);
        if (arrayErrors.length > 0) {
            toast.error(arrayErrors[0].message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [errors]);

    const handleRegister = (values) => {
        dispatch(
            userActions.register({
                email: values.email,
                password: values.password,
            }),
        );

        reset({
            email: "",
            password: "",
        });
        toast.success("dang ki thanh cong");
        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-20">
            <Heading titile="Register" />
            <Form
                onSubmit={handleSubmit(handleRegister)}
                className="w-[500px]"
                autoComplete="off"
            >
                <Field>
                    <Label label="Email Address" htmlFor="email" />
                    <Input
                        type="email"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                        placeholder="Enter your email"
                        name="email"
                        control={control}
                    />
                </Field>
                <Field>
                    <Label label="Password" htmlFor="password" />
                    <Input
                        type="password"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                        placeholder="Enter your password"
                        name="password"
                        control={control}
                    />
                </Field>
                <Button
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full text-white bg-bermuda"
                >
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;
