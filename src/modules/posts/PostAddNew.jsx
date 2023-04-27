import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import { Dropdown } from "../../components/dropdown";

import { useDispatch, useSelector } from "react-redux";
import Field from "../../components/field/Field";
import ImageUpload from "../../components/image/ImageUpload";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { postAction } from "../../redux/post.slice";
import {
    categoryAllSelector,
    imageSelector,
    userTokenSelector,
} from "../../selector/selector";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostAddNew = () => {
    const {
        handleSubmit,
        control,
        watch,
        setValue,
        getValues,
        formState: { isValid },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            categoryId: "",
            title: "",
            slug: "",
            status: 2,
            hot: false,
            image: "",
        },
    });

    const [selectCategory, setSeclectCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const watchImage = watch("image").split("\\").pop();
    const image = useSelector(imageSelector);
    const cateogries = useSelector(categoryAllSelector);
    const tokenUser = useSelector(userTokenSelector);
    const dispatch = useDispatch();

    const handleAddPost = async (values) => {
        setLoading(true);
        try {
            const clonevalues = { ...values };
            clonevalues.image = clonevalues.image.split("\\").pop();
            const value = clonevalues;
            dispatch(
                postAction.addPost({
                    value,
                    token: tokenUser.token.token,
                    image,
                }),
            );
            toast.success("created new post successfully");
            reset({
                title: "",
                content: "",
                image: "",
                categoryId: "",
            });
            setSeclectCategory({});
        } catch (err) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        dispatch(postAction.getCategoryAll());
    }, [dispatch]);

    const handleUploadImage = (e) => {
        dispatch(postAction.uploadImage(e));
    };

    const handleSelectCategory = (category) => {
        setValue("categoryId", category.id);
        setSeclectCategory(category);
    };

    return (
        <>
            <DashboardHeading title="Add post" desc="Add new post" />
            <Form
                className="flex flex-col items-baseline"
                onSubmit={handleSubmit(handleAddPost)}
            >
                <div className="form-layout">
                    <Field className="w-[400px]">
                        <Label>Title</Label>
                        <Input
                            type="text"
                            placeholder="Enter your title"
                            name="title"
                            control={control}
                            required
                        />
                    </Field>
                    <Field className="w-[400px]">
                        <Label>Content</Label>
                        <Input
                            type="text"
                            placeholder="Enter your content here"
                            name="content"
                            control={control}
                        />
                    </Field>
                </div>
                <div className="form-layout">
                    <Field className="w-[400px]">
                        <Label>Category</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder="Select the category" />
                            <Dropdown.List>
                                {cateogries.length > 0 &&
                                    cateogries.map((category, index) => (
                                        <Dropdown.Option
                                            key={category.id}
                                            onClick={() =>
                                                handleSelectCategory(category)
                                            }
                                        >
                                            {category.name}
                                        </Dropdown.Option>
                                    ))}
                            </Dropdown.List>
                            {selectCategory.name && (
                                <span className="inline-block p-4 mt-5 text-pink-700 rounded-lg bg-pink-50">
                                    {selectCategory.name}
                                </span>
                            )}
                        </Dropdown>
                    </Field>
                    <Field className="w-[400px]">
                        <Label>Image</Label>
                        <ImageUpload
                            type="file"
                            name="image"
                            image={watchImage}
                            className="h-[250px]"
                            control={control}
                            onChange={handleUploadImage}
                        />
                    </Field>
                </div>

                <Button
                    type="submit"
                    isLoading={loading}
                    disabled={loading}
                    className="mx-auto text-white bg-bermuda"
                >
                    Add new post
                </Button>
            </Form>
        </>
    );
};

export default PostAddNew;
