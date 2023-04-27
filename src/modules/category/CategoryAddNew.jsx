import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryAddNew = () => {
    const { handleSubmit, control } = useForm({
        mode: "onChange",
        defaultValues: {
            category: "",
        },
    });

    const handleAddCategory = (values) => {
        console.log(values);
    };
    return (
        <>
            <DashboardHeading title="Add category" desc="Add new Category" />
            <Form
                className="flex flex-col items-baseline"
                onSubmit={handleSubmit(handleAddCategory)}
            >
                <div className="form-layout">
                    <Field className="w-[400px]">
                        <Label>Category</Label>
                        <Input
                            type="text"
                            placeholder="Enter your title"
                            name="category"
                            control={control}
                            required
                        />
                    </Field>
                </div>

                <Button type="submit" className="mx-auto text-white bg-bermuda">
                    Add new Category
                </Button>
            </Form>
        </>
    );
};

export default CategoryAddNew;
